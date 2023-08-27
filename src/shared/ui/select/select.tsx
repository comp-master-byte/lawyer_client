import React from 'react';
import styles from "./select.module.scss";
import { SelectProps } from './model/types';
import arrowSvg from "./assets/arrow.svg";
import { useSelect } from './hooks/useSelect';
import classNames from 'classnames';

const Select: React.FC<SelectProps> = ({options, selectedOption}) => {
    const {
        isOptionsVisible,
        toggleOptionsVisibility
    } = useSelect();


    return (
        <div className={styles.selectWrapper}>
            <div className={styles.selectedOptionWrapper} onClick={toggleOptionsVisibility}>
                <div className={styles.selectedOption}>
                    {selectedOption?.value||"Выберите  тему обращения"}
                </div>
                <img className={classNames(styles.arrow, {[styles.openArrow]: isOptionsVisible})} src={arrowSvg} alt="" />
            </div>
            {isOptionsVisible && 
                <div className={styles.optionsList}>
                    {options.map((item) => 
                        <div className={styles.option}>{item.value}</div>
                    )}
                </div>
            }
        </div>
    )
}

export default Select;