import i18next from 'i18next'

export default i18next
  .init({
    resources: {
      en: require('../../statics/locales/en.json')
    },
    defaultNS: 'portfolio',
    fallbackLng: 'en'
  })
