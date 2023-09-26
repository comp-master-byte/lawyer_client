import marketSlice from 'pages/lawyer-cabinet/market/model/marketSlice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import interestedLawyersSlice from 'pages/cabinet/waiting-lawyer-appeal/model/interestedLawyersSlice';
import authorizationSlice from 'widgets/navigation/model/authorizationSlice';
import appealsSlice from 'pages/cabinet/appeals/model/appealsSlice';
import supportChatSlice from 'widgets/support-chat/model/supportChatSlice';
import lawyerAppealsSlice from 'pages/lawyer-cabinet/lawyer-appeals/model/lawyerAppealsSlice';
import chatsApplicationsSlice from 'pages/chats-applications/model/chatsApplicationsSlice';
import userSlice from 'features/user/model/userSlice'
import clientChatSlice from 'pages/chat-with-lawyer/model/clientChatSlice';

const rootReducer = combineReducers({
    userSlice,
    supportChatSlice,
    appealsSlice,
    authorizationSlice,
    interestedLawyersSlice,
    chatsApplicationsSlice,
    lawyerAppealsSlice,
    marketSlice,
    clientChatSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];