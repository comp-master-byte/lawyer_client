import React from 'react';
import styles from "./appeals-list.module.scss";
import AppealItem from '../appeal-item/appeal-item';
import { AppealAndApplication } from 'shared/model/types';

interface AppealsListProps {
    appeals: AppealAndApplication[];
    onSelectAppeal: (appeal: AppealAndApplication) => void;
}

const AppealsList: React.FC<AppealsListProps> = ({appeals, onSelectAppeal}) => {
    return (
        <div className={styles.appealsListWrapper}>
            {appeals.length > 0 
                ?   
                <div className={styles.appealList}>{appeals.map((item) => 
                    <AppealItem key={item.question_id} appeal={item} onSelectAppeal={onSelectAppeal} />)}
                </div> 
                : <h3 className={styles.noAppealText}>У вас пока нет обращений, нажмите на кнопку «Задать вопрос», чтобы его создать</h3>
            }
        </div>
    )
}

export default AppealsList;