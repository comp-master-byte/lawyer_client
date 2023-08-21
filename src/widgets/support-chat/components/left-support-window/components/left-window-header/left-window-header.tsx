import React from 'react';
import styles from "./left-window-header.module.scss";
import backArrowSvg from "../../../../assets/backArrow.svg";
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';

const LeftWindowHeader: React.FC = () => {
    const dispatch = useAppDispatch();
    
    return (
        <header className={styles.leftWindowHeader}>
            <button 
                className={styles.leftWindowHeader__startBegin}
                onClick={() => dispatch(fetchMessageNode(1))}
            >
                Начать сначала
            </button>
            <div className={styles.backToPrevQuestion}>
                <img src={backArrowSvg} alt='' />
                <p className={styles.backToPrevQuestion__text}>
                    вернуться <br /> к предыдущему <br /> вопросу
                </p>
            </div>
        </header>
    )
}

export default LeftWindowHeader;