import React, { useEffect } from 'react';
import styles from "./chats-applications.module.scss";
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { fetchAppeals } from 'pages/cabinet/appeals/model/async-actions';

const ChatsApplications: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAppeals(0, "active"));
    }, [])

    return (
        <div className={styles.chatsApplicationsWrapper}>
            <div className={styles.applications}>

            </div>

            <Outlet />
        </div>
    )
}

export default ChatsApplications;