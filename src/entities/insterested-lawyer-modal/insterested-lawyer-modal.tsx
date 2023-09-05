import React from 'react';
import styles from "./insterested-lawyer-modal.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeSvg from "./assets/close-button.svg";

interface InterestedLawyerModalProps {
    closeModal: () => void;
    isModalVisible: boolean;
    children: React.ReactNode;
}

const InterestedLawyerModal: React.FC<InterestedLawyerModalProps> = ({closeModal, isModalVisible, children}) => {
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

export default InterestedLawyerModal;