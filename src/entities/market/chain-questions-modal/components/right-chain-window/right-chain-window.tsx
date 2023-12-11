import React from 'react';
import styles from "./right-chain-window.module.scss";
import BlueBorderModal from '@/shared/ui/blue-border-modal/blue-border-modal';
import RightChainHeader from './components/right-chain-header/right-chain-header';

interface RightChainWindowProps {
    closeModal: () => void;
}

const RightChainWindow: React.FC<RightChainWindowProps> = ({closeModal}) => {
    return (
        <BlueBorderModal modalClassName={styles.rightModalWrapper}>
            <RightChainHeader closeModal={closeModal} />
        </BlueBorderModal>
    )
}

export default RightChainWindow;