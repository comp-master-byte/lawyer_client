import { AppDispatch } from "@/app/store/store";
import $api from "@/shared/api/http";
import { marketSlice } from "./marketSlice";


export const fetchMarketQuestions = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/free_questions');
        dispatch(marketSlice.actions.setMarketQuestions(response.data));
    } catch(error) {}
}

export const getChainForQuestion = (questionId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(marketSlice.actions.toggleChainLoading(true));
        const response = await $api.get(`/api/get_chain_for_question/${questionId}`);
        dispatch(marketSlice.actions.setQuestionFromTheChain(response.data));
    } catch(err) {

    } finally {
        dispatch(marketSlice.actions.toggleChainLoading(false));
    }
}