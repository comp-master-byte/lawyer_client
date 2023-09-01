import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "widgets/support-chat/assets/close.svg";
import AnswersList from './components/answers-list/answers-list';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import Loader from 'shared/ui/loader/loader';

interface RightSupportWindowProps {
    closeSupportChatCallback: () => void;
}

const RightSupportWindow: React.FC<RightSupportWindowProps> = ({closeSupportChatCallback}) => {
    const {isLoading} = useTypedSelector(state => state.supportChatSlice);
    
    return (
        <div className={classNames(styles.chatContentWrapper, styles.rightSupportChatWindow)}>
            <header className={styles.rightWindowHeader}>
                <div className={styles.closeButton} onClick={closeSupportChatCallback}>
                    <img src={closeSvg} alt="" />
                </div>
            </header>
            {isLoading ? <Loader loaderWrapperClassName={styles.loaderWrapper} /> : <AnswersList />}
        </div>
    )
}

export default RightSupportWindow;