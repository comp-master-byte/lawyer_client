import { useAppDispatch, useTypedSelector } from "shared/lib/hooks/redux";
import { fetchMessageNode } from "widgets/support-chat/model/async-actions";
import { supportChatSlice } from "widgets/support-chat/model/supportChatSlice";


export const useChatNavigation = () => {
    const dispatch = useAppDispatch();

    const {savedChains} = useTypedSelector((state) => state.supportChatSlice);
    
    const backToThePreviousChain = function() {
        dispatch(supportChatSlice.actions.popChainFromArray());
        let prevNodeId = savedChains[savedChains.length - 2]
        if(savedChains.length === 1) {
            prevNodeId = 1;
        }
        dispatch(fetchMessageNode(prevNodeId as number));
    }

    const resetAndStartFromBegin = function() {
        dispatch(fetchMessageNode(1));
        dispatch(supportChatSlice.actions.resetChainToStarted());
    }

    return {
        backToThePreviousChain,
        resetAndStartFromBegin
    }
}