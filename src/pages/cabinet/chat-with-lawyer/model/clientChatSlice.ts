import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientChatSlice } from "./types";

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
        }
    }
})

export default clientChatSlice.reducer;