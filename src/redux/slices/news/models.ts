export interface InitialNewsStateInterface {
	totalResults: number;
	allArticles: Article[];
	countryArticles: { [key in PossibleCountriesType]: Article[] } | {};
}

export interface InitialStatePayloadInterface {
	totalResults: number;
	articles: Article[];
}

export interface CountryNewInterface {
	country: PossibleCountriesType;
	articles: Article[];
}

export interface Article {
	author: string;
	content: string;
	description: string;
	publishedAt: string;
	title: string;
	url: string;
	urlToImage: string;
	source: {
		id: string;
		name: string;
	};
}

export const possibleCountries = ['pl', 'ar', 'de', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pt', 'ru', 'sv'] as const;

export type PossibleCountriesType = typeof possibleCountries[number];
