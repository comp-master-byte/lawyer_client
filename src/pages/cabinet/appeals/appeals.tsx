import React from 'react';
import styles from "./appeals.module.scss";
import Select from 'shared/ui/select/select';
import { APPEALS } from './constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import AppealsList from './components/appeals-list/appeals-list';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { useAppeals } from './lib/hooks/useAppeals';

const Appeals: React.FC = () => {
    const {appeals} = useTypedSelector((state) => state.appealsSlice);
    const {selectedAppealOption, onSelectAppealOption} = useAppeals();

    return (
        <div className={styles.appealsWrapper}>
            <section className={styles.pageContent}>
                <h1 className={styles.pageTitle}>Мои обращения</h1>
                <div className={styles.appealsFilter}>
                    <Select 
                        defaultValue='Статус обращения'
                        options={APPEALS}
                        onSelectOption={onSelectAppealOption}
                        selectedOption={selectedAppealOption}
                        selectWrapperClassName={styles.appealsFilter__select}
                        selectOptionClassName={styles.selectOption}
                    />
                    <MyButton
                        color='primary'
                        variant='contained'
                        btnClassName={styles.askQuestionButton}
                    >
                        Задать вопрос
                    </MyButton>
                </div>

                <AppealsList appeals={appeals} />
            </section>
        </div>
    )
}

export default Appeals;