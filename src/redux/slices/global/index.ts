import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';

export interface InitialGlobalStateInterface {
	listStyle: 'card' | 'list';
}

const initialState: InitialGlobalStateInterface = {
	listStyle: 'card',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		globalSetListStyle: (state, action: PayloadAction<InitialGlobalStateInterface['listStyle']>) => {
			state.listStyle = action.payload;
		},
	},
});

export const { globalSetListStyle } = globalSlice.actions;

export const selectGlobal = (state: RootState) => state.global;

export default globalSlice.reducer;
