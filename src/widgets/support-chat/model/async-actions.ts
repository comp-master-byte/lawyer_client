import { AppDispatch } from "app/providers/store";
import axios from "axios";
import { API_URL } from "shared/api/http";
import { supportChatSlice } from "./supportChatSlice";


export const fetchMessageNode = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/node/1`);
        dispatch(supportChatSlice.actions.setFetchedMessaged(response.data));
    } catch(error) {
        // ошибка
    }
}