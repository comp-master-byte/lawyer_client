import { useEffect, useRef }  from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { useParams } from 'react-router-dom';
import $api from 'shared/api/http';
import { clientChatSlice } from '../../model/clientChatSlice';

interface IChatValues {
    message: string
}

export const useChatWithLawyer = () => {
    const {register, reset, handleSubmit} = useForm<IChatValues>();
    const websocket = useRef<WebSocket|null>(null);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    const {user} = useTypedSelector(state => state.userSlice);
    const {chatId, chatList} = useTypedSelector(state => state.chatsApplicationsSlice);

    const {sendMessage} = clientChatSlice.actions;

    const onSendMessage: SubmitHandler<IChatValues> = async (data) => {
        const message = {
            text: data.message,
            sender: {
                id: user?.id as number,
                full_name: user?.full_name as string
            }
        }
        dispatch(sendMessage(message));
        reset({message: ""});
        if(!chatId && id) {
            const chat = chatList.find((item) => item.question === +id);            
            return await $api.post(`/api/send_message/${chat?.chat_id}`, {message: data.message});
        } else {
            return await $api.post(`/api/send_message/${chatId}`, {message: data.message});
        }
    }    

    useEffect(() => {
        if(chatId) {
            websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/chat/${chatId}`);
            websocket.current.onopen = function() {
                console.log('Соединение с чатом установлено', id);
            }
        } else if(chatList.length && id) {
            const chat = chatList.find((item) => item.question === +id);      
            websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/chat/${chat?.chat_id}`);
            websocket.current.onopen = function() {
                console.log('Соединение с чатом установлено', id);
            }
        }
    }, [chatId, chatList]) 

    return {
        register,
        handleSubmit,
        onSendMessage
    }
}