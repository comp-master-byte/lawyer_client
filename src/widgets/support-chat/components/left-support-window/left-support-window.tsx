import React from 'react';
import styles from "./left-support-window.module.scss";
import classNames from 'classnames';

const LeftSupportWindow: React.FC = () => {
    return (
        <div className={classNames(styles.chatContentWrapper, styles.leftSupportChatWindow)}></div>
    )
}

export default LeftSupportWindow;