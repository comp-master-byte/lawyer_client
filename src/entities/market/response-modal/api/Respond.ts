import $api from "@/shared/api/http";
import { ResponseValues } from "../response-modal";
import { mapResponseData } from "./mapper/response-mapper";


export default class Respond {
    static async sendResponse(data: ResponseValues, question_id: number) {
        try {
            const mappedData = mapResponseData(data, question_id);
            const response = await $api.put('/api/take_question', mappedData);
            return 200;
        } catch(err: any) {}
    }
}