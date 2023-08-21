import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";

export const useSupportChat = () => {
    const dispatch = useAppDispatch();

    const {data} = useTypedSelector((state) => state.supportChatSlice);

    const [isSupportChatVisible, setIsSupportChatVisible] = useState(false);

    const closeSupportChat = useCallback(() => {
        dispatch(supportChatSlice.actions.setFetchedMessaged(null))
        setIsSupportChatVisible(false);
    }, [])

    const openSupportChat = useCallback(() => {
        dispatch(fetchMessageNode(1));
    }, [])

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