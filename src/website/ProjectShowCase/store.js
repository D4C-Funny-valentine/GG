import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage";
import { projectShowCaseDrawerReducer } from "./features";
import { persistStore, persistReducer } from "redux-persist";

const projectShowCasePersistConfig = {
    key: 'projectShowCase',
    storage
}

const reducers = combineReducers({
    drawer : projectShowCaseDrawerReducer
})

const persistedReducer = persistReducer(projectShowCasePersistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store);