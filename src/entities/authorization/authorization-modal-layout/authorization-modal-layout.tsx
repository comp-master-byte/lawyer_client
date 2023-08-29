import React from 'react';
import styles from "./authorization-modal-layout.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeModalSvg from "./assets/close-modal.svg";

interface AuthorizationModalLayoutProps {
    isModalVisible: boolean;
    children: React.ReactNode;
    closeAuthModal: () => void;
}

const AuthorizationModalLayout: React.FC<AuthorizationModalLayoutProps> = ({isModalVisible, children, closeAuthModal}) => {
    return (
        <Modal 
            isModalVisible={isModalVisible} 
            modalContentClassName={styles.authModalContent}
        >
            <div className={styles.closeAuthModalButton} onClick={closeAuthModal}>
                <img src={closeModalSvg} alt="" />
            </div>
            {children}
        </Modal>
    )
}

export default AuthorizationModalLayout