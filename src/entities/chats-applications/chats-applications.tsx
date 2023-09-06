import React, { useEffect } from 'react';
import styles from "./chats-applications.module.scss";
import { Outlet } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import ApplicationsList from './components/applications-list/applications-list';
import { fetchChatList } from './model/async-actions';

interface ApplicationsValues {
    search: string;
}

const ChatsApplications: React.FC = () => {
    const {register} = useForm<ApplicationsValues>();

    const dispatch = useAppDispatch();

    const {chatList} = useTypedSelector(state => state.chatsApplicationsSlice);

    useEffect(() => {
        dispatch(fetchChatList());
    }, [])

    return (
        <div className={styles.chatsApplicationsWrapper}>
            <div className={styles.applications}>
                <MyInput 
                    hasSearch
                    inputClassName={styles.searchInput}
                    placeholder='Поиск по сообщениям'
                    register={register("search")}
                />

                <ApplicationsList applications={chatList} />
            </div>

            <Outlet />
        </div>
    )
}

export default ChatsApplications;