import React from 'react';
import styles from "./modal.module.scss";
import classNames from 'classnames';

interface ModalProps {
    children: React.ReactNode;
    isModalVisible: boolean;
}

const Modal: React.FC<ModalProps> = ({children, isModalVisible}) => {
    return (
        <section className={classNames(styles.modalWrapper, {[styles.modalVisible]: isModalVisible})}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </section>
    )
}

export default Modal