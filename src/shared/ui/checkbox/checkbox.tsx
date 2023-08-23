import React from 'react';
import styles from "./checkbox.module.scss";

interface CheckboxProps {
    // label: string;
}

const Checkbox: React.FC<CheckboxProps> = () => {
    return (
        <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.fake}></span>
            <span className={styles.text}>
                Принимаю условия <span className={styles.colored}>Политики конфиденциальности</span> и <span className={styles.colored}>Пользовательского соглашения</span> 
            </span>
        </label>
    )
}

export default Checkbox;