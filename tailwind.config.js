// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         serif: ['Cinzel', 'serif'],
//         sans: ['Plus Jakarta Sans', 'sans-serif'],
//         mono: ['JetBrains Mono', 'monospace'],
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(8px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         slideUp: {
//           '0%': { opacity: '0', transform: 'translateY(24px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' },
//         },
//         glowPulse: {
//           '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
//           '50%': { opacity: '0.8', transform: 'scale(1.05)' },
//         },
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.4s ease-out forwards',
//         slideUp: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
//         glowPulse: 'glowPulse 4s infinite ease-in-out',
//       },
//       boxShadow: {
//         'amber-glow': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
//       },
//     },
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#F8FAFC',        // Soft Slate Background
          card: '#FFFFFF',      // Pure White Card
          border: '#E2E8F0',    // Clean Border
          primary: '#4F46E5',   // Electric Indigo Accent
          emerald: '#10B981',   // Live Indicator Green
          rose: '#F43F5E',      // Heart Rate Rose
          textDark: '#0F172A',  // Deep Slate Text
          textMuted: '#64748B'  // Muted Subtitle Gray
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
        slideUp: 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        glowPulse: 'glowPulse 4s infinite ease-in-out',
      },
      boxShadow: {
        'amber-glow': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'soft-lg': '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
        'indigo-glow': '0 8px 25px -4px rgba(79, 70, 229, 0.3)',
      },
    },
  },
  plugins: [],
};