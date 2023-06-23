/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as labs from "vuetify/labs/components";
// Translations provided by Vuetify
import { en, tr } from "vuetify/locale";

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labs,
  },
  locale: {
    locale: "tr",
    fallback: "en",
    messages: { tr, en },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})
