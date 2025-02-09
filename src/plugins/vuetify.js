// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light', // Set default theme to light
    themes: {
      light: {
        colors: {
          primary:'#081e7f', // Example primary color
        },
      },
    },
  },
});