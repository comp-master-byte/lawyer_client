import React from 'react';
import styles from "./checkbox.module.scss";
import i from "./assets/checked.svg"

interface CheckboxProps {
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({label}) => {
    return (
        <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" />
            <span className={styles.fake}></span>
            <span className={styles.text}>{label}</span>
        </label>
    )
}

export default Checkbox;