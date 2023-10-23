import React from 'react';
import styles from "./chain-questions-modal.module.scss"
import Modal from 'shared/ui/modal/modal';
import LeftChainWindow from './components/left-chain-window/left-chain-window';
import RightChainWindow from './components/right-chain-window/right-chain-window';

interface ChainQuestionsModalProps {
    closeModal: () => void;
    isModalVisible: boolean;
}

const ChainQuestionsModal: React.FC<ChainQuestionsModalProps> = ({closeModal, isModalVisible}) => {
    return (
        <Modal 
            closeModal={closeModal}
            isModalVisible={isModalVisible}
            modalContentClassName={styles.chainModalContent}
        >
            <LeftChainWindow />
            <RightChainWindow />
        </Modal>
    )
}

export default ChainQuestionsModal;