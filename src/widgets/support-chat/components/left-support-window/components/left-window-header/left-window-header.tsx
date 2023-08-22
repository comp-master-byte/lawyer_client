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
        const prevNodeId = savedChains[savedChains.length - 2];
        dispatch(fetchMessageNode(prevNodeId as number));
    }
    
    return (
        <header className={styles.leftWindowHeader}>
            <button 
                className={styles.leftWindowHeader__startBegin}
                onClick={() => dispatch(fetchMessageNode(1))}
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