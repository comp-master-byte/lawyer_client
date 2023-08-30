import React from 'react';
import styles from "./select.module.scss";
import { SelectProps } from './model/types';
import arrowSvg from "./assets/arrow.svg";
import { useSelect } from './hooks/useSelect';
import classNames from 'classnames';

const Select: React.FC<SelectProps> = (props) => {
    const {options, selectedOption, label, onSelectOption, defaultValue, selectWrapperClassName, selectOptionClassName} = props;
    const {
        isOptionsVisible,
        toggleOptionsVisibility
    } = useSelect();

    return (
        <div className={classNames(styles.selectWrapper, selectWrapperClassName)}>
            {label ? <label className={styles.selectLabel}>{label}</label> : <></>}
            <div className={classNames(styles.selectedOptionWrapper, selectOptionClassName)} onClick={toggleOptionsVisibility}>
                <p className={classNames(styles.selectedOption, {
                    [styles.defaultValueOption]: !selectedOption?.value
                })}>
                    {selectedOption?.value||defaultValue||"Выберите  тему обращения"}
                </p>
                <img className={classNames(styles.arrow, {[styles.openArrow]: isOptionsVisible})} src={arrowSvg} alt="" />
            </div>
            {isOptionsVisible && 
                <div className={styles.optionsList}>
                    {options.map((option) => 
                        <p 
                            key={option.id}
                            className={styles.option} 
                            onClick={() => {
                                toggleOptionsVisibility();
                                onSelectOption(option);
                            }}
                        >
                            {option.value}
                        </p>
                    )}
                </div>
            }
        </div>
    )
}

export default Select;