import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { lawyerAppealsSlice } from "./lawyerAppealsSlice";
import { LawyerStatus } from "shared/model/types";


export const fetchApplications = (question__status?: LawyerStatus) => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/lawyer_questions', {params: {
            question__status
        }});
        dispatch(lawyerAppealsSlice.actions.setApplications(response.data))
    } catch(error) {
        // err
    }
}