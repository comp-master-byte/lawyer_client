import React from 'react';
import styles from "./appeals.module.scss";
import { APPEALS } from './constants/constants';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { useAppeals } from './lib/hooks/useAppeals';
import AppealsList from 'entities/appeals/appeals-list/appeals-list';
import { useNavigate } from 'react-router-dom';
import { AppealAndApplication } from 'shared/model/types';
import AppealsFilter from 'entities/appeals/appeals-filter/appeals-filter';

const Appeals: React.FC = () => {
    const {appeals} = useTypedSelector((state) => state.appealsSlice);
    const {selectedAppealOption, onSelectAppealOption} = useAppeals();

    const navigate = useNavigate();

    const onSelectAppeal = function(appeal: AppealAndApplication) {
        if(appeal.status === "candidates") {
            navigate(`/cabinet/appeals/${appeal.question_id}`);
            return;
        }

        if(appeal.status === "active") {
            navigate(`/cabinet/chats/${appeal.question_id}`);
            return;
        }
    }

    return (
        <div className={styles.appealsWrapper}>
            <section className={styles.pageContent}>
                <h1 className={styles.pageTitle}>Мои обращения</h1>
                <AppealsFilter 
                    options={APPEALS}
                    selectedAppealOption={selectedAppealOption}
                    onSelectAppealOption={onSelectAppealOption}
                />
                <AppealsList appeals={appeals} onSelectAppeal={onSelectAppeal} />
            </section>
        </div>
    )
}

export default Appeals;