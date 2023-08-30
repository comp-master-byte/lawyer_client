import React, { useCallback, useEffect, useState } from 'react';
import styles from "./appeals.module.scss";
import Navigation from 'widgets/navigation/navigation';
import Select from 'shared/ui/select/select';
import { ISelectOption } from 'shared/model/types';
import { APPEALS } from './constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import AppealsList from './components/appeals-list/appeals-list';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchAppeals } from './model/async-actions';

const Appeals: React.FC = () => {
    const dispatch = useAppDispatch();

    const {appeals} = useTypedSelector((state) => state.appealsSlice);
    const [selectedAppealOption, setSelectedAppealOption] = useState<ISelectOption|null>(null);

    const onSelectAppealOption = useCallback((option: ISelectOption) => {
        setSelectedAppealOption(option);
    }, [])

    useEffect(() => {
        dispatch(fetchAppeals());
    }, [])

    return (
        <div className={styles.appealsWrapper}>
            <Navigation />
            <section className={styles.pageContent}>
                <div className={styles.container}>
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

                </div>
            </section>
        </div>
    )
}

export default Appeals