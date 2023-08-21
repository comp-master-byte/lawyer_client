import supportChatSlice from './../../widgets/support-chat/model/supportChatSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    supportChatSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];