import { combineReducers, configureStore } from "@reduxjs/toolkit";
import interestedLawyersSlice from 'pages/cabinet/waiting-lawyer-appeal/model/interestedLawyersSlice';
import userSlice from './userSlice';
import authorizationSlice from 'widgets/navigation/model/authorizationSlice';
import appealsSlice from 'pages/cabinet/appeals/model/appealsSlice';
import supportChatSlice from 'widgets/support-chat/model/supportChatSlice';

const rootReducer = combineReducers({
    userSlice,
    supportChatSlice,
    appealsSlice,
    authorizationSlice,
    interestedLawyersSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];