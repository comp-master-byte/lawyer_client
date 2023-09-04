import React from 'react';
import styles from "./appeals-list.module.scss";
import AppealItem from '../appeal-item/appeal-item';
import { Appeal } from '../../model/types';

interface AppealsListProps {
    appeals: Appeal[]
}

const AppealsList: React.FC<AppealsListProps> = ({appeals}) => {
    return (
        <div className={styles.appealsListWrapper}>
            {appeals.length > 0 
                ?   
                <div className={styles.appealList}>{appeals.map((item) => 
                    <AppealItem key={item.question_id} appeal={item} />)}
                </div> 
                : <h3>У вас пока нет обращений</h3>
            }
        </div>
    )
}

export default AppealsList;