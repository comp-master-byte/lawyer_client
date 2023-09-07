import React, { useEffect } from 'react';
import styles from "./applications.module.scss";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchApplications } from './model/async-actions';
import AppealsList from 'entities/appeals/appeals-list/appeals-list';
import { AppealAndApplication } from 'shared/model/types';
import AppealsFilter from 'entities/appeals/appeals-filter/appeals-filter';

const Applications: React.FC = () => {
    const dispatch = useAppDispatch();

    const {applications} = useTypedSelector(state => state.applicationsSlice);

    const onSelectAppeal = (appeal: AppealAndApplication) => {

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
                <AppealsList appeals={applications} onSelectAppeal={onSelectAppeal} />
            </div>
        </section>
    )
}

export default Applications;