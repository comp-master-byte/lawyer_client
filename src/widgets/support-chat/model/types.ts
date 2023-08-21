export interface MessageData {
    answers: {
        [key: string]: number;
    };
    message: string;
    node_id: number;
    q_or_a: 'q'|'a'
}

export interface SupportChatState {
    data: MessageData|null;
}