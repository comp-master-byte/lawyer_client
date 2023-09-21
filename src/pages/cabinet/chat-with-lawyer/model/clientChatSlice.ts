import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientChatSlice, Message } from "./types";

const initialState: ClientChatSlice = {
    messages: []
}

export const clientChatSlice = createSlice({
    name: 'client-chat',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<any[]>) {
            state.messages = action.payload;
        },
        resetMessages(state) {
            state.messages = [];
        },
        sendMessage(state, action: PayloadAction<Message>) {
            state.messages.push(action.payload);
        }
    }
})

export default clientChatSlice.reducer;