import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);

    const closeSupportChat = useCallback(() => {
        setIsSupportChatVisible(false);
    }, [])

    const openSupportChat = useCallback(() => {
        setIsSupportChatVisible(true);
    }, [])

    useEffect(() => {
        if(isSupportChatVisible) {
            dispatch(fetchMessageNode(1));
        }
    }, [isSupportChatVisible])

    return {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat
    }
}