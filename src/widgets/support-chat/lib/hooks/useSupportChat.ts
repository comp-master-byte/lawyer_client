import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const {data, savedChains} = useTypedSelector((state) => state.supportChatSlice);

    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);
    const [isLegalAdviceModalVisible, setIsLegalAdviceModalVisible] = useState(false);

    const closeSupportChat = useCallback(() => {
        setIsSupportChatVisible(false);
    }, [])

    const openLegalAdviceModal = useCallback(() => {
        setIsSupportChatVisible(false);
        setIsLegalAdviceModalVisible(true);
    }, [])

    const backToSupportChatFromLegalModal = useCallback(() => {
        setIsLegalAdviceModalVisible(false);
        setIsSupportChatVisible(true);
    }, [])

    const closeLegalAdviceModal = useCallback(() => {
        setIsLegalAdviceModalVisible(false);
    }, [])

    const openSupportChat = useCallback(() => {
        if(!data) {
            const lastNodeId = savedChains[savedChains.length - 1];
            dispatch(fetchMessageNode(lastNodeId));
        } else {
            setIsSupportChatVisible(true);
        }
    }, [savedChains, data])

    useEffect(() => {
        if(data) {
            setIsSupportChatVisible(true);
        }
    }, [data])

    useEffect(() => {
        if(isSupportChatVisible||isLegalAdviceModalVisible) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [isSupportChatVisible, isLegalAdviceModalVisible])

    return {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    }
}