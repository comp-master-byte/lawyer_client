import { LawyerStatus } from "@/shared/model/types";

export interface Application {
    cost: number;
    dead_line: null;
    note: string;
    question: {
        created_by: number;
        question_id: number;
        question_text: string;
        status: LawyerStatus;
        status_name: string;
        topic: string;
    }
}

export interface ApplicationsState {
    applications: Application[];
}