import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageData, SupportChatState } from "./types";

const initialState: SupportChatState = {
    data: null
}

export const supportChatSlice = createSlice({
    name: 'support-chat',
    initialState,
    reducers: {
        setFetchedMessaged(state, action: PayloadAction<MessageData|null>) {
            state.data = action.payload;
        }
    }
})

export default supportChatSlice.reducer;