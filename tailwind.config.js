/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Professional Font Pairings for Calaya Engineering
        'heading': ['Montserrat', 'system-ui', 'sans-serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
        'data': ['Roboto', 'system-ui', 'sans-serif'],
        
        // Default to Open Sans for all text
        'sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'system-ui', 'sans-serif'],
        'open-sans': ['Open Sans', 'system-ui', 'sans-serif'],
        'roboto': ['Roboto', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      letterSpacing: {
        'tight': '-0.05em',
        'snug': '-0.03em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.3',
        'normal': '1.5',
        'relaxed': '1.6',
        'loose': '1.8',
      }
    },
  },
  plugins: [],
}
