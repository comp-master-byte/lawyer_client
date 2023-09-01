import React from 'react';
import styles from "./desktop-chat-version.module.scss";
import LeftSupportWindow from './components/left-support-window/left-support-window';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useSupportChat } from 'widgets/support-chat/lib/hooks/useSupportChat';
import classNames from 'classnames';
import SupportChatButton from 'features/support-chat/components/support-chat-button/support-chat-button';
import RightSupportWindow from './components/right-support-window/right-support-window';
import LegalAdvice from 'entities/support-chat/legal-advice/legal-advice';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside';

const DesktopChatVersion: React.FC = () => {
    const {
        isSupportChatVisible,
        closeSupportChat,
        isLegalAdviceModalVisible,
        openLegalAdviceModal,
        closeLegalAdviceModal,
        backToSupportChatFromLegalModal
    } = useSupportChat();

    const supportChatContentRef = useClickOutside(() => {
        closeSupportChat();
    })

    return (
        <div className={styles.desktopChatVersion}>
            <SupportChatButton />

            <LegalAdvice 
                isModalVisible={isLegalAdviceModalVisible} 
                closeLegalAdviceModal={closeLegalAdviceModal} 
                backToSupportChatFromLegalModal={backToSupportChatFromLegalModal}
            />

            <section className={classNames(styles.supportChatWrapper, {[styles.supportChatVisible]: isSupportChatVisible})}>
                <div ref={supportChatContentRef} className={styles.supportChatContent}>
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