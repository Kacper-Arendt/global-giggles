import { useCallback } from 'react';

export const useTranslatedLang = ({ lang, translateTo }: { lang: string; translateTo?: string }) => {
	const getTranslatedLang = useCallback(() => {
		try {
			if (lang || translateTo) {
				// RETURNS TRANSLATED LANGUAGE e.g. pl. -> Polski, en -> English
				const languageNames = new Intl.DisplayNames([translateTo ?? lang], { type: 'language' });
				const currentLanguage = languageNames.of(lang);

				// Capitalize
				return currentLanguage ?? '';
			}
		} catch (e) {
			console.log(e); // eslint-disable-line
		}

		return null;
	}, [lang]);

	return getTranslatedLang();
};
