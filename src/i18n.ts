import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locale/en.json';
import viTranslation from './locale/vi.json';

const resources = {
    vi: { translation: viTranslation },
    en: { translation: enTranslation },
};

const language = localStorage.getItem('language') || 'vi';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: language,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
