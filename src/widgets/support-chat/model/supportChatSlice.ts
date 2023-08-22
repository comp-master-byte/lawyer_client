import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageData, SupportChatState } from "./types";

const initialState: SupportChatState = {
    data: null,
    savedChains: [1]
}

export const supportChatSlice = createSlice({
    name: 'support-chat',
    initialState,
    reducers: {
        setFetchedMessaged(state, action: PayloadAction<MessageData|null>) {
            state.data = action.payload;
        },
        pushChainToArray(state, action: PayloadAction<number>) {
            state.savedChains.push(action.payload);
        },
        popChainFromArray(state) {
            state.savedChains.pop();
        },
        resetChainToStarted(state) {
            state.savedChains = [1]
        }
    }
})

export default supportChatSlice.reducer;