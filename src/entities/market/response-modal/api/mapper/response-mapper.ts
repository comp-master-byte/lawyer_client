import { ResponseValues } from "../../response-modal";

interface Result {
    cost: number;
    note: string;
    days: number;
    hours: number;
    question_id: number
}

export const mapResponseData = (data: ResponseValues, question_id: number) => {
    const result: Result = {
        note: data.note,
        cost: Number(parseInt(data.cost.split('руб')[0])),
        days: Number(data.period.split('дн')[0]),
        hours: Number(data.period.split('дн')[1].split('ч')[0].trim()),
        question_id
    };
    
    return result;
}