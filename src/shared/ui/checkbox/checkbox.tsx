import React from 'react';
import styles from "./checkbox.module.scss";
import { Link } from 'react-router-dom';

interface CheckboxProps {
    // label: string;
}

const Checkbox: React.FC<CheckboxProps> = () => {
    return (
        <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.fake}></span>
            <span className={styles.text}>
                Принимаю условия 
                <Link to='/privacy-policy' target='_blank' className={styles.colored}>Политики конфиденциальности</Link> и 
                <Link to='/terms-of-use' target='_blank' className={styles.colored}> Пользовательского соглашения</Link> 
            </span>
        </label>
    )
}

export default Checkbox;