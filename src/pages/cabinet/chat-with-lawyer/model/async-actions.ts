import { AppDispatch } from "app/store/store";
import $api from "shared/api/http";

export const fetchMessages = (chatId: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await $api.get(`/api/get_chat/${chatId}`, {params: {
            limit: 10,
            offset: 0
        }});
        console.log(response.data);
        
    } catch(error) {}
}