import React from 'react';
import styles from "./support-chat-button.module.scss";
import botButtonSvg from "./assets/bot.svg";

interface SupportChatButtonProps {
    openSupportChat: () => void;
}

const SupportChatButton: React.FC<SupportChatButtonProps> = ({openSupportChat}) => {
    return (
        <div className={styles.botButton} onClick={openSupportChat}>
            <img src={botButtonSvg} alt="" />
        </div>
    )
}

export default SupportChatButton;