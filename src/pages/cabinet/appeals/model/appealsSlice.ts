import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appeal, AppealsState } from "./types";

const initialState: AppealsState = {
    appeals: [],
    isFetching: true,
    currentPage: 1,
    maxCount: 0
} 

export const appealsSlice = createSlice({
    name: 'appeals-slice',
    initialState,
    reducers: {
        setAppeals(state, action: PayloadAction<{fetchedAppeals: Appeal[], maxCount: number}>) {
            state.appeals = [...state.appeals, ...action.payload.fetchedAppeals];
            state.maxCount = action.payload.maxCount
        },
        setFetchingStatus(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
        incrementCurrentPage(state) {
            state.currentPage += 1;
        }
    }
})

export default appealsSlice.reducer;