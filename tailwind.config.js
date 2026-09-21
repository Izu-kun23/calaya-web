/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Custom breakpoints tuned for handheld-first design
    screens: {
      xxs: "320px",
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
    },
    extend: {
      fontFamily: {
        // Editorial system from docs/design.md
        'display': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        'heading': ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'data': ['Roboto', 'system-ui', 'sans-serif'],
        
        // Default to Open Sans for all text
        'sans': ['Inter', 'system-ui', 'sans-serif'],
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
