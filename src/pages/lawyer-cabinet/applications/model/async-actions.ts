import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { applicationsSlice } from "./applicationsSlice";


export const fetchApplications = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/free_questions');
        dispatch(applicationsSlice.actions.setApplications(response.data))
    } catch(error) {
        // err
    }
}