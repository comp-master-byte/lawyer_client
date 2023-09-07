import React, { useEffect } from 'react';
import styles from "./page-layout.module.scss";
import { fetchUser } from 'app/store/async-actions';
import { userSlice } from 'app/store/userSlice';
import { Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import Footer from 'widgets/footer/footer';
import Navigation from 'widgets/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import SupportChat from 'widgets/support-chat/support-chat';

const PageLayout: React.FC = () => {
    const dispatch = useAppDispatch();
    const {pathname} = useLocation();

    useEffect(() => {
        const user = localStorage.getItem('user');

        if(!user) {
            dispatch(fetchUser());
            return;
        } 

        const parsedUser = JSON.parse(user);
        dispatch(userSlice.actions.setUser(parsedUser))
    }, [])
    
    return (
        <div className={styles.wrapper}>
            <Helmet>
                <title>Юра прав - твой цифровой юридический помощник</title>
                <meta name="description" content='Задайте свой вопрос бесплатному помощнику Юре или составьте обращение к юристу' data-rh="true"  />
                <link rel="canonical" href={pathname} />
            </Helmet>
            <Navigation />  
            <div className={styles.pageContentWrapper}>
                <div className={styles.container}>
                    <Outlet />
                </div>
            </div>
            <SupportChat />
            <Footer />
        </div>
    )
}

export default PageLayout;