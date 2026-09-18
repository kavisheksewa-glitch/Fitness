import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, Menu, X, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.webp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/workouts', label: 'Workouts' },
    { path: '/diets', label: 'Diets' },
    { path: '/equipment', label: 'Equipment' },
    { path: '/trainers', label: 'Trainers' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-amber-200/80 py-4 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-amber-100 py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-10 flex items-center justify-between gap-2">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 lg:gap-3 group shrink-0">
          <img
            src={logo}
            alt="Muscle Empire Gym Logo"
            className="w-9 h-10 lg:w-10 lg:h-11 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-serif text-base lg:text-lg font-black tracking-wider text-slate-900 group-hover:text-amber-700 transition-colors">
              MUSCLE
            </span>
            <span className="text-[9px] lg:text-xs xl:text-sm font-mono uppercase tracking-[0.2em] lg:tracking-[0.25em] text-amber-700 font-bold whitespace-nowrap">
              EMPIRE GYM
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links - now switches at lg instead of md so the cramped 768–1024px zone doesn't break */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8 font-mono min-w-0 overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs xl:text-sm font-bold uppercase tracking-[0.1em] xl:tracking-[0.15em] transition-all relative py-1 whitespace-nowrap shrink-0 ${
                isActive(link.path)
                  ? 'text-amber-700'
                  : 'text-slate-600 hover:text-amber-700'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Header Right Action CTA */}
        <div className="hidden lg:flex items-center shrink-0 font-mono">
          <Link
            to="/vip-access"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold uppercase rounded-xl transition-all duration-300 shadow-md shadow-amber-600/20 whitespace-nowrap
              px-3.5 py-2.5 xl:px-5
              text-[10px] xl:text-xs tracking-[0.1em] xl:tracking-[0.15em]"
          >
            <Crown className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xl:inline">Location Access</span>
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Toggle - now shows up to lg */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 hover:text-amber-700 p-2 rounded-lg bg-white/80 border border-amber-200 shadow-sm shrink-0"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-amber-200 px-6 py-6 space-y-4 shadow-xl font-mono">
          <nav className="flex flex-col space-y-3 text-xs font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-2 border-b border-amber-100 uppercase tracking-wider ${
                  isActive(link.path) ? 'text-amber-700 font-extrabold' : 'text-slate-600'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-amber-500" />
              </Link>
            ))}
          </nav>

          <div className="pt-2">
            <Link
              to="/vip-access"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold text-xs uppercase tracking-[0.2em] py-3.5 rounded-xl shadow-md shadow-amber-600/20"
            >
              <Crown className="w-4 h-4" />
              <span>Location Access</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}