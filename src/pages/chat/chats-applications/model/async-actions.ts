import { AppDispatch } from "@/app/store/store";
import $api from "@/shared/api/http";
import { chatsApplicationsSlice } from "./chatsApplicationsSlice";

export const fetchChatList = () => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get('/api/get_chat_list');
        dispatch(chatsApplicationsSlice.actions.setChatList(response.data));
    } catch(error: any) {
        // err
    }
}