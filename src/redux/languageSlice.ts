import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        currentLanguage: 'vi',
        languages: [],
    },
    reducers: {
        setLanguages(state, action) {
            state.languages = action.payload;
        },
        changeLanguage(state, action) {
            state.currentLanguage = action.payload;
        },
    },
});

export const { setLanguages, changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
