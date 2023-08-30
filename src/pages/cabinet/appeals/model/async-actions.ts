import { AppDispatch } from "app/providers/store";
import $api from "shared/api/http";
import { appealsSlice } from "./appealsSlice";


export const fetchAppeals = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/users_questions');
        dispatch(appealsSlice.actions.setAppeals(response.data));
    } catch(error: any) {
         // err
    }
}