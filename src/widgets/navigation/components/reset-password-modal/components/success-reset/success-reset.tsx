import React from 'react';
import styles from "./success-reset.module.scss";
import MyButton from '@/shared/ui/MyButton/MyButton';
import { useAppDispatch } from '@/shared/lib/hooks/redux';
import { authorizationSlice } from '@/widgets/navigation/model/authorizationSlice';

interface SuccessResetProps {
    closeModal: () => void;
}

const SuccessReset: React.FC<SuccessResetProps> = ({closeModal}) => {
    const dispatch = useAppDispatch();

    const {toggleSignInModalVisibility} = authorizationSlice.actions;

    const toAuthorization = () => {
        closeModal();
        dispatch(toggleSignInModalVisibility(true))
    }

    return (
        <article className={styles.successResetWrapper}>  
            <h2 className={styles.successResetWrapper__title}>Пароль успешно измененен</h2>
            <MyButton
                color='secondary'
                variant='contained'
                size='large'
                onClick={toAuthorization}
            >
                Войти в личный кабинет
            </MyButton>
        </article>
    )
}

export default SuccessReset;