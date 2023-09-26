import React, { useMemo } from 'react';
import styles from "./message-item.module.scss";
import classNames from 'classnames';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { Message } from '../../model/types';

interface MessageItemProps {
    message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({message}) => {
    const {user} = useTypedSelector(state => state.userSlice);

    const IS_LAWYER = useMemo(() => {
        return user?.id === message.sender.id
    }, [user]);

    return (
        <div className={classNames(styles.messageItemWrapper, {
            [styles.receivedMessageItemWrapper]: !IS_LAWYER,
            [styles.sentMessageItemWrapper]: IS_LAWYER,
        })}>
            <div className={styles.messageContent}>
                <div className={styles.messageLabel}>{IS_LAWYER ? "Вы" : message.sender.full_name}</div>
                <div className={styles.messageWrapper}>
                    {message.text}
                </div>
            </div>
        </div>
    )
}

export default MessageItem;