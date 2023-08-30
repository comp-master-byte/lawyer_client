export interface Appeal {
    question_id: number;
    question_text: string,
    topic: string,
    created_by: number,
    status: string,
    status_name: string,
    interested_lawyers: any[],
    lawyer: null
}

export interface AppealsState {
    appeals: Appeal[]
}