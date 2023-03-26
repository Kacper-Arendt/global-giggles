import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';

// MODELS
import { InitialNewsStateInterface, InitialStatePayloadInterface } from 'src/redux/slices/news/models';

const initialState: InitialNewsStateInterface = {
	totalResults: 0,
	allArticles: [],
};

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setInitialNewsData: (state, action: PayloadAction<InitialStatePayloadInterface>) => {
			state.allArticles = action.payload.articles;
			state.totalResults = action.payload.totalResults;
		},
	},
});

export const { setInitialNewsData } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news;

export default newsSlice.reducer;
