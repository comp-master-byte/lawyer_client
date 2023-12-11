import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportChatState } from "./types";
import { QuestionFromChain } from "@/shared/model/types";

const initialState: SupportChatState = {
    data: null,
    savedChains: [1],
    isLoading: false,
    isSupportChatVisible: false,
    isLegalAdviceModalVisible: false,
}

export const supportChatSlice = createSlice({
    name: 'support-chat',
    initialState,
    reducers: {
        setFetchedMessaged(state, action: PayloadAction<QuestionFromChain|null>) {
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
        },
        toggleLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        toggleSupportChatVisibility(state, action: PayloadAction<boolean>) {
            state.isSupportChatVisible = action.payload;
        },
        toggleLegalAdviceModalVisibility(state, action: PayloadAction<boolean>) {
            state.isLegalAdviceModalVisible = action.payload;
        }
    }
})

export default supportChatSlice.reducer;