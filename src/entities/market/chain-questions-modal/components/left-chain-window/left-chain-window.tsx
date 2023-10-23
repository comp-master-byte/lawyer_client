import React from 'react';
import styles from "./left-chain-window.module.scss";
import BlueBorderModal from 'shared/ui/blue-border-modal/blue-border-modal';

const LeftChainWindow: React.FC = () => {
    return (
        <BlueBorderModal modalClassName={styles.leftModalWrapper}>LeftChainWindow</BlueBorderModal>
    )
}

export default LeftChainWindow;