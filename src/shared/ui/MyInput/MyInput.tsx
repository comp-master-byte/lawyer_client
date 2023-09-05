import React from "react";
import styles from "./MyInput.module.scss";
import { MyInputProps } from "./types";
import classNames from "classnames";
import searchSvg from "./assets/search.svg";

const MyInput: React.FC<MyInputProps> = ({ register, error, placeholder, label, type, inputClassName, hasSearch}) => {
    return (
        <div className={styles.myInputWrapper}>
            {label ? <label className={styles.inputLabel}>{label}</label> : <></>}
            {error && <div className={styles.inputError}>{error.message}</div>}
            <input
                type={type ? type : "text"}
                className={classNames(styles.myInput, inputClassName)}
                placeholder={placeholder}
                {...register}
            />
            {hasSearch && <img className={styles.searchIcon} src={searchSvg} alt="" /> }
        </div>
    );
};

export default MyInput;
