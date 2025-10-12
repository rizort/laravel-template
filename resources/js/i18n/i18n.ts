import { createI18n } from "vue-i18n";
import en from './en.json';
import es from './es.json';
import de from './de.json';
import fr from './fr.json';

const defaultLocale = localStorage.getItem('lang') || 'en';
const languages = {
    en, es, de, fr
};

const messages = Object.assign(languages);

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages
});

export default i18n;
