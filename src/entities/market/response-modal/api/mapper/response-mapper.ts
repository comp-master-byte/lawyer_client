import { ResponseValues } from "../../response-modal";

interface Result {
    cost: number;
    note: string;
    days: number;
    hours: number;
    question_id: number
}

const normalizeStringFormatter = (str: string) => {
    return Number(str.split("").map(Number).filter(item => Number.isInteger(item)).join(''));
}

export const mapResponseData = (data: ResponseValues, question_id: number) => {
    const {period} = data;

    const [days, hours] = period.split(" ");
    
    const result: Result = {
        note: data.note,
        cost: Number(parseInt(data.cost.split('руб')[0])),
        days: normalizeStringFormatter(days),
        hours: normalizeStringFormatter(hours),
        question_id
    };
    
    return result;
}