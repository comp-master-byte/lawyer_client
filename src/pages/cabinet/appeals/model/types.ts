import { StatusQuery } from "@/shared/model/types";

export interface Appeal {
    question_id: number;
    question_text: string;
    topic: string;
    created_by: number;
    status: StatusQuery,
    status_name: string,
    interested_lawyers: any[],
    lawyer: null
}

export interface AppealsState {
    appeals: Appeal[];
    isFetching: boolean;
    offset: number;
    maxCount: number;
    selectedAppeal: Appeal|null;
}
