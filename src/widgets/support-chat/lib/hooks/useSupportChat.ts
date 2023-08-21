import { useState } from "react";

export const useSupportChat = () => {
    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);

    const closeSupportChat = function() {
        setIsSupportChatVisible(false);
    }

    const openSupportChat = function() {
        setIsSupportChatVisible(true);
    }

    return {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat
    }
}