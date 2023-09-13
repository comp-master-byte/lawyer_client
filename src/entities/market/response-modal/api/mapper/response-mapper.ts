import { ResponseValues } from "../../response-modal";

interface Result {
    cost: number;
    response: string;
    days: string;
    hours: string;
    question_id: number
}

export const mapResponseData = (data: ResponseValues, question_id: number) => {
    const result: Result = {
        response: data.response,
        cost: Number(parseInt(data.cost.split('руб')[0])),
        days: data.period.split('дн')[0],
        hours: data.period.split('дн')[1].split('ч')[0].trim(),
        question_id
    };
    
    return result;
}