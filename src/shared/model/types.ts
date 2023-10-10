export interface ISelectOption {
    id: number;
    value: string;
    label?: string;
}

export interface AppealAndApplication {
    question_id: number;
    status_name: string;
    status: StatusQuery;
}

export interface QuestionFromChain {
    answers: {
        [key: string]: number;
    };
    message: string;
    node_id: number;
    q_or_a: 'q'|'a'
}

export type StatusQuery = 'new'|'active'|'complete'|'candidates';
export type LawyerStatus = 'active'|'deny'|'complete'|'candidates';