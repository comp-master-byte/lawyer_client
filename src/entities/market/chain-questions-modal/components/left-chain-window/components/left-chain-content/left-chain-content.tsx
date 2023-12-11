import React from 'react';
import styles from "./left-chain-content.module.scss";
import { QuestionFromChain } from '@/shared/model/types';
import BotStaticContent from '@/shared/components/bot-static-content/bot-static-content';

interface LeftChainContentProps {
    chainData: QuestionFromChain|null;
    isChainLoading: boolean;
}

const LeftChainContent: React.FC<LeftChainContentProps> = ({chainData, isChainLoading}) => {
    if(isChainLoading||chainData?.node_id === 1) {
        return <BotStaticContent />
    }

    return <p className={styles.contentHelperText}>{chainData?.message}</p>    
}

export default LeftChainContent;