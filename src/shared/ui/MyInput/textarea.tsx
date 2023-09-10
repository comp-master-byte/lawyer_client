import React from "react";
import styles from "./MyInput.module.scss"
import { MyInputProps } from "./types";
import classNames from "classnames";

export const TextArea: React.FC<MyInputProps> = ({error, label, placeholder, register, inputClassName, variant, disabled, labelClassName}) => {
    return (
        <div className={styles.myInputWrapper}>
            {label && <label className={classNames(styles.inputLabel, labelClassName)}>{label}</label>}
            {error && <div className={styles.inputError}>{error.message}</div>}
            <textarea
                className={classNames(styles.myInput, inputClassName, {
                    [styles.secondary]: variant === 'secondary',
                    [styles.disabled]: disabled
                })}
                placeholder={placeholder}
                {...register}
            />
        </div>
    )
}

export default TextArea;