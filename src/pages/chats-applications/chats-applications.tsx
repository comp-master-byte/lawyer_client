import React, { useEffect } from 'react';
import styles from "./chats-applications.module.scss";
import { Outlet, useParams } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import ApplicationsList from './components/applications-list/applications-list';
import { fetchChatList } from './model/async-actions';
import EmptyChat from './components/empty-chat/empty-chat';
import { fetchMessages } from 'pages/chat-with-lawyer/model/async-actions';
import { clientChatSlice } from 'pages/chat-with-lawyer/model/clientChatSlice';
import { chatsApplicationsSlice } from './model/chatsApplicationsSlice';

interface ApplicationsValues {
    search: string;
}

const ChatsApplications: React.FC = () => {
    const {id} = useParams();
    const {register} = useForm<ApplicationsValues>();
    const dispatch = useAppDispatch();

    const {resetMessages} = clientChatSlice.actions;
    const {setChatId} = chatsApplicationsSlice.actions;

    const {chatList} = useTypedSelector(state => state.chatsApplicationsSlice);

    const onSelectAndConnectChat = (chatId: number) => {
        dispatch(resetMessages());
        dispatch(fetchMessages(chatId));    
        dispatch(setChatId(chatId));  
    }

    useEffect(() => {
        dispatch(fetchChatList());
    }, [])

    useEffect(() => {
        if(id && chatList.length) {
            const chat = chatList.find((item) => item.question === +id);
            if(chat) {
                dispatch(fetchMessages(chat.chat_id));
            }
        }
    }, [chatList])

    return (
        <div className={styles.chatsApplicationsWrapper}>
            <div className={styles.applications}>
                <MyInput 
                    hasSearch
                    inputClassName={styles.searchInput}
                    placeholder='Поиск по сообщениям'
                    register={register("search")}
                />
                <ApplicationsList applications={chatList} onSelectAndConnectChat={onSelectAndConnectChat} />
            </div>

            {!id ? <EmptyChat></EmptyChat> : <Outlet />}            
        </div>
    )
}

export default ChatsApplications;