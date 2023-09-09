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

const LawyerAppeals: React.FC = () => {
    const dispatch = useAppDispatch();

    const {applications} = useTypedSelector(state => state.lawyerAppealsSlice);

    const [selectedOption, setSelectedOption] = useState<ISelectOption|null>(null);

    const onSelectFilterOption = useCallback((option: ISelectOption) => {
        dispatch(fetchApplications(option.label as LawyerStatus));
        setSelectedOption(option);
    }, [])

    const onSelectAppeal = useCallback((appeal: Application) => {

    }, [])

    useEffect(() => {
        dispatch(fetchApplications())
    }, [])

    return (
        <section className={styles.applicationsWrapper}>
            <div className={styles.applicationContent}>
                <h1 className={styles.pageTitle}>Мои заявки</h1>

                <AppealsFilter 
                    options={LAWYER_APPEALS}
                    onSelectAppealOption={onSelectFilterOption}
                    selectedAppealOption={selectedOption}
                />
                <AppealsList 
                    appeals={applications} 
                    renderItem={(item: Application) => 
                        <ApplicationItem key={item.question.question_id} onSelectItem={onSelectAppeal} item={item} />
                    }
                />
            </div>
        </section>
    )
}

export default LawyerAppeals;