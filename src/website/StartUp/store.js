import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { startUpDrawerReducer, themeSettingReducer } from './features';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const startupPersistConfig = {
    key : 'startup',
    storage
}

const reducers = combineReducers({
    theme : themeSettingReducer,
    drawer : startUpDrawerReducer
})

const persistedReudcer = persistReducer(startupPersistConfig, reducers);

export const store = configureStore({
    reducer: persistedReudcer
})

export const persistor = persistStore(store);