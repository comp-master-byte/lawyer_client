import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationState } from "./types";

const initialState: AuthorizationState = {
    isRegisterModalVisible: false
}

export const authorizationSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        toggleRegisterModalVisibility(state, action: PayloadAction<boolean>) {
            state.isRegisterModalVisible = action.payload;
        }
    }
})

export default authorizationSlice.reducer;