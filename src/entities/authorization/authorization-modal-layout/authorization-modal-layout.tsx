import React from 'react';
import styles from "./authorization-modal-layout.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeModalSvg from "./assets/close-modal.svg";

interface AuthorizationModalLayoutProps {
    isModalVisible: boolean;
    children: React.ReactNode;
    closeAuthModal: () => void;
    openAnotherModalCallback: () => void;
    authTitle: string;
    authSubtitle: string;
    authButtonText: string;
}

const AuthorizationModalLayout: React.FC<AuthorizationModalLayoutProps> = (props) => {
    const {isModalVisible, children, closeAuthModal, openAnotherModalCallback, authButtonText, authSubtitle, authTitle} = props;
    return (
        <Modal 
            isModalVisible={isModalVisible} 
            modalContentClassName={styles.authModalContent}
        >
            <div className={styles.closeAuthModalButton} onClick={closeAuthModal}>
                <img src={closeModalSvg} alt="" />
            </div>
            <article className={styles.authModalTitle}>
                <h2 className={styles.authModalTitle__title}>{authTitle}</h2>
                <p className={styles.authModalTitle__text}>{authSubtitle}</p>
                <div className={styles.inlineButton} onClick={openAnotherModalCallback}>{authButtonText}</div>
            </article>
            {children}
        </Modal>
    )
}

export default AuthorizationModalLayout