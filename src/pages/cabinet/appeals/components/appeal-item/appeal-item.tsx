import React from 'react';
import styles from "./appeal-item.module.scss";

interface AppealItemProps {
    appeal: any;
}

const AppealItem: React.FC<AppealItemProps> = ({appeal}) => {
    return (
        <div className={styles.appealItemWrapper}>
            <h3 className={styles.appealTitle}>Обращение 1</h3>
            <h3 className={styles.appealStatus}>Ожидает выбора юриста</h3>
        </div>
    )
}

export default AppealItem;