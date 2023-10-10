import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatItem, ChatsApplicationsState } from "./types";

const initialState: ChatsApplicationsState = {
    chatList: [],
    isWebsocketConnected: false,
    chatId: null
}

export const chatsApplicationsSlice = createSlice({
    name: 'chats-applications',
    initialState,
    reducers: {
        setChatList(state, action: PayloadAction<ChatItem[]>) {
            state.chatList = action.payload;
        },
        toggleWebsocketConnection(state, action: PayloadAction<boolean>) {
            state.isWebsocketConnected = action.payload;
        },
        setChatId(state, action: PayloadAction<number>) {
            state.chatId = action.payload;
        }
    }
})

export default chatsApplicationsSlice.reducer;