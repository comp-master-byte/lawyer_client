import React, { useEffect } from 'react';
import styles from "./waiting-lawyer-appeal.module.scss";
import { useNavigate, useParams } from 'react-router-dom';
import MyButton from '@/shared/ui/MyButton/MyButton';
import { useAppDispatch, useTypedSelector } from '@/shared/lib/hooks/redux';
import { fetchInterestedLawyers } from './model/async-actions';
import LawyersList from './components/lawyers-list/lawyers-list';
import Loader from '@/shared/ui/loader/loader';

const WaitingLawyerAppeal: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {id} = useParams();

    const {interestedLawyers, isLawyersLoading} = useTypedSelector((state) => state.interestedLawyersSlice);

    useEffect(() => {
        dispatch(fetchInterestedLawyers(id as string))
    }, [])

    if(isLawyersLoading) {
        return (
            <div className={styles.loaderWrapper}>
                <Loader />
            </div>
        )
    }

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

            <LawyersList interestedLawyers={interestedLawyers} />
        </div>
    )
}

export default WaitingLawyerAppeal;