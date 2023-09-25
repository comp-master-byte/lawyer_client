import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";
import { clientChatSlice } from "./clientChatSlice";

export const fetchMessages = (chatId: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get(`/api/get_chat/${chatId}`, {params: {
            limit: 10,
            offset: 0
        }});
        const messages = await response.data.results.reverse();
        dispatch(clientChatSlice.actions.setMessages(messages));
    } catch(error) {}
}