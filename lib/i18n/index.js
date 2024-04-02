import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import { IS_DEV } from '../../webpack/constants/environment.constants'

import resources from './resources'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: IS_DEV,
    fallbackLng: 'en',
    interpolation: {
      nestingOptionsSeparator: '.',
      escapeValue: false,
    },
    resources,
    useSuspense: false,
  })

export default i18n
