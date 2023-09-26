import React, { useCallback, useEffect, useState } from 'react';
import styles from "./lawyer-appeals.module.scss";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchApplications } from './model/async-actions';
import AppealsFilter from 'entities/appeals/appeals-filter/appeals-filter';
import { Application } from './model/types';
import ApplicationItem from './components/lawyer-appeal-item/lawyer-appeal-item';
import AppealsList from 'entities/appeals/appeals-list/appeals-list';
import { LAWYER_APPEALS } from './constants/constants';
import { ISelectOption, LawyerStatus } from 'shared/model/types';
import { useNavigate } from 'react-router-dom';
import { useVarification } from 'shared/lib/hooks/useVarification';
import EmptyPlaceholder from 'entities/empty-placeholders/empty-placeholder/empty-placeholder';
import LawyerOnVerification from 'entities/empty-placeholders/lawyer-on-verification/lawyer-on-verification';

const LawyerAppeals: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const varificationStatus = useVarification()

    const {applications} = useTypedSelector(state => state.lawyerAppealsSlice);

    const [selectedOption, setSelectedOption] = useState<ISelectOption|null>(null);

    const onSelectFilterOption = useCallback((option: ISelectOption) => {
        dispatch(fetchApplications(option.label as LawyerStatus));
        setSelectedOption(option);
    }, [])

    const onSelectAppeal = useCallback((appeal: Application) => {
        if(appeal.question.status === 'active') {
            navigate(`/chats/${appeal.question.question_id}`);
        }
    }, [])

    useEffect(() => {
        dispatch(fetchApplications())
    }, [])

    return (
        <section className={styles.applicationsWrapper}>
            <div className={styles.applicationContent}>
                <h1 className={styles.pageTitle}>Мои заявки</h1>
                {varificationStatus === 'complete_profile' && <EmptyPlaceholder /> }
                {varificationStatus === 'wait_varification' && <LawyerOnVerification />}
                {varificationStatus === "active" && 
                    <React.Fragment>
                        <AppealsFilter 
                            options={LAWYER_APPEALS}
                            onSelectAppealOption={onSelectFilterOption}
                            selectedAppealOption={selectedOption}
                            blueButtonCallback={() => navigate('/lawyer-cabinet/market')}
                            blueButtonText='Маркет заявок'
                        />
                        <AppealsList 
                            appeals={applications} 
                            renderItem={(item: Application) => 
                                <ApplicationItem key={item.question.question_id} onSelectItem={onSelectAppeal} item={item} />
                            }
                        />
                    </React.Fragment>
                }
            </div>
        </section>
    )
}

export default LawyerAppeals;