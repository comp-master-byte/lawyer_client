import React, { useEffect } from 'react';
import styles from "./market.module.scss";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchMarketQuestions } from './model/async-actions';
import SectionTitle from 'shared/styled-components/SectionTitle/SectionTitle';
import FreeQuestionsList from './components/free-questions-list/free-questions-list';

const Market: React.FC = () => {
    const dispatch = useAppDispatch();

    const {freeQuestions} = useTypedSelector(state => state.marketSlice)

    useEffect(() => {
        dispatch(fetchMarketQuestions());
    }, [])

    return (
        <section className={styles.marketWrapper}>
            <SectionTitle titleClassName={styles.title}>Маркет заявок</SectionTitle>
            <FreeQuestionsList applications={freeQuestions} />
        </section>
    )
}

export default Market;