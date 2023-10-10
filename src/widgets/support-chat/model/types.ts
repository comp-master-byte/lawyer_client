import { QuestionFromChain } from "shared/model/types";

export interface SupportChatState {
    data: QuestionFromChain|null;
    savedChains: number[];
    isLoading: boolean;
    isSupportChatVisible: boolean;
    isLegalAdviceModalVisible: boolean;
}