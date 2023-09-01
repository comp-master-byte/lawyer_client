import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationState } from "./types";

const initialState: AuthorizationState = {
    isRegisterModalVisible: false, 
    isSuccessRegisterModalVisible: false,
    isSignInModalVisible: false
}

export const authorizationSlice = createSlice({
    name: 'auth-slice',
    initialState,
    reducers: {
        toggleRegisterModalVisibility(state, action: PayloadAction<boolean>) {
            state.isRegisterModalVisible = action.payload;
        },
        toggleSuccessRegisterModalVisibility(state, action: PayloadAction<boolean>) {
            state.isSuccessRegisterModalVisible = action.payload;
        },
        toggleSignInModalVisibility(state, action: PayloadAction<boolean>) {
            state.isSignInModalVisible = action.payload;
        }
    }
})

export default authorizationSlice.reducer;