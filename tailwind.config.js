import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#5B4EFF',
        secondary: '#4CAF71',
        surface: '#FAFAFA',
        textDark: '#1A1A1A',
        textGray: '#6B7280'
      }
    }
  },
  plugins: []
}
