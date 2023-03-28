import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';

// MODELS
import { CountryNewInterface, InitialNewsStateInterface, InitialStatePayloadInterface } from 'src/redux/slices/news/models';

const initialState: InitialNewsStateInterface = {
	totalResults: 0,
	allArticles: [],
	countryArticles: {},
};

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setInitialNewsData: (state, action: PayloadAction<InitialStatePayloadInterface>) => {
			state.allArticles = action.payload.articles;
			state.totalResults = action.payload.totalResults;
		},
		setCountryNewsData: (state, action: PayloadAction<CountryNewInterface>) => {
			const { articles, country } = action.payload ?? {};

			state.countryArticles = { ...state.countryArticles, [country]: articles };
		},
	},
});

export const { setInitialNewsData, setCountryNewsData } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;
