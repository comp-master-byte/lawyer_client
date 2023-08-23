import React from 'react';
import styles from "./mobile-chat-version.module.scss";
import { useSupportChat } from 'widgets/support-chat/lib/hooks/useSupportChat';
import SupportChatButton from 'features/support-chat-button/support-chat-button';
import Modal from 'shared/ui/modal/modal';
import MyButton from 'shared/ui/MyButton/MyButton';
import backSvg from "../../assets/backArrow.svg";
import closeMobileSvg from "../../assets/closeMobile.svg";
import logoSvg from "../../assets/logo.svg";

const MobileChatVersion: React.FC = () => {
    const {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    } = useSupportChat();

    return (
        <div className={styles.mobileChatVersionWrapper}>
            <SupportChatButton openSupportChat={openSupportChat} />

            <Modal 
                isModalVisible={isSupportChatVisible} 
                modalContentClassName={styles.mobileChatContent}
            >
                <div className={styles.blueBorder}></div>
                <div className={styles.chatLogoPosition}>
                    <img src={logoSvg} alt="" />
                </div>

                <header className={styles.chatNavigationContent}>
                    <MyButton 
                        color='primary' 
                        variant='contained' 
                        btnClassName={styles.returnToBeginButton}
                    >
                        Начать сначала
                    </MyButton>
                    <div className={styles.navigationButtons}>
                        <div className={styles.returnToPrevQuestionButton}>
                            <img src={backSvg} alt="" />
                            <p className={styles.returnToPrevQuestionButton__text}>вернуться к предыдущему вопросу</p>
                        </div>
                        <div>
                            <img src={closeMobileSvg} alt="" />
                        </div>
                    </div>
                </header>
            </Modal>
        </div>
    )
}

export default MobileChatVersion