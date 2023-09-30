import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationState } from "./types";

const initialState: AuthorizationState = {
    isRegisterModalVisible: false, 
    isSuccessRegisterModalVisible: false,
    isSignInModalVisible: false,
    isSuccessResetPassword: false,
    isResetPasswordModalVisible: true,
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
        },
        toggleSuccessResetPasswordModalVisibility(state, action: PayloadAction<boolean>) {
            state.isSuccessResetPassword = action.payload;
        },
        toggleResetPasswordModalVisibility(state, action: PayloadAction<boolean>) {
            state.isResetPasswordModalVisible = action.payload;
        },
    }
})

export default authorizationSlice.reducer;