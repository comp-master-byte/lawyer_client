import React from 'react';
import styles from "./left-header.module.scss";
import MyButton from '@/shared/ui/MyButton/MyButton';

const LeftHeader: React.FC = () => {
    return (
        <header className={styles.topHeaderButtons}>
            <MyButton 
                size='small'
                color='primary'
                variant='contained'
                btnClassName={styles.headerButton}
            >
                Назад
            </MyButton>
            <MyButton 
                size='small'
                color='secondary'
                variant='contained'
                btnClassName={styles.headerButton}
            >
                Вперед
            </MyButton>
        </header>
    )
}

export default LeftHeader;