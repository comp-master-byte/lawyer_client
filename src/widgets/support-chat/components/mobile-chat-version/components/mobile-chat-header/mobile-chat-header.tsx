import React from 'react';
import styles from "./mobile-chat-header.module.scss";
import MyButton from 'shared/ui/MyButton/MyButton';
import backSvg from "widgets/support-chat/assets/backArrow.svg"
import closeMobileSvg from "widgets/support-chat/assets/closeMobile.svg";
import { useChatNavigation } from 'widgets/support-chat/lib/hooks/useChatNavigation';

interface MobileChatHeaderProps {
    closeSupportChat: () => void;
}

const MobileChatHeader: React.FC<MobileChatHeaderProps> = ({closeSupportChat}) => {
    const {backToThePreviousChain, resetAndStartFromBegin} = useChatNavigation();

    return (
        <header className={styles.chatNavigationContent}>
            <MyButton 
                color='primary' 
                variant='contained' 
                btnClassName={styles.returnToBeginButton}
                onClick={resetAndStartFromBegin}
            >
                Начать сначала
            </MyButton>
            <div className={styles.navigationButtons}>
                <div className={styles.returnToPrevQuestionButton} onClick={backToThePreviousChain}>
                    <img src={backSvg} alt="" />
                    <p className={styles.returnToPrevQuestionButton__text}>вернуться к предыдущему вопросу</p>
                </div>
                <div onClick={closeSupportChat}>
                    <img src={closeMobileSvg} alt="" />
                </div>
            </div>
        </header>
    )
}

export default MobileChatHeader;