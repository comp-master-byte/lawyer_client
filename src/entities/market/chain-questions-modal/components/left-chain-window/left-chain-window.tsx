import React from 'react';
import styles from "./left-chain-window.module.scss";
import BlueBorderModal from '@/shared/ui/blue-border-modal/blue-border-modal';
import LeftHeader from './components/left-header/left-header';
import logoSvg from "@/shared/assets/logo.svg?url";
import { QuestionFromChain } from '@/shared/model/types';
import LeftChainContent from './components/left-chain-content/left-chain-content';

interface LeftChainWindowProps {
    chainData: QuestionFromChain|null;
    isChainLoading: boolean;
}

const LeftChainWindow: React.FC<LeftChainWindowProps> = ({chainData, isChainLoading}) => {
    return (
        <BlueBorderModal modalClassName={styles.leftModalWrapper}>
            <LeftHeader />
            <div className={styles.mainLeftWindowContent}>
                <div className={styles.leftWindowLogo}>
                    <img src={logoSvg} alt='' />
                </div>
                <LeftChainContent 
                    chainData={chainData}
                    isChainLoading={isChainLoading}
                />
            </div>
        </BlueBorderModal>
    )
}

export default LeftChainWindow;