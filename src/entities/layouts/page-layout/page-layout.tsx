import React from 'react';
import styles from "./page-layout.module.scss";
import { Outlet } from 'react-router-dom';
import Footer from '@/widgets/footer/footer';
import Navigation from '@/widgets/navigation/navigation';
import { Helmet } from 'react-helmet-async';
import SupportChat from '@/widgets/support-chat/support-chat';
import { useTypedSelector } from '@/shared/lib/hooks/redux';
import { useCabinetLayout } from './hooks/useCabinetLayout';

const PageLayout: React.FC = () => {
    const {user} = useTypedSelector(state => state.userSlice);

    useCabinetLayout();
    
    return (
        <div className={styles.wrapper}>
            <Helmet>
                <title>Юра прав - твой цифровой юридический помощник</title>
                <meta name="description" content='Задайте свой вопрос бесплатному помощнику Юре или составьте обращение к юристу' data-rh="true"  />
            </Helmet>
            <Navigation />  
                <div className={styles.pageContentWrapper}>
                    <div className={styles.container}>
                        <Outlet />
                    </div>
                </div>
            {!user?.is_lawyer && <SupportChat />}
            <Footer />
        </div>
    )
}

export default PageLayout;