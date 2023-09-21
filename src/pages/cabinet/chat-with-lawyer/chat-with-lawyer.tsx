import React, { useEffect, useRef }  from 'react';
import styles from "./chat-with-lawyer.module.scss";
import MyInput from 'shared/ui/MyInput/MyInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from 'shared/ui/MyButton/MyButton';
import MessageList from './components/message-list/message-list';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { chatsApplicationsSlice } from 'entities/layouts/chats-applications/model/chatsApplicationsSlice';
import { useParams } from 'react-router-dom';
import { clientChatSlice } from './model/clientChatSlice';

interface IChatValues {
    message: string
}

const ChatWithLawyer: React.FC = () => {
    const {register, reset, handleSubmit} = useForm<IChatValues>();
    const websocket = useRef<WebSocket>();
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const {user} = useTypedSelector(state => state.userSlice);
    const {messages} = useTypedSelector(state => state.clientChatSlice);
    const {isWebsocketConnected} = useTypedSelector(state => state.chatsApplicationsSlice);

    const {toggleWebsocketConnection} = chatsApplicationsSlice.actions;
    const {sendMessage} = clientChatSlice.actions;

    const onSendMessage: SubmitHandler<IChatValues> = (data) => {
        const toStringData = JSON.stringify(data);
        websocket.current?.send(toStringData);
        const message = {
            text: data.message,
            sender: {
                id: user?.id as number,
                full_name: user?.full_name as string
            }
        }
        dispatch(sendMessage(message));
        reset({message: ""});
    }    

    useEffect(() => {
        if(isWebsocketConnected) {
            
        }
    
        if(id && user) {
            console.log(id);
            
            websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/chat/${id}/${user.id}`);
            websocket.current.onopen = function() {
                console.log('Соединение с чатом установлена', id);
            }
            dispatch(toggleWebsocketConnection(true));
        }
    }, [id, user])


    return (
        <div className={styles.chatWithLawyerWrapper}>
            <div className={styles.chatWindow}>
                <MessageList  messageList={messages} />
            </div>
            <form onSubmit={handleSubmit(onSendMessage)} className={styles.sendMessageWrapper}>
                <MyInput 
                    hasFile
                    placeholder='Написать сообщение'
                    register={register("message")}
                    inputClassName={styles.messageInput}
                />
                <MyButton   
                    type='submit'
                    color='primary'
                    variant='outlined'
                    size='large'
                    btnClassName={styles.sendMessageButton}
                >
                    Отправить
                </MyButton>
            </form>
        </div>
    )
}

export default ChatWithLawyer;