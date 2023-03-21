import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/redux/store';

interface InitialStateInterface {
	sectionName: string | null,
	
}

const initialState: InitialStateInterface = {
	sectionName: null,
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		globalSetSectionName: (state, action: PayloadAction< string | null>) => {
			state.sectionName = action.payload;
		},
	},
});

export const {
	globalSetSectionName,
} = globalSlice.actions;

export const selectGlobal = (state: RootState) => state.global;

export default globalSlice.reducer;
