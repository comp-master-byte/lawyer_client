import React from 'react';
import styles from "./modal-with-title.module.scss";
import Modal from '@/shared/ui/modal/modal';
import closeModalSvg from "./assets/close-modal.svg?url";
import classNames from 'classnames';

interface ModalWithTitleProps {
    isModalVisible: boolean;
    children: React.ReactNode;
    closeAuthModal: () => void;
    openAnotherModalCallback?: () => void;
    authTitle: string;
    authSubtitle?: string;
    authButtonText?: string;
    modalContentWrapper?: string;
    modalWrapperContent?: string;
}

const ModalWithTitle: React.FC<ModalWithTitleProps> = (props) => {
    const {
        isModalVisible, 
        children, 
        closeAuthModal, 
        openAnotherModalCallback, 
        authButtonText, 
        authSubtitle,
        authTitle, 
        modalContentWrapper,
        modalWrapperContent
    } = props;

    return (
        <Modal 
            isModalVisible={isModalVisible} 
            closeModal={closeAuthModal}
            modalContentClassName={classNames(styles.authModalContent, modalWrapperContent)}
        >
            <div className={styles.closeAuthModalButton} onClick={closeAuthModal}>
                <img src={closeModalSvg} alt="" />
            </div>
            <article className={classNames(styles.authModalTitle, modalContentWrapper)}>
                {authTitle && <h2 className={styles.authModalTitle__title}>{authTitle}</h2>}
                {authSubtitle && <p className={styles.authModalTitle__text}>{authSubtitle}</p>}
                {authButtonText && <div className={styles.inlineButton} onClick={openAnotherModalCallback}>{authButtonText}</div>}
            </article>
            {children}
        </Modal>
    )
}

export default ModalWithTitle;