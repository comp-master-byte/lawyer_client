import { AppDispatch } from "app/providers/store";
import $api from "shared/api/http";
import { appealsSlice } from "./appealsSlice";
import { Appeal } from "./types";


export const fetchAppeals = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get<{results: Appeal[]}>('/api/users_questions', {
            params: {
                limit: 5,
                offset: 1
            }
        });
        dispatch(appealsSlice.actions.setAppeals(response.data.results));
    } catch(error: any) {
         // err
    }
}