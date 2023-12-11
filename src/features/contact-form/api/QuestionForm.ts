import axios from "axios";
import { API_URL } from "@/shared/api/http";
import { ContractFormValues } from "../model/types";
import { toast } from "react-toastify";


export default class QuestionForm {
    static async questionToEmail(message: ContractFormValues) {
        try {   
            const response = await axios.post(`${API_URL}/api/send_question_to_email`, message);
            toast(response.data, {type: "success"})
            return response.data;
        } catch(error: any) {
            toast("Произошла ошибка", {type: "error"})
        }
    }
}