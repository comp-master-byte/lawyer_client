import React, { useEffect } from 'react';
import styles from "./waiting-lawyer-appeal.module.scss";
import { useNavigate, useParams } from 'react-router-dom';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { fetchInterestedLawyers } from './model/async-actions';
import LawyersList from './components/lawyers-list/lawyers-list';

const WaitingLawyerAppeal: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(fetchInterestedLawyers(id as string))
    }, [])

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

            <LawyersList 
                interestedLawyers={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]}
            />
        </div>
    )
}

export default WaitingLawyerAppeal;