import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
    name: 'language',
    initialState: {
        selectedLanguage: localStorage.getItem('language') || 'vi',
    },
    reducers: {
        setLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
            localStorage.setItem('language', action.payload);
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
