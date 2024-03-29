import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appeal, AppealsState } from "./types";

const initialState: AppealsState = {
    appeals: [],
    isFetching: true,
    offset: 0,
    maxCount: 0,
    selectedAppeal: null
} 

export const appealsSlice = createSlice({
    name: 'appeals-slice',
    initialState,
    reducers: {
        setAppeals(state, action: PayloadAction<{fetchedAppeals: Appeal[], maxCount: number}>) {
            state.appeals = [...state.appeals, ...action.payload.fetchedAppeals];
            state.maxCount = action.payload.maxCount
        },
        addAppeal(state, action: PayloadAction<any>) {
            state.appeals.unshift(action.payload);
            state.maxCount += 1;
        },
        setFetchingStatus(state, action: PayloadAction<boolean>) {
            state.isFetching = action.payload;
        },
        incrementCurrentPage(state) {
            state.offset += 10;
        },
        nullAppealsCurrentPage(state) {
            state.appeals = [];
            state.offset = 0;
            state.isFetching = true;
        },
        setSelectedAppeal(state, action: PayloadAction<Appeal>) {
            state.selectedAppeal = action.payload;
        }
    }
})

export default appealsSlice.reducer;