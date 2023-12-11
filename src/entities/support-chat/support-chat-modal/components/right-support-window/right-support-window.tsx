import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "@/widgets/support-chat/assets/close.svg?url";
import AnswersList from './components/answers-list/answers-list';
import Loader from '@/shared/ui/loader/loader';
import { QuestionFromChain } from '@/shared/model/types';

interface RightSupportWindowProps {
    closeSupportChatCallback: () => void;
    isLoading: boolean;
    chainData: QuestionFromChain|null;
    moveToTheNextChain: (nodeId: number) => void;
}

const RightSupportWindow: React.FC<RightSupportWindowProps> = ({closeSupportChatCallback, isLoading, chainData, moveToTheNextChain}) => {
    return (
        <div className={classNames(styles.chatContentWrapper, styles.rightSupportChatWindow)}>
            <header className={styles.rightWindowHeader}>
                <div className={styles.closeButton} onClick={closeSupportChatCallback}>
                    <img src={closeSvg} alt="" />
                </div>
            </header>
            {isLoading ? <Loader loaderWrapperClassName={styles.loaderWrapper} /> : <AnswersList chainData={chainData} moveToTheNextChain={moveToTheNextChain} />}
        </div>
    )
}

export default RightSupportWindow;