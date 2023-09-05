import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InterestedLawyer, InterestedLawyersState } from "./types";

const initialState: InterestedLawyersState = {
    interestedLawyers: []
}

export const interestedLawyersSlice = createSlice({
    name: 'interested-lawyers',
    initialState,
    reducers: {
        setInterestedLawyers(state, action: PayloadAction<InterestedLawyer[]>) {
            state.interestedLawyers = action.payload
        }
    }
})

export default interestedLawyersSlice.reducer;