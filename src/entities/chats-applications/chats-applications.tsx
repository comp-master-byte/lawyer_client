import React, { useEffect } from 'react';
import styles from "./chats-applications.module.scss";
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { fetchAppeals } from 'pages/cabinet/appeals/model/async-actions';
import { useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import ApplicationsList from './components/applications-list/applications-list';

const ChatsApplications: React.FC = () => {
    const {register} = useForm<{search: ""}>()
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAppeals(0, "active"));
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

                <ApplicationsList applications={[{question_id: 1}, {question_id: 2}, {question_id: 3}]} />
            </div>

            <Outlet />
        </div>
    )
}

export default ChatsApplications;