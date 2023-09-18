import React from 'react';
import styles from "./application-item.module.scss";
import { ChatItem } from '../../model/types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { clientChatSlice } from 'pages/cabinet/chat-with-lawyer/model/clientChatSlice';
import { fetchMessages } from 'pages/cabinet/chat-with-lawyer/model/async-actions';

interface ApplicationItemProps {
    application: ChatItem;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({application}) => {
    const dispatch = useAppDispatch();

    const {resetMessages} = clientChatSlice.actions;

    const selectChat = (chatId: number) => {
        dispatch(resetMessages());
        dispatch(fetchMessages(chatId));
    }

    return (
        <Link 
            className={styles.applicationWrapper}
            to={`/cabinet/chats/${application.chat_id}`} 
            onClick={() => selectChat(application.chat_id)}
        >
            Заявка {application.chat_id}
        </Link>
    )
}

export default ApplicationItem;