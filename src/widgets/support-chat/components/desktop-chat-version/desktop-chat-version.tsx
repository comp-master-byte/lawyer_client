import React from 'react';
import styles from "./desktop-chat-version.module.scss";
import LeftSupportWindow from './components/left-support-window/left-support-window';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useSupportChat } from 'widgets/support-chat/lib/hooks/useSupportChat';
import classNames from 'classnames';
import SupportChatButton from 'features/support-chat-button/support-chat-button';
import RightSupportWindow from './components/right-support-window/right-support-window';
import LegalAdvice from 'entities/support-chat/legal-advice/legal-advice';

const DesktopChatVersion: React.FC = () => {
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
        <div className={styles.desktopChatVersion}>
            <SupportChatButton openSupportChat={openSupportChat} />

            <LegalAdvice 
                isModalVisible={isLegalAdviceModalVisible} 
                closeLegalAdviceModal={closeLegalAdviceModal} 
                backToSupportChatFromLegalModal={backToSupportChatFromLegalModal}
            />

            <section className={classNames(styles.supportChatWrapper, {[styles.supportChatVisible]: isSupportChatVisible})}>
                <div className={styles.supportChatContent}>
                    <div className={styles.supportChatWindow}>
                        <LeftSupportWindow />
                        <RightSupportWindow closeSupportChatCallback={closeSupportChat} />
                    </div>
                    <MyButton 
                        color='secondary' 
                        variant='contained'
                        size='large' 
                        btnClassName={styles.lawyerConsultationButton}
                        onClick={openLegalAdviceModal}
                    >
                        Нужна консультация юриста
                    </MyButton>
                </div>
            </section>
        </div>
    )
}

export default DesktopChatVersion;