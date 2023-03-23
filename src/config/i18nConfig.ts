import { init, t } from 'i18next';

// TRANSLATIONS
import en from 'src/utils/translations/en.json';
import pl from 'src/utils/translations/pl.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: typeof resources['en'];
	}
}

export const resources = {
	en: { translation: { ...en } },
	pl: { translation: { ...pl } },
};

const init18n = async () =>
	init({
		lng: 'en',
		debug: false,
		resources,
	});

init18n();

const output = document.getElementById('output');
if (output) output.innerHTML = t('key' as any);
