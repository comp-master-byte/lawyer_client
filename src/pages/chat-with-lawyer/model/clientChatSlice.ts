import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientChatSlice, Message } from "./types";

const initialState: ClientChatSlice = {
    messages: [],
    fetching: false,
    offset: 0
}

export const clientChatSlice = createSlice({
    name: 'client-chat',
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<any[]>) {
            state.messages = [...action.payload, ...state.messages];
        },
        resetMessages(state) {
            state.messages = [];
        },
        addMessageToArray(state, action: PayloadAction<Message>) {
            state.messages.push(action.payload);
        },
        toggleFetching(state, action: PayloadAction<boolean>) {
            state.fetching = action.payload;
        },
        incrementOffset(state) {
            state.offset += 10;
        }
    }
})

export default clientChatSlice.reducer;