import React from 'react';
import styles from "./appeals-list.module.scss";

interface AppealsListProps<T> {
    appeals: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default function AppealsList<T>({appeals, renderItem}: AppealsListProps<T>) {
    return (
        <div className={styles.appealsListWrapper}>
            {appeals.length > 0 ?   
                <div className={styles.appealList}>
                    {appeals.map(renderItem)}
                </div> 
                : <h3 className={styles.noAppealText}>У вас пока нет обращений, нажмите на кнопку «Задать вопрос», чтобы его создать</h3>
            }
        </div>
    )
}