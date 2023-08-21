import React from 'react';
import styles from "./support-chat.module.scss";
import SupportChatButton from 'features/support-chat-button/support-chat-button';
import { useSupportChat } from './lib/hooks/useSupportChat';
import classNames from 'classnames';
import LeftSupportWindow from './components/left-support-window/left-support-window';
import RightSupportWindow from './components/right-support-window/right-support-window';

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
                    <LeftSupportWindow />
                    <RightSupportWindow />
                </div>
            </section>
        </div>
    )
}

export default SupportChat;