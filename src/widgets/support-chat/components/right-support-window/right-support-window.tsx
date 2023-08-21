import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "../../assets/close.svg";
import { useTypedSelector } from 'shared/lib/hooks/redux';

interface RightSupportWindowProps {
    closeSupportChatCallback: () => void;
}

const RightSupportWindow: React.FC<RightSupportWindowProps> = ({closeSupportChatCallback}) => {
    const {data} = useTypedSelector(state => state.supportChatSlice);
    
    return (
        <div className={classNames(styles.chatContentWrapper, styles.rightSupportChatWindow)}>
            <header className={styles.rightWindowHeader}>
                <div className={styles.closeButton} onClick={closeSupportChatCallback}>
                    <img src={closeSvg} alt="" />
                </div>
            </header>

            <div className={styles.answersList}> 
                {data?.answers && Object.entries(data?.answers).map((item) => 
                    <div key={item[1]} className={styles.answerItem}>{item[0]}</div>
                )}
            </div>  
        </div>
    )
}

export default RightSupportWindow