import React from 'react';
import styles from "./static-user-information.module.scss";
import MyButton from '@/shared/ui/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '@/shared/lib/hooks/redux';

const StaticUserInformation: React.FC = () => {
    const navigate = useNavigate();

    const {user} = useTypedSelector(state => state.userSlice);

    return (
        <section className={styles.editProfileContent}>
            <div className={styles.userFioInformation}>{user?.full_name}</div>
            <MyButton 
                color='primary' 
                variant='contained'
                onClick={() => navigate(-1)}
                btnClassName={styles.goBackButton}
            >
                Назад   
            </MyButton>
        </section>
    )
}

export default StaticUserInformation;