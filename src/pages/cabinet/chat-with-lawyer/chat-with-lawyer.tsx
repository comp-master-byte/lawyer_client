import React  from 'react';
import styles from "./chat-with-lawyer.module.scss";
import MyInput from 'shared/ui/MyInput/MyInput';
import MyButton from 'shared/ui/MyButton/MyButton';
import MessageList from './components/message-list/message-list';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { useChatWithLawyer } from './lib/hooks/useChatWithLawyer';

const ChatWithLawyer: React.FC = () => {
    const {messages} = useTypedSelector(state => state.clientChatSlice);
    const {
        register,
        handleSubmit,
        onSendMessage
    } = useChatWithLawyer();

    return (
        <div className={styles.chatWithLawyerWrapper}>
            <div className={styles.chatWindow}>
                <MessageList messageList={messages} />
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