import { AppDispatch } from "app/providers/store";
import axios from "axios";
import { API_URL } from "shared/api/http";
import { supportChatSlice } from "./supportChatSlice";


export const fetchMessageNode = (index: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(supportChatSlice.actions.toggleLoadingStatus(true));
        const response = await axios.get(`${API_URL}/api/node/${index}`);
        dispatch(supportChatSlice.actions.setFetchedMessaged(response.data));
    } catch(error) {
        // Error
    } finally {
        dispatch(supportChatSlice.actions.toggleLoadingStatus(false));
    }
}