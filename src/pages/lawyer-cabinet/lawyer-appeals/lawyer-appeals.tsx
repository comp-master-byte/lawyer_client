import React, { useEffect } from 'react';
import styles from "./lawyer-appeals.module.scss";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchApplications } from './model/async-actions';
import AppealsFilter from 'entities/appeals/appeals-filter/appeals-filter';
import { Application } from './model/types';
import ApplicationItem from './components/lawyer-appeal-item/lawyer-appeal-item';
import AppealsList from 'entities/appeals/appeals-list/appeals-list';

const LawyerAppeals: React.FC = () => {
    const dispatch = useAppDispatch();

    const {applications} = useTypedSelector(state => state.lawyerAppealsSlice);

    const onSelectAppeal = (appeal: Application) => {

    }

    useEffect(() => {
        dispatch(fetchApplications())
    }, [])

    return (
        <section className={styles.applicationsWrapper}>
            <div className={styles.applicationContent}>
                <h1 className={styles.pageTitle}>Мои заявки</h1>

                <AppealsFilter 
                    options={[]}
                    onSelectAppealOption={(item) => ''}
                    selectedAppealOption={null}
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