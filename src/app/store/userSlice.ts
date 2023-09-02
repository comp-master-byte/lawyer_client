import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user-slice',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;