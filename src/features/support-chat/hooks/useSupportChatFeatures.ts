import { useCallback } from "react";
import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";


export const useSupportChatFeatures = () => {
    const dispatch = useAppDispatch();

    const {data, savedChains} = useTypedSelector((state) => state.supportChatSlice);
    
    const {toggleSupportChatVisibility, toggleLoadingStatus} = supportChatSlice.actions;

    const openSupportChat = useCallback(() => {
        if(!data) {
            dispatch(toggleLoadingStatus(true));
            const lastNodeId = savedChains[savedChains.length - 1];
            dispatch(fetchMessageNode(lastNodeId));
            dispatch(toggleSupportChatVisibility(true));
        } else {
            dispatch(toggleSupportChatVisibility(true));
        }
    }, [savedChains, data])

    return {openSupportChat}
}