import React from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
    placeholder: string;
    error: any;
    register: any;
    label: string;
}

const MyInput: React.FC<MyInputProps> = ({ register, error, placeholder, label }) => {
    return (
        <div className={styles.myInputWrapper}>
            <label className={styles.inputLabel}>{label}</label>
            <input
                className={styles.myInput}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};

export default MyInput;
