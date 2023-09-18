import React from 'react';
import styles from "./message-list.module.scss";
import MessageItem from '../message-item/message-item';

interface MessageListProps {
    messageList: any[]
}

const MessageList: React.FC<MessageListProps> = ({messageList}) => {
    return (
        <div className={styles.messageListWrapper}>
            {messageList.map((item) => 
                <MessageItem key={item.id} message={item} />
            )}
        </div>
    )
}

export default MessageList;