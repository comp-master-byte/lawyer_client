import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { lawyerAppealsSlice } from "./lawyerAppealsSlice";


export const fetchApplications = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/lawyer_questions');
        dispatch(lawyerAppealsSlice.actions.setApplications(response.data))
    } catch(error) {
        // err
    }
}