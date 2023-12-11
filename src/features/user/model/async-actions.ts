import { AppDispatch } from "@/app/store/store";
import $api from "@/shared/api/http";
import { userSlice } from "./userSlice";

export const fetchUser = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/auth/users/me/');
        const userData = response.data;
        const toStringUserData = JSON.stringify(userData);
        localStorage.setItem('user', toStringUserData);
        dispatch(userSlice.actions.setUser(userData));
    } catch(error: any) {
        // error
    }
}