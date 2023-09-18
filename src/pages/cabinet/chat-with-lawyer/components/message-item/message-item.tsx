import React from 'react';
import styles from "./message-item.module.scss";
import classNames from 'classnames';
import { useTypedSelector } from 'shared/lib/hooks/redux';

interface MessageItemProps {
    message: any;
}

const MessageItem: React.FC<MessageItemProps> = ({message}) => {
    const {user} = useTypedSelector(state => state.userSlice);
    return (
        <div className={classNames(styles.messageItemWrapper, {
            [styles.receivedMessageItemWrapper]: user?.id !== message.sender,
            [styles.sentMessageItemWrapper]: user?.id === message.sender,
        })}>
            <div className={styles.messageContent}>
                <div className={styles.messageLabel}>Вы</div>
                <div className={styles.messageWrapper}>
                    {message.text}
                </div>
            </div>
        </div>
    )
}

export default MessageItem;