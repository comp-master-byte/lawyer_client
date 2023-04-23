import React, { FC } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
  error: string;
  placeholder: string;
  register(value: string): any;
}

const MyInput: FC<MyInputProps> = ({ register, error, placeholder }) => {
  return (
    <div className={styles.myInputWrapper}>
      <input
        className={styles.myInput}
        {...register}
        placeholder={placeholder}
      />
    </div>
  );
};

export default MyInput;
