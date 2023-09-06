import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatItem, ChatsApplicationsState } from "./types";

const initialState: ChatsApplicationsState = {
    chatList: []
}

export const chatsApplicationsSlice = createSlice({
    name: 'chats-applications',
    initialState,
    reducers: {
        setChatList(state, action: PayloadAction<ChatItem[]>) {
            state.chatList = action.payload;
        }
    }
})

export default chatsApplicationsSlice.reducer;