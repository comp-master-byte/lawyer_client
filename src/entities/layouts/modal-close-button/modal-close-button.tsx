import React from 'react';
import styles from "./modal-close-button.module.scss";
import Modal from '@/shared/ui/modal/modal';
import closeSvg from "./assets/close-button.svg?url";

interface ModalCloseButtonProps {
    closeModal: () => void;
    isModalVisible: boolean;
    children: React.ReactNode;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({closeModal, isModalVisible, children}) => {
    return (
        <Modal
            closeModal={closeModal}
            isModalVisible={isModalVisible}
            modalContentClassName={styles.modalContent}
        >
            <div className={styles.closeModalIcon}>
                <img src={closeSvg} onClick={closeModal} alt="" />
            </div>
            {children}
        </Modal>
    )
}

export default ModalCloseButton;