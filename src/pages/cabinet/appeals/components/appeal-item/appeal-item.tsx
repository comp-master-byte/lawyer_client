import React from 'react';
import styles from "./appeal-item.module.scss";
import { Appeal } from '../../model/types';
import { useNavigate } from 'react-router-dom';

interface AppealItemProps {
    appeal: Appeal;
}

const AppealItem: React.FC<AppealItemProps> = ({appeal}) => {
    const navigate = useNavigate();

    const onSelectAppeal = function(appeal: Appeal) {
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
        <div onClick={() => onSelectAppeal(appeal)} className={styles.appealItemWrapper}>
            <h3 className={styles.appealTitle}>Обращение {appeal.question_id}</h3>
            <h3 className={styles.appealStatus}>{appeal.status_name}</h3>
        </div>
    )
}

export default AppealItem;