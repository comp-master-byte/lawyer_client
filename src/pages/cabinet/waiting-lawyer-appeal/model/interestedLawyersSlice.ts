import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterestedLawyer, InterestedLawyersState } from "./types";

const initialState: InterestedLawyersState = {
    interestedLawyers: [],
    isLawyersLoading: false,
}

export const interestedLawyersSlice = createSlice({
    name: 'interested-lawyers',
    initialState,
    reducers: {
        setInterestedLawyers(state, action: PayloadAction<InterestedLawyer[]>) {
            state.interestedLawyers = action.payload
        },
        toggleLawyersLoading(state, action: PayloadAction<boolean>) {
            state.isLawyersLoading = action.payload;
        }
    }
})

export default interestedLawyersSlice.reducer;