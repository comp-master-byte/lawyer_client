import React, { useEffect } from 'react';
import styles from "./modal.module.scss";
import classNames from 'classnames';
import { useClickOutside } from 'shared/lib/hooks/useClickOutside';

interface ModalProps {
    children: React.ReactNode;
    isModalVisible: boolean;
    modalContentClassName?: string;
    closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({children, isModalVisible, modalContentClassName, closeModal}) => {
    const modalContentRef = useClickOutside(() => {
        closeModal();
    })

    useEffect(() => {
        if(isModalVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isModalVisible])

    return (
        <section className={classNames(styles.modalWrapper, {[styles.modalVisible]: isModalVisible})}>
            <div ref={modalContentRef} className={classNames(styles.modalContent, modalContentClassName)}>
                {children}
            </div>
        </section>
    )
}

export default Modal