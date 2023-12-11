import React from 'react';
import styles from "./left-window-header.module.scss";
import backArrowSvg from '@/widgets/support-chat/assets/backArrow.svg?url'
import { useChatNavigation } from '@/widgets/support-chat/lib/hooks/useChatNavigation';

const LeftWindowHeader: React.FC = () => {
    const {
        backToThePreviousChain,
        resetAndStartFromBegin
    } = useChatNavigation();
    
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