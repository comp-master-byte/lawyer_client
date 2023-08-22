import React from "react";
import styles from "./MyInput.module.scss";
import { MyInputProps } from "./types";

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
