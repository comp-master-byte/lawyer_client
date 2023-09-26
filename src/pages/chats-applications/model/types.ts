export interface ChatItem {
    chat_id: number;
    initiator: number;
    last_message: {
        attachment: null|any;
        sender: null|any;
        text: string;
    };
    receiver: number;
    question: number;
}

export interface ChatsApplicationsState {
    chatList: ChatItem[];
    isWebsocketConnected: boolean;
    chatId: number|null;
}