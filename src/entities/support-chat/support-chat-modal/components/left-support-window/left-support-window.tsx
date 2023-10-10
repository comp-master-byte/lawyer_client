import React from 'react';
import styles from "./left-support-window.module.scss";
import logoSvg from "widgets/support-chat/assets/logo.svg";
import LeftWindowHeader from './components/left-window-header/left-window-header';
import StaticContent from 'entities/support-chat/static-content/static-content';
import { MessageData } from 'widgets/support-chat/model/types';

interface LeftSupportWindowProps {
    chainData: MessageData|null;
    isChainLoading: boolean;
}

const LeftSupportWindow: React.FC<LeftSupportWindowProps> = ({chainData, isChainLoading}) => {
    return (
        <section className={styles.leftSupportChatWindow}>
            <LeftWindowHeader />
            <div className={styles.mainLeftWindowContent}>
                <div className={styles.leftWindowLogo}>
                    <img src={logoSvg} alt='' />
                </div>
                {isChainLoading 
                    ? <StaticContent /> : chainData?.node_id === 1 
                    ? <StaticContent /> : <p className={styles.contentHelperText}>{chainData?.message}</p>
                }
            </div>
        </section>
    )
}

export default LeftSupportWindow;