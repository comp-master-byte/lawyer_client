import React from 'react';
import styles from "./appeals-filter.module.scss";
import Select from 'shared/ui/select/select';
import { ISelectOption } from 'shared/model/types';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { supportChatSlice } from 'widgets/support-chat/model/supportChatSlice';
import MyButton from 'shared/ui/MyButton/MyButton';

interface AppealsFilterProps {
    options: ISelectOption[];
    selectedAppealOption: ISelectOption|null;
    onSelectAppealOption: (option: ISelectOption) => void;
}

const AppealsFilter: React.FC<AppealsFilterProps> = ({onSelectAppealOption, options, selectedAppealOption}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.appealsFilter}>
            <Select 
                defaultValue='Статус обращения'
                options={options}
                onSelectOption={onSelectAppealOption}
                selectedOption={selectedAppealOption}
                selectWrapperClassName={styles.appealsFilter__select}
                selectOptionClassName={styles.selectOption}
            />
            <MyButton
                color='primary'
                variant='contained'
                btnClassName={styles.askQuestionButton}
                onClick={() => dispatch(supportChatSlice.actions.toggleLegalAdviceModalVisibility(true))}
            >
                Задать вопрос
            </MyButton>
        </div>

    )
}

export default AppealsFilter;