import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';

const RightSupportWindow: React.FC = () => {
    return (
        <div className={classNames(styles.chatContentWrapper, styles.rightSupportChatWindow)}></div>
    )
}

export default RightSupportWindow