import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "../../assets/close.svg";

interface RightSupportWindowProps {
    closeSupportChatCallback: () => void;
}

const RightSupportWindow: React.FC<RightSupportWindowProps> = ({closeSupportChatCallback}) => {
    return (
        <div className={classNames(styles.chatContentWrapper, styles.rightSupportChatWindow)}>
            <header className={styles.rightWindowHeader}>
                <div className={styles.closeButton} onClick={closeSupportChatCallback}>
                    <img src={closeSvg} alt="" />
                </div>
            </header>
        </div>
    )
}

export default RightSupportWindow