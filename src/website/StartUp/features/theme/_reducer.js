import { WEBSITE_NAME } from '@config/_defaultData';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode : JSON.parse(localStorage.getItem(WEBSITE_NAME.startup)) ?? 'light'

}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeThemeMode : (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            localStorage.setItem(WEBSITE_NAME.startup, JSON.stringify(state.mode))
        }
    }
})

export const { changeThemeMode } = themeSlice.actions

export default themeSlice.reducer