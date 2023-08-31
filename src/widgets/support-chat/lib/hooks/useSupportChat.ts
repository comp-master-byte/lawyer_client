import { useSupportChatFeatures } from "features/support-chat/hooks/useSupportChatFeatures";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const {openSupportChat} = useSupportChatFeatures();

    const {toggleSupportChatVisibility, toggleLegalAdviceModalVisibility} = supportChatSlice.actions;

    const {isSupportChatVisible, isLegalAdviceModalVisible, data} = useTypedSelector((state) => state.supportChatSlice);

    const closeSupportChat = useCallback(() => {
        dispatch(toggleSupportChatVisibility(false));
    }, [])

    const closeLegalAdviceModal = useCallback(() => {
        dispatch(toggleLegalAdviceModalVisibility(false));
    }, [])

    const openLegalAdviceModal = useCallback(() => {
        dispatch(toggleSupportChatVisibility(false));
        dispatch(toggleLegalAdviceModalVisibility(true));
    }, [])

    const backToSupportChatFromLegalModal = useCallback(() => {
        dispatch(toggleLegalAdviceModalVisibility(false));
        openSupportChat();
    }, [data])

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