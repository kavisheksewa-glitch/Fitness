import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// Unique cookie key for the luxury brand
const COOKIE_KEY = 'aurum_client_status';
const COOKIE_EXPIRY_DAYS = 30;

// Create Context
const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [clientStatus, setClientStatus] = useState('loading'); // 'loading' | 'new_visitor' | 'returning_member'

  // Initialize and check client cookies on mount
  useEffect(() => {
    const savedStatus = Cookies.get(COOKIE_KEY);

    if (!savedStatus) {
      // First-time client detected
      setIsFirstVisit(true);
      setShowWelcomeModal(true);
      setClientStatus('new_visitor');
    } else {
      // Returning client detected
      setIsFirstVisit(false);
      setShowWelcomeModal(false);
      setClientStatus(savedStatus);
    }
  }, []);

  // Function called when client clicks "Claim VIP Experience" or dismisses modal
  const acknowledgeWelcome = () => {
    // Store returning member status in secure browser cookie
    Cookies.set(COOKIE_KEY, 'returning_member', { 
      expires: COOKIE_EXPIRY_DAYS, 
      path: '/',
      sameSite: 'Lax',
      secure: window.location.protocol === 'https:'
    });

    setIsFirstVisit(false);
    setShowWelcomeModal(false);
    setClientStatus('returning_member');
  };

  // Function to manually trigger modal (e.g., from Navbar CTA or Footer)
  const openWelcomeModal = () => {
    setShowWelcomeModal(true);
  };

  // Function to close modal without updating permanent cookie status
  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  // Utility to reset status (useful for testing/debugging)
  const resetClientCookies = () => {
    Cookies.remove(COOKIE_KEY, { path: '/' });
    setIsFirstVisit(true);
    setShowWelcomeModal(true);
    setClientStatus('new_visitor');
  };

  return (
    <ClientContext.Provider
      value={{
        isFirstVisit,
        showWelcomeModal,
        clientStatus,
        acknowledgeWelcome,
        openWelcomeModal,
        closeWelcomeModal,
        resetClientCookies,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

// Custom Hook to consume Client Context in any component
export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('useClient must be used within a ClientProvider');
  }
  return context;
};