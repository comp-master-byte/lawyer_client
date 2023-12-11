import React, { useEffect } from 'react';
import styles from "./market.module.scss";
import { useAppDispatch, useTypedSelector } from '@/shared/lib/hooks/redux';
import { fetchMarketQuestions } from './model/async-actions';
import SectionTitle from '@/shared/styled-components/SectionTitle/SectionTitle';
import FreeQuestionsList from './components/free-questions-list/free-questions-list';
import EmptyPlaceholder from '@/entities/empty-placeholders/empty-placeholder/empty-placeholder';
import { useVarification } from '@/shared/lib/hooks/useVarification';
import LawyerOnVerification from '@/entities/empty-placeholders/lawyer-on-verification/lawyer-on-verification';

const Market: React.FC = () => {
    const dispatch = useAppDispatch();

    const {freeQuestions} = useTypedSelector(state => state.marketSlice);

    const varificationStatus = useVarification();

    useEffect(() => {
        dispatch(fetchMarketQuestions());
    }, [])

    return (
        <section className={styles.marketWrapper}>
            <SectionTitle titleClassName={styles.title}>Маркет заявок</SectionTitle>
            {varificationStatus === 'active' && <FreeQuestionsList applications={freeQuestions} />}
            {varificationStatus === 'complete_profile' && <EmptyPlaceholder /> }
            {varificationStatus === 'wait_varification' && <LawyerOnVerification />}
        </section>
    )
}

export default Market;