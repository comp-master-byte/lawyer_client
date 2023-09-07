import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Application, ApplicationsState } from "./types";

const initialState: ApplicationsState = {
    applications: []
}

export const applicationsSlice = createSlice({
    name: 'applications-slice',
    initialState,
    reducers: {
        setApplications(state, action: PayloadAction<Application[]>) {
            state.applications = action.payload;
        }
    }
})

export default applicationsSlice.reducer;