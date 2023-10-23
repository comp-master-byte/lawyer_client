import React from 'react';
import styles from "./blue-border-modal.module.scss";
import classNames from 'classnames';

interface BlueBorderModalProps {
    children: React.ReactNode;
    modalClassName?: string;
}

const BlueBorderModal: React.FC<BlueBorderModalProps> = ({children, modalClassName}) => {
    return (
        <div className={classNames(styles.blueBorderModalWrapper, modalClassName)}>{children}</div>
    )
}

export default BlueBorderModal;