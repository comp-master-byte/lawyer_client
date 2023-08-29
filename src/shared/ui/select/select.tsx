import React from 'react';
import styles from "./select.module.scss";
import { SelectProps } from './model/types';
import arrowSvg from "./assets/arrow.svg";
import { useSelect } from './hooks/useSelect';
import classNames from 'classnames';

const Select: React.FC<SelectProps> = ({options, selectedOption, label, onSelectOption, defaultValue}) => {
    const {
        isOptionsVisible,
        toggleOptionsVisibility
    } = useSelect();

    return (
        <div className={styles.selectWrapper}>
            {label ? <label className={styles.selectLabel}>{label}</label> : <></>}
            <div className={styles.selectedOptionWrapper} onClick={toggleOptionsVisibility}>
                <div className={styles.selectedOption}>
                    {selectedOption?.value||defaultValue||"Выберите  тему обращения"}
                </div>
                <img className={classNames(styles.arrow, {[styles.openArrow]: isOptionsVisible})} src={arrowSvg} alt="" />
            </div>
            {isOptionsVisible && 
                <div className={styles.optionsList}>
                    {options.map((option) => 
                        <div 
                            key={option.id}
                            className={styles.option} 
                            onClick={() => {
                                toggleOptionsVisibility();
                                onSelectOption(option);
                            }}
                        >
                            {option.value}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Select;