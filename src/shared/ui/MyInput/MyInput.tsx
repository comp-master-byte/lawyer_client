import React from "react";
import styles from "./MyInput.module.scss";
import { MyInputProps } from "./types";

const MyInput: React.FC<MyInputProps> = ({ register, error, placeholder, label, type }) => {
    return (
        <div className={styles.myInputWrapper}>
            {label ? <label className={styles.inputLabel}>{label}</label> : <></>}
            {error && <div className={styles.inputError}>{error.message}</div>}
            <input
                type={type ? type : "text"}
                className={styles.myInput}
                placeholder={placeholder}
                {...register}
            />
        </div>
    );
};

export default MyInput;
