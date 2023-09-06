import React from 'react';
import styles from "./message-item.module.scss";
import classNames from 'classnames';

interface MessageItemProps {
    status: 'receive'|'send'
}

const MessageItem: React.FC<MessageItemProps> = ({status}) => {
    return (
        <div className={classNames(styles.messageItemWrapper, {
            [styles.receivedMessageItemWrapper]: status === "receive",
            [styles.sentMessageItemWrapper]: status === "send",
        })}>
            <div className={styles.messageContent}>
                <div className={styles.messageLabel}>Вы</div>
                <div className={styles.messageWrapper}>
                    Акопьян Карэн Арсэнович пришел к вам в гости и написал весь Фронтенд!
                </div>
            </div>
        </div>
    )
}

export default MessageItem;