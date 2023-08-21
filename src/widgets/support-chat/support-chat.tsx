import React from 'react';
import styles from "./support-chat.module.scss";
import SupportChatButton from 'features/support-chat-button/support-chat-button';
import { useSupportChat } from './lib/hooks/useSupportChat';
import classNames from 'classnames';
import LeftSupportWindow from './components/left-support-window/left-support-window';
import RightSupportWindow from './components/right-support-window/right-support-window';
import MyButton from 'shared/UI/MyButton/MyButton';

const SupportChat: React.FC = () => {
    const {
        isSupportChatVisible,
        closeSupportChat,
        openSupportChat
    } = useSupportChat();

    return (
        <div className={styles.supportChat}>
            <SupportChatButton openSupportChat={openSupportChat} />

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
                    >
                        Нужна консультация юриста
                    </MyButton>
                </div>
            </section>
        </div>
    )
}

export default SupportChat;