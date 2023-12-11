import React from 'react';
import styles from "./support-chat-modal.module.scss";
import classNames from 'classnames';
import LeftSupportWindow from './components/left-support-window/left-support-window';
import RightSupportWindow from './components/right-support-window/right-support-window';
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside';
import { QuestionFromChain } from '@/shared/model/types';

interface SupportchatModalProps {
    isSupportChatVisible: boolean;
    closeSupportChat: () => void;
    chainData: QuestionFromChain|null;
    isChainLoading: boolean;
    moveToTheNextChain: (nodeId: number) => void;
}

const SupportChatModal: React.FC<SupportchatModalProps> = ({isSupportChatVisible, closeSupportChat, chainData, isChainLoading, moveToTheNextChain}) => {
    const supportChatContentRef = useClickOutside(() => {
        closeSupportChat();
    })

    return (
        <section className={classNames(styles.supportChatWrapper, {[styles.supportChatVisible]: isSupportChatVisible})}>
            <div ref={supportChatContentRef} className={styles.supportChatContent}>
                <div className={styles.supportChatWindow}>
                    <LeftSupportWindow chainData={chainData} isChainLoading={isChainLoading} />
                    <RightSupportWindow 
                        chainData={chainData}
                        isLoading={isChainLoading} 
                        moveToTheNextChain={moveToTheNextChain}
                        closeSupportChatCallback={closeSupportChat} 
                    />
                </div>
            </div>
        </section>
    )
}

export default SupportChatModal