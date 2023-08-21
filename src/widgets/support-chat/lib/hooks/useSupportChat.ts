import { useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);

    const closeSupportChat = function() {
        setIsSupportChatVisible(false);
    }

    const openSupportChat = function() {
        setIsSupportChatVisible(true);
    }

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