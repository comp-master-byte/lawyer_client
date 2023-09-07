import React from 'react';
import styles from "./appeal-item.module.scss";
import { AppealAndApplication } from 'shared/model/types';

interface AppealItemProps {
    appeal: AppealAndApplication;
    onSelectAppeal: (appeal: AppealAndApplication) => void;
}

const AppealItem: React.FC<AppealItemProps> = ({appeal, onSelectAppeal}) => {
    

    return (
        <div onClick={() => onSelectAppeal(appeal)} className={styles.appealItemWrapper}>
            <h3 className={styles.appealTitle}>Обращение {appeal.question_id}</h3>
            <h3 className={styles.appealStatus}>{appeal.status_name}</h3>
        </div>
    )
}

export default AppealItem;