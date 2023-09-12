import React from 'react'
import styles from "./MyInput.module.scss";
import { Controller } from 'react-hook-form';
import ReactInputMask from 'react-input-mask';
import { MaskInputProps } from './types';
import classNames from 'classnames';

const InputMask: React.FC<MaskInputProps> = (props) => {
    const { 
        error, 
        placeholder, 
        label, 
        type, 
        inputClassName, 
        variant, 
        disabled, 
        labelClassName,
        mask,
        control,
        name,
        validation
    } = props;

    return (
        <Controller 
            name={name}
            control={control}
            rules={validation}
            defaultValue=''
            render={({field: {onChange, value}}) => 
                <div className={styles.myInputWrapper}>
                    {label ? <label className={classNames(styles.inputLabel, labelClassName)}>{label}</label> : <></>}
                    {error && <div className={styles.inputError}>{error.message}</div>}
                    <ReactInputMask 
                        type={type ? type : "text"}
                        mask={mask}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={classNames(styles.myInput, inputClassName, {
                            [styles.secondary]: variant === 'secondary',
                            [styles.disabled]: disabled
                        })}
                    />
                </div>
            }

        />
    )
}

export default InputMask;