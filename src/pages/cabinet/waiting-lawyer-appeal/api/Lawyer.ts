import { toast } from "react-toastify";
import $api from "@/shared/api/http";

export default class Lawyer {
    static async choose_lawyer(question_id: number, lawyer_id: number) {
        try {
            const response = await $api.put('/api/choose_lawyer', {question_id, lawyer_id});
            const response2 = await $api.post('/api/create_chat', {receiver_id: lawyer_id, question_id});
            return 200;
        } catch(error: any) {
           toast("Что-то пошло не так...", {type: "error"})
        }
    }
}