import React from "react";
import styles from "./MyInput.module.scss";
import { MyInputProps } from "./types";
import classNames from "classnames";
import searchSvg from "./assets/search.svg?url";
import fileSvg from "./assets/file.svg?url";

const MyInput: React.FC<MyInputProps> = ({ register, error, placeholder, label, type, inputClassName, hasSearch, hasFile, variant, disabled, labelClassName}) => {
    return (
        <div className={styles.myInputWrapper}>
            {label ? <label className={classNames(styles.inputLabel, labelClassName)}>{label}</label> : <></>}
            {error && <div className={styles.inputError}>{error.message}</div>}
            {hasFile && <img src={fileSvg} className={styles.fileIcon} alt="" /> }
            <input
                type={type ? type : "text"}
                placeholder={placeholder}
                className={classNames(styles.myInput, inputClassName, {
                    [styles.secondary]: variant === 'secondary',
                    [styles.disabled]: disabled
                })}
                {...register}
            />
            {hasSearch && <img className={styles.searchIcon} src={searchSvg} alt="" /> }
        </div>
    );
};

export default MyInput;
