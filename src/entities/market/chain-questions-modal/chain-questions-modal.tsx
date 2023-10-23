import React from 'react';
import styles from "./chain-questions-modal.module.scss"
import Modal from 'shared/ui/modal/modal';
import LeftChainWindow from './components/left-chain-window/left-chain-window';
import RightChainWindow from './components/right-chain-window/right-chain-window';
import { QuestionFromChain } from 'shared/model/types';

interface ChainQuestionsModalProps {
    closeModal: () => void;
    isModalVisible: boolean;
    chainData: QuestionFromChain|null;
    isChainLoading: boolean;
}

const ChainQuestionsModal: React.FC<ChainQuestionsModalProps> = (props) => {
    const {
        chainData,
        closeModal, 
        isModalVisible,
        isChainLoading
    } = props;

    return (
        <Modal 
            closeModal={closeModal}
            isModalVisible={isModalVisible}
            modalContentClassName={styles.chainModalContent}
        >
            <LeftChainWindow 
                chainData={chainData}
                isChainLoading={isChainLoading}
            />
            <RightChainWindow closeModal={closeModal} />
        </Modal>
    )
}

export default ChainQuestionsModal;