import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const {toggleSupportChatVisibility} = supportChatSlice.actions;

    const {isSupportChatVisible} = useTypedSelector((state) => state.supportChatSlice);

    const [isLegalAdviceModalVisible, setIsLegalAdviceModalVisible] = useState(false);

    const closeSupportChat = useCallback(() => {
        dispatch(toggleSupportChatVisibility(false));
    }, [])

    const openLegalAdviceModal = useCallback(() => {
        dispatch(toggleSupportChatVisibility(false));
        setIsLegalAdviceModalVisible(true);
    }, [])

    const backToSupportChatFromLegalModal = useCallback(() => {
        setIsLegalAdviceModalVisible(false);
        dispatch(toggleSupportChatVisibility(true));
    }, [])

    const closeLegalAdviceModal = useCallback(() => {
        setIsLegalAdviceModalVisible(false);
    }, [])

    useEffect(() => {
        if(isSupportChatVisible||isLegalAdviceModalVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isSupportChatVisible, isLegalAdviceModalVisible])

    return {
        isSupportChatVisible,
        closeSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    }
}