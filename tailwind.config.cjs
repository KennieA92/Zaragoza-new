/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        tripNavOpen: {
          '0%': { marginLeft: '-10%' },
          '100%': { marginLeft: '0' },
        },
        tripNavClose: {
          '0%': { marginLeft: '0' },
          '100%': { marginLeft: '-10%' },
        },
        burgerTop: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(7px) rotate(45deg)' },
        },
        burgerBottom: {
          '0%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(-7px) rotate(-45deg)' },
        },
        burgerTopClose: {
          '0%': { transform: 'translateY(7px) rotate(45deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
        burgerBottomClose: {
          '0%': { transform: 'translateY(-7px) rotate(-45deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
        slide: {
          '30%': {
            transform: 'translateX(0)',
          },
          '35%': {
            transform: 'translateX(-100%)',
          },
          '65%': {
            transform: 'translateX(-100%)',
          },
          '70%': {
            transform: 'translateX(-200%)',
          },
          '98%': {
            transform: 'translateX(-200%)',
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        slideRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '25%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '25%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        translate: {
          '0%, 100%': { transform: 'translateY(50%)' },
          '50%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
        ,
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
        ,
        bounceRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        }
      },
      animation: {
        'tripNavOpen': 'tripNavOpen 0.5s linear 1 forwards',
        'tripNavClose': 'tripNavClose 0.5s linear 1 forwards',
        'burgerTop': 'burgerTop 0.5s linear 1 forwards',
        'burgerBottom': 'burgerBottom 0.5s linear 1 forwards',
        'burgerTopClose': 'burgerTopClose 0.5s linear 1 forwards',
        'burgerBottomClose': 'burgerBottomClose 0.5s linear 1 forwards',
        'textSlideRight': 'scrollingTextRight 20s linear infinite',
        'textSlideleft': 'scrollingTextLeft 10s linear infinite',
        'slide': 'slide 12s linear infinite',
        'slow-fade': 'fadeIn 0.5s ease-in-out 1',
        'slow-fadeOut': 'fadeOut 0.5s ease-in-out 1',
        'spin-slow': 'spin 6s linear infinite',
        'slideRight': 'slideRight 1s ease-in-out 1',
        'slideLeft': 'slideLeft 1s ease-in-out 1',
        'bounceRight': 'bounceRight 1s ease-in-out infinite',
      },
      colors: {
        'primary': '#D68C45',
        'secondary': '#4C956C',
        'tertiary': '#FBFCFC',
        'quaternary': '#FEFEE3',
        'text-secondary': '#2C6E49',
        'accent': '#233D4D',
      },
      backgroundImage: {
        'background': "url('/src/assets/entry/google.svg')",
        'albarracin': "url('/src/assets/albarracin.svg')",
        'pais_vasco': "url('/src/assets/pais_vasco.svg')",
      },
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif'],
      },
      content: {
        'rotatedbox': ''
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1990px',
      // => @media (min-width: 1920px) { ... }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
