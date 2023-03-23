export interface InitialNewsStateInterface {
	totalResults: number;
	articles: Article[];
}

export interface InitialStatePayloadInterface extends Pick<InitialNewsStateInterface, 'totalResults' | 'articles'> {}

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
