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

import DateFnsAdapter from '@date-io/date-fns'
import enUS from 'date-fns/locale/en-US'
import trTr from 'date-fns/locale/tr'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    ...labs,
  },
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      tr: trTr,
    },
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
