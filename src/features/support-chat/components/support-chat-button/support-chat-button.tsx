import React from 'react';
import styles from "./support-chat-button.module.scss";
import botButtonSvg from "./assets/bot.svg";
import { useSupportChatFeatures } from 'features/support-chat/hooks/useSupportChatFeatures';


const SupportChatButton: React.FC = () => {
    const {openSupportChat} = useSupportChatFeatures();

    return (
        <div className={styles.botButton} onClick={openSupportChat}>
            <img src={botButtonSvg} alt="" />
        </div>
    )
}

export default SupportChatButton;