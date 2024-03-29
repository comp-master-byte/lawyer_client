import React from 'react';
import styles from "./mobile-chat-version.module.scss";
import { useSupportChat } from '@/widgets/support-chat/lib/hooks/useSupportChat';
import SupportChatButton from '@/features/support-chat/components/support-chat-button/support-chat-button';
import Modal from '@/shared/ui/modal/modal';
import logoSvg from "../../assets/logo.svg?url";
import MobileChatHeader from './components/mobile-chat-header/mobile-chat-header';
import AnswerList from './components/answer-list/answer-list';
import QuestionsList from './components/questions-list/questions-list';
import MyButton from '@/shared/ui/MyButton/MyButton';
import LegalAdvice from '@/entities/support-chat/legal-advice/legal-advice';

const MobileChatVersion: React.FC = () => {
    const {
        isSupportChatVisible,
        closeSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    } = useSupportChat();

    return (
        <div className={styles.mobileChatVersionWrapper}>
            <SupportChatButton />

            <LegalAdvice 
                isModalVisible={isLegalAdviceModalVisible}
                backToSupportChatFromLegalModal={backToSupportChatFromLegalModal} 
                closeLegalAdviceModal={closeLegalAdviceModal}
            />

            <Modal 
                closeModal={closeSupportChat}
                isModalVisible={isSupportChatVisible} 
                modalContentClassName={styles.mobileChatContent}
            >
                <div className={styles.scrollContent}>
                    <div className={styles.blueBorder}></div>
                    <div className={styles.chatLogoPosition}>
                        <img src={logoSvg} alt="" />
                    </div>

                    <MobileChatHeader closeSupportChat={closeSupportChat} />
                    <AnswerList />
                    <QuestionsList />

                    <div className={styles.buttonContainer}>
                        <MyButton 
                            color='secondary' 
                            variant='contained'
                            btnClassName={styles.toMobileLegalAdviceButton}
                            onClick={openLegalAdviceModal}
                        >   
                            Нужна консультация юриста
                        </MyButton>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MobileChatVersion