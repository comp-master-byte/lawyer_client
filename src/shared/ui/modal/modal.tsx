import React from 'react';
import styles from "./modal.module.scss";
import classNames from 'classnames';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside';

interface ModalProps {
    children: React.ReactNode;
    isModalVisible: boolean;
    modalContentClassName?: string;
    closeModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({children, isModalVisible, modalContentClassName, closeModal}) => {
    const modalContentRef = useClickOutside(() => {
        closeModal && closeModal();
    })

    return (
        <section className={classNames(styles.modalWrapper, {[styles.modalVisible]: isModalVisible})}>
            <div ref={modalContentRef} className={classNames(styles.modalContent, modalContentClassName)}>
                {children}
            </div>
        </section>
    )
}

export default Modal