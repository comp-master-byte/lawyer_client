import React from 'react';
import styles from "./right-chain-window.module.scss";
import BlueBorderModal from 'shared/ui/blue-border-modal/blue-border-modal';

const RightChainWindow: React.FC = () => {
    return (
        <BlueBorderModal modalClassName={styles.rightModalWrapper}>RightChainWindow</BlueBorderModal>
    )
}

export default RightChainWindow;