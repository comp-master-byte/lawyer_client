import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appeal, AppealsState } from "./types";

const initialState: AppealsState = {
    appeals: []
} 

export const appealsSlice = createSlice({
    name: 'appeals-slice',
    initialState,
    reducers: {
        setAppeals(state, action: PayloadAction<Appeal[]>) {
            state.appeals = action.payload;
        }
    }
})

export default appealsSlice.reducer;