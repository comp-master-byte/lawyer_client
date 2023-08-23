import React from 'react';
import styles from "./support-chat.module.scss";
import DesktopChatVersion from './components/desktop-chat-version/desktop-chat-version';

const SupportChat: React.FC = () => {
    return (
        <div className={styles.supportChat}>
            <DesktopChatVersion />
            
        </div>
    )
}

export default SupportChat;