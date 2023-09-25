import React from 'react';
import styles from "./message-item.module.scss";
import classNames from 'classnames';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { Message } from '../../model/types';

interface MessageItemProps {
    message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({message}) => {
    const {user} = useTypedSelector(state => state.userSlice);
    return (
        <div className={classNames(styles.messageItemWrapper, {
            [styles.receivedMessageItemWrapper]: user?.id !== message.sender.id,
            [styles.sentMessageItemWrapper]: user?.id === message.sender.id,
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