export interface Application {
    created_by: number;
    question_id: number;
    question_text: string;
    status: string;
    status_name: string;
    topic: string;
}

export interface ApplicationsState {
    applications: Application[];
}