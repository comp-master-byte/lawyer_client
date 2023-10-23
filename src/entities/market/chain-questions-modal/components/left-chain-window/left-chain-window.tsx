import React from 'react';
import styles from "./left-chain-window.module.scss";
import BlueBorderModal from 'shared/ui/blue-border-modal/blue-border-modal';
import LeftHeader from './components/left-header/left-header';
import logoSvg from "shared/assets/logo.svg";
import BotStaticContent from 'shared/components/bot-static-content/bot-static-content';
import { QuestionFromChain } from 'shared/model/types';

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
                {isChainLoading 
                    ? <BotStaticContent /> : chainData?.node_id === 1 
                    ? <BotStaticContent /> : <p className={styles.contentHelperText}>{chainData?.message}</p>
                }
            </div>
        </BlueBorderModal>
    )
}

export default LeftChainWindow;