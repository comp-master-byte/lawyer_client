import React from 'react';
import styles from "./waiting-response-appeal.module.scss";
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '@/shared/lib/hooks/redux';
import MyButton from '@/shared/ui/MyButton/MyButton';

const WaitingResponseAppeal: React.FC = () => {
    const {appealId} = useParams();
    const {selectedAppeal} = useTypedSelector(state => state.appealsSlice);

    return (
        <section className={styles.waitingResponseWrapper}>
            <h1 className={styles.waitingResponseWrapper__title}>Обращение {appealId}</h1>
            <article className={styles.noteWrapper}>
                <p className={styles.note}>{selectedAppeal?.question_text}</p>
            </article>
            <div className={styles.rejectButtonWrapper}>
                <MyButton
                    color='primary'
                    variant='contained'
                    size='large'
                    btnClassName={styles.rejectAppealButton}
                >
                    Отменить обращение
                </MyButton>
            </div>
        </section>
    )
}

export default WaitingResponseAppeal;