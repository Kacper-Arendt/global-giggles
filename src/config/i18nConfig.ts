import i18next from 'i18next';

// TRANSLATIONS
import en from 'src/utils/translations/en.json'
import pl from 'src/utils/translations/pl.json'

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: (typeof resources)['en'];
	}
}

export const resources = {
	en: { translation: { ...en } },
	pl: { translation: { ...pl } },
};

const init18n = async () =>
	await i18next.init({
		lng: 'en',
		debug: true,
		resources,
	});

init18n();

const output = document.getElementById('output');
// @ts-ignore
if (output) output.innerHTML = i18next.t('key');
