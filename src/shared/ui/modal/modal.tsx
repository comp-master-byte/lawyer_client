import React from 'react';
import styles from "./modal.module.scss";
import classNames from 'classnames';

interface ModalProps {
    children: React.ReactNode;
    isModalVisible: boolean;
    modalContentClassName?: string;
}

const Modal: React.FC<ModalProps> = ({children, isModalVisible, modalContentClassName}) => {
    return (
        <section className={classNames(styles.modalWrapper, {[styles.modalVisible]: isModalVisible})}>
            <div className={classNames(styles.modalContent, modalContentClassName)}>
                {children}
            </div>
        </section>
    )
}

export default Modal