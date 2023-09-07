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