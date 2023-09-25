import React from 'react';
import styles from "./message-list.module.scss";
import MessageItem from '../message-item/message-item';
import { Message } from '../../model/types';

interface MessageListProps {
    messageList: Message[]
}

const MessageList: React.FC<MessageListProps> = ({messageList}) => {
    return (
        <div className={styles.messageListWrapper}>
            {messageList.map((item, index) => 
                <MessageItem key={index} message={item} />
            )}
        </div>
    )
}

export default MessageList;