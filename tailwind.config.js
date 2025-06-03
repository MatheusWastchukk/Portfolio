/** @type {import('tailwindcss').Config} */

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          float1: {
            '0%': { transform: 'translate(0, 0) scale(1)' },
            '100%': { transform: 'translate(10%, 10%) scale(1.1)' },
          },
          float2: {
            '0%': { transform: 'translate(0, 0) scale(1)' },
            '100%': { transform: 'translate(-10%, -5%) scale(1.15)' },
          },
          float3: {
            '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
            '100%': { transform: 'translate(-5%, 10%) scale(1.05)', opacity: '0.6' },
          },
        },
        animation: {
          float1: 'float1 15s ease-in-out infinite alternate',
          float2: 'float2 18s ease-in-out infinite alternate',
          float3: 'float3 20s ease-in-out infinite alternate',
        },
      },
    },
  }