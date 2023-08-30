import React from 'react';
import styles from "./appeal-item.module.scss";
import { Appeal } from '../../model/types';

interface AppealItemProps {
    appeal: Appeal;
}

const AppealItem: React.FC<AppealItemProps> = ({appeal}) => {
    return (
        <div className={styles.appealItemWrapper}>
            <h3 className={styles.appealTitle}>Обращение {appeal.question_id}</h3>
            <h3 className={styles.appealStatus}>{appeal.status_name}</h3>
        </div>
    )
}

export default AppealItem;