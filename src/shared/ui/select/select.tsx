import React from 'react';
import styles from "./select.module.scss";
import { SelectProps } from './model/types';
import arrowSvg from "./assets/arrow.svg";

const Select: React.FC<SelectProps> = ({options, selectedOption}) => {
    return (
        <div className={styles.selectWrapper}>
            <div className={styles.selectedOptionWrapper}>
                <div className={styles.selectedOption}>
                    {selectedOption?.value||"Выберите  тему обращения"}
                </div>
                <img src={arrowSvg} alt="" />
            </div>

            <div className={styles.optionsList}>
                {options.map((item) => 
                    <div className={styles.option}>{item.value}</div>
                )}
            </div>
        </div>
    )
}

export default Select;