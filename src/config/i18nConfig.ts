import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// TRANSLATIONS
import en from 'src/utils/translations/en.json';
import pl from 'src/utils/translations/pl.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: typeof resources['en'];
	}
}

export const resources = {
	en: { translation: en },
	pl: { translation: pl },
};

i18n
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources,
		debug: false,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
