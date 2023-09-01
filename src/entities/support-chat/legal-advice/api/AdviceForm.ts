import $api from "shared/api/http";
import { LegalFormValues } from "../hooks/useLegalAdviceForm";
import { adviceMapper } from "./mappers/advice-mapper";
import { toast } from "react-toastify";


export default class AdviceForm {
    static async createQuestion(data: LegalFormValues) {
        try {
            const mappedData = adviceMapper(data);
            const response = await $api.post('/api/create_question', mappedData);
            toast("Вопрос успешно отправлен", {type: "success"})
            return 200;
        } catch(error: any) {
            // err
        }
    }
}