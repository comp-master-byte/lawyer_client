export interface Message {
    attachment?: any;
    text: string;
    timestamp?: string;
    sender: {
        id: number;
        full_name: string;
    },
}

export interface ClientChatSlice {
    messages: Message[];
    fetching: boolean;
    offset: number;
    maxCount: number;
}