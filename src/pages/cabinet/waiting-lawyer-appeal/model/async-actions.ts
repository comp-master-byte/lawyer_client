import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { interestedLawyersSlice } from "./interestedLawyersSlice";


export const fetchInterestedLawyers = (id: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get(`/api/interested_lawyers_information/${id}`);
        dispatch(interestedLawyersSlice.actions.setInterestedLawyers(response.data));
    } catch(error: any) {
        // err
    }
}