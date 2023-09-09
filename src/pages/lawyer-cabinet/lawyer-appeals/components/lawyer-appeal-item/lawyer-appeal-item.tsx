import React from 'react';
import styles from "./lawyer-appeal-item.module.scss";
import { Application } from '../../model/types';

interface LawyerAppealItemProps {
    item: Application;
    onSelectItem: (item: Application) => void;
}

const LawyerAppealItem: React.FC<LawyerAppealItemProps> = ({item, onSelectItem}) => {
    return (
        <div onClick={() => onSelectItem(item)} className={styles.appealItemWrapper}>
            <h3 className={styles.appealTitle}>Обращение {item.question.question_id}</h3>
            <h3 className={styles.appealStatus}>{item.question.status_name}</h3>
        </div>
    )
}

export default LawyerAppealItem;