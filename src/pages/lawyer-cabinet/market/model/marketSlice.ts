import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarketQuestion, MarketState } from "./types";

const initialState: MarketState = {
    freeQuestions: []
}

export const marketSlice = createSlice({
    name: 'market-slice',
    initialState,
    reducers: {
        setMarketQuestions(state, action: PayloadAction<MarketQuestion[]>) {
            state.freeQuestions = action.payload;
        },
        deleteFreeQuestion(state, action: PayloadAction<number>) {
            state.freeQuestions = state.freeQuestions.filter(question => question.question_id !== action.payload);
        }
    }
})

export default marketSlice.reducer;