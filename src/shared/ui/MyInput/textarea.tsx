import React from "react";
import styles from "./MyInput.module.scss"
import { MyInputProps } from "./types";

export const TextArea: React.FC<MyInputProps> = ({error, label, placeholder, register}) => {
    return (
        <div className={styles.myInputWrapper}>
            <label className={styles.inputLabel}>{label}</label>
            <textarea
                className={styles.myInput}
                placeholder={placeholder}
                {...register}
            />
        </div>
    )
}

export default TextArea;