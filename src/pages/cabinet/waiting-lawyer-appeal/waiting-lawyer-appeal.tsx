import React from 'react';
import styles from "./waiting-lawyer-appeal.module.scss";
import { useNavigate, useParams } from 'react-router-dom';
import MyButton from 'shared/ui/MyButton/MyButton';

const WaitingLawyerAppeal: React.FC = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    return (
        <div className={styles.lawyerAppealWrapper}>
            <header className={styles.lawyerAppealHeader}>
                <MyButton
                    color='primary'
                    variant='outlined'
                    size='large'
                    btnClassName={styles.goBackButton}
                    onClick={() => navigate(-1)}
                >
                    Вернуться назад
                </MyButton>

                <div className={styles.lawyerAppealTitle}>
                    <h1 className={styles.lawyerAppealTitle__h1}>Обращение {id}</h1>
                    <h2 className={styles.lawyerAppealTitle__h2}>Ожидает выбора юриста</h2>
                </div>
            </header>
        </div>
    )
}

export default WaitingLawyerAppeal;