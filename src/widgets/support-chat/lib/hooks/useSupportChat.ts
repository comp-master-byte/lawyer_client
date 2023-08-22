import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const {data, savedChains} = useTypedSelector((state) => state.supportChatSlice);

    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);

    const closeSupportChat = useCallback(() => {
        setIsSupportChatVisible(false);
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

    return {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat
    }
}