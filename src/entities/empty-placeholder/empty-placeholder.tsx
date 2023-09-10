import React from 'react';
import styles from "./empty-placeholder.module.scss";
import MyButton from 'shared/ui/MyButton/MyButton';
import { useNavigate } from 'react-router-dom';

const EmptyPlaceholder: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.emptyPlaceholderWrapper}>
            <p className={styles.emptyText}>
                Вам сначала требуется заполнить профиль и пройти верификацию, чтобы получить доступ к заявкам
            </p>
            <MyButton
                color='secondary'
                variant='contained'
                size='large'
                btnClassName={styles.emptyButton}
                onClick={() => navigate('/lawyer-cabinet/profile')}
            >
                Перейти к заполнению профиля
            </MyButton>
        </div>
    )
}

export default EmptyPlaceholder;