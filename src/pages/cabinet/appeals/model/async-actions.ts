import { AppDispatch } from "@/app/store/store";
import $api from "@/shared/api/http";
import { appealsSlice } from "./appealsSlice";
import { Appeal } from "./types";
import { StatusQuery } from "@/shared/model/types";


export const fetchAppeals = (offset: number, status?: StatusQuery) => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get<{results: Appeal[], count: number}>('/api/users_questions', {
            params: {limit: 10, offset, status}
        });
        dispatch(appealsSlice.actions.incrementCurrentPage());
        dispatch(appealsSlice.actions.setAppeals({fetchedAppeals: response.data.results, maxCount: response.data.count}));
    } catch(error: any) {
        // err
    } finally {
        dispatch(appealsSlice.actions.setFetchingStatus(false));
    }
}