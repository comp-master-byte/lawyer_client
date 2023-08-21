import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportChatState } from "./types";

const initialState: SupportChatState = {
    messages: []
}

export const supportChatSlice = createSlice({
    name: 'support-chat',
    initialState,
    reducers: {
        setFetchedMessaged(state, action: PayloadAction<any[]>) {
            state.messages = action.payload;
        }
    }
})

export default supportChatSlice.reducer;