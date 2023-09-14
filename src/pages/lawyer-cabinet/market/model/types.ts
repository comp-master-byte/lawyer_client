export interface MarketQuestion {
    created_by: {
        full_name: string;
    };
    question_id: number;
    question_text: string;
    status: string;
    status_name: string;
    topic: string;
}

export interface MarketState {
    freeQuestions: MarketQuestion[]
}