import { useEffect, useRef }  from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { useParams } from 'react-router-dom';
import { clientChatSlice } from '../../model/clientChatSlice';
import Message from '../../api/Message';
import { messageMapper } from '../helpers/message-mapper';
import { User } from 'features/user/model/types';

interface IChatValues {
    text: string
}

export const useChatWithLawyer = () => {
    const {register, reset, handleSubmit} = useForm<IChatValues>();

    const websocket = useRef<WebSocket|null>(null);
    const chatWindowRef = useRef<HTMLDivElement|null>(null);

    const {id} = useParams();
    const dispatch = useAppDispatch();

    const {user} = useTypedSelector(state => state.userSlice);
    const {chatId, chatList} = useTypedSelector(state => state.chatsApplicationsSlice);

    const {addMessageToArray} = clientChatSlice.actions;

    const scrollHandler = (event: any) => {
        if(event.target.scrollTop < 100) {

        }
    }

    const onSendMessage: SubmitHandler<IChatValues> = async (data) => {
        let result: boolean|undefined = false;
        if(!chatId && id && chatWindowRef.current) {
            const chat = chatList.find((item) => item.question === +id);            
            result = await Message.sendMessage({message: data.text}, chat?.chat_id as number);
        } else {
            result = await Message.sendMessage({message: data.text}, chatId as number);
        }

        if(result && chatWindowRef.current) {
            dispatch(addMessageToArray(messageMapper(data, user as User)));
            chatWindowRef.current.scrollTo({
                top: 1000
            })
            reset({text: ""});
        }
    }    

    const websocketConnection = (chatId: number) => {
        websocket.current = new WebSocket(`wss://backend.juraprav.ru/ws/chat/${chatId}`);
        websocket.current.onopen = function() {
            console.log('Соединение с чатом установлено', id);
        }
        websocket.current.onmessage = function(event) {
            const parsedMessage = JSON.parse(event.data);
            if(parsedMessage.sender.id !== user?.id) {
                dispatch(addMessageToArray(messageMapper(parsedMessage, user as User)));    
                chatWindowRef?.current?.scrollTo({
                    top: 1000
                })
            } 
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

    useEffect(() => {
        if(chatWindowRef?.current) {
            chatWindowRef.current.addEventListener('scroll', scrollHandler);
    
        }

        if(chatWindowRef?.current) {
            return function() {
                chatWindowRef.current?.removeEventListener('scroll', scrollHandler);
            }
        }
    }, [])

    return {
        register,
        handleSubmit,
        onSendMessage,
        chatWindowRef,
    }
}