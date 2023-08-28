import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "widgets/support-chat/assets/close.svg";
import AnswersList from './components/answers-list/answers-list';
import { useTypedSelector } from 'shared/lib/hooks/redux';

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
            {isLoading ? <h3>Загрузка...</h3> : <AnswersList />}
        </div>
    )
}

export default RightSupportWindow