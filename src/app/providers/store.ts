import userSlice from './../store/userSlice';
import authorizationSlice from 'widgets/navigation/model/authorizationSlice';
import appealsSlice from 'pages/cabinet/appeals/model/appealsSlice';
import supportChatSlice from 'widgets/support-chat/model/supportChatSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    userSlice,
    supportChatSlice,
    appealsSlice,
    authorizationSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];