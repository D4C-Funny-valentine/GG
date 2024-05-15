import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { drawerReducer, themeSettingReducer } from './features';
import

const reducers = combineReducers({
    theme : themeSettingReducer,
    drawer : drawerReducer
})

export const store = configureStore({
    reducer: reducers
})