import React from 'react';
import styles from "./left-chain-window.module.scss";
import BlueBorderModal from 'shared/ui/blue-border-modal/blue-border-modal';
import LeftHeader from './components/left-header/left-header';

const LeftChainWindow: React.FC = () => {
    return (
        <BlueBorderModal modalClassName={styles.leftModalWrapper}>
            <LeftHeader />
        </BlueBorderModal>
    )
}

export default LeftChainWindow;