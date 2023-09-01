import React, { useCallback, useEffect, useState } from 'react';
import styles from "./appeals.module.scss";
import Navigation from 'widgets/navigation/navigation';
import Select from 'shared/ui/select/select';
import { APPEALS } from './constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import AppealsList from './components/appeals-list/appeals-list';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import { useAppeals } from './lib/hooks/useAppeals';
import EmptyPlaceholder from 'entities/empty-placeholder/empty-placeholder';
import Footer from 'widgets/footer/footer';

const Appeals: React.FC = () => {
    const {appeals} = useTypedSelector((state) => state.appealsSlice);
    const {selectedAppealOption, onSelectAppealOption} = useAppeals();

    return (
        <div className={styles.appealsWrapper}>
            <Navigation />
            <EmptyPlaceholder />
            {/* <section className={styles.pageContent}>
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
            </section> */}

            <Footer />
        </div>
    )
}

export default Appeals