export interface ISelectOption {
    id: number;
    value: string;
    label?: string;
}

export interface AppealAndApplication {
    question_id: number;
    status_name: string;
    status: string;
}

export type StatusQuery = 'new'|'active'|'complete'|'candidates';
export type LawyerStatus = |'new'|'active'|'deny'|'complete'|'candidates';