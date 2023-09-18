import React  from 'react';
import styles from "./chat-with-lawyer.module.scss";
import MyInput from 'shared/ui/MyInput/MyInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import MyButton from 'shared/ui/MyButton/MyButton';
import MessageList from './components/message-list/message-list';

interface IChatValues {
    message: string
}

const ChatWithLawyer: React.FC = () => {
    const {register, reset, handleSubmit} = useForm<IChatValues>();

    const onSendMessage: SubmitHandler<IChatValues> = (data) => {
        console.log(data);
        
        // reset({message: ""})
    }    

    return (
        <div className={styles.chatWithLawyerWrapper}>
            <div className={styles.chatWindow}>
                <MessageList  messageList={[]} />
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