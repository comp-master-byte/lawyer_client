import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketQuestion, MarketState } from "./types";
import { QuestionFromChain } from "@/shared/model/types";

const initialState: MarketState = {
    freeQuestions: [],
    chainQuestion: null,
    isChainLoading: false
}

export const marketSlice = createSlice({
    name: 'market-slice',
    initialState,
    reducers: {
        setMarketQuestions(state, action: PayloadAction<MarketQuestion[]>) {
            state.freeQuestions = action.payload;
        },
        setQuestionFromTheChain(state, action: PayloadAction<QuestionFromChain>) {
            state.chainQuestion = action.payload;
        },
        deleteFreeQuestion(state, action: PayloadAction<number>) {
            state.freeQuestions = state.freeQuestions.filter(question => question.question_id !== action.payload);
        },
        toggleChainLoading(state, action: PayloadAction<boolean>) {
            state.isChainLoading = action.payload;
        }
    }
})

export default marketSlice.reducer;