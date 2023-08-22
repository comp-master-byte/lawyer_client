import React from 'react';
import styles from "./left-window-header.module.scss";
import backArrowSvg from "../../../../assets/backArrow.svg";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';
import { supportChatSlice } from 'widgets/support-chat/model/supportChatSlice';

const LeftWindowHeader: React.FC = () => {
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
    
    return (
        <header className={styles.leftWindowHeader}>
            <button 
                className={styles.leftWindowHeader__startBegin}
                onClick={resetAndStartFromBegin}
            >
                Начать сначала
            </button>
            <div onClick={backToThePreviousChain} className={styles.backToPrevQuestion}>
                <img src={backArrowSvg} alt='' />
                <p className={styles.backToPrevQuestion__text}>
                    вернуться <br /> к предыдущему <br /> вопросу
                </p>
            </div>
        </header>
    )
}

export default LeftWindowHeader;