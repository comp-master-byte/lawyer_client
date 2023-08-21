import React from 'react';
import styles from "./right-support-window.module.scss";
import classNames from 'classnames';
import closeSvg from "../../assets/close.svg";
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';

interface RightSupportWindowProps {
    closeSupportChatCallback: () => void;
}

const RightSupportWindow: React.FC<RightSupportWindowProps> = ({closeSupportChatCallback}) => {
    const dispatch = useAppDispatch();
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
                    <div 
                        key={item[1]} 
                        className={classNames(styles.answerItem, {
                            [styles.halfAnswerWidth]: item[0] === 'Да'|| item[0] === 'Нет',
                        })}
                        onClick={() => dispatch(fetchMessageNode(item[1]))}
                    >
                        {item[0]}
                    </div>
                )}
            </div>  
        </div>
    )
}

export default RightSupportWindow