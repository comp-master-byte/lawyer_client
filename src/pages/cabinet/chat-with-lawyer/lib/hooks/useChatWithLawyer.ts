import { useEffect, useRef }  from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { useParams } from 'react-router-dom';
import { clientChatSlice } from '../../model/clientChatSlice';
import Message from '../../api/Message';

interface IChatValues {
    message: string
}

export const useChatWithLawyer = () => {
    const {register, reset, handleSubmit} = useForm<IChatValues>();

    const websocket = useRef<WebSocket|null>(null);
    const chatWindowRef = useRef<HTMLDivElement|null>(null);

    const {id} = useParams();
    const dispatch = useAppDispatch();

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
        if(!chatId && id && chatWindowRef && chatWindowRef.current) {
            const chat = chatList.find((item) => item.question === +id);            
            const res = await Message.sendMessage({message: data.message}, chat?.chat_id as number);
            chatWindowRef.current.scrollTo({
                top: chatWindowRef.current.scrollHeight
            })
        } else {
            const res = await Message.sendMessage({message: data.message}, chatId as number);
            chatWindowRef.current?.scrollTo({
                top: chatWindowRef.current.scrollHeight
            })
        }
    }    

    const websocketConnection = (chatId: number) => {
        websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/chat/${chatId}`);
        websocket.current.onopen = function() {
            console.log('Соединение с чатом установлено', id);
        }
    }

    useEffect(() => {
        if(chatId) {
            websocketConnection(chatId);
        } else if(chatList.length && id) {
            const chat = chatList.find((item) => item.question === +id);      
            websocketConnection(chat?.chat_id as number)
        }
    }, [chatId, chatList]) 

    useEffect(() => {
        if(chatList?.length && websocket.current?.readyState !== websocket.current?.CLOSED) {
            chatWindowRef.current?.scrollTo({
                top: 1000
            })
        }
    }, [chatList, websocket.current])

    return {
        register,
        handleSubmit,
        onSendMessage,
        chatWindowRef,
    }
}