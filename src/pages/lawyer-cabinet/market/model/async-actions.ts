import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { marketSlice } from "./marketSlice";


export const fetchMarketQuestions = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/free_questions');
        dispatch(marketSlice.actions.setMarketQuestions(response.data));
    } catch(error) {
        // err
    }
}