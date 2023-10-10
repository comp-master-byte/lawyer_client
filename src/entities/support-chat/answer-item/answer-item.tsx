import React from 'react';
import styles from "./answer-item.module.scss";
import classNames from 'classnames';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';
import { supportChatSlice } from 'widgets/support-chat/model/supportChatSlice';
import { useAppDispatch } from 'shared/lib/hooks/redux';

interface AnswerItemProps {
    answer: [string, number];
    forwardCallback: (nodeId: number) => void;
}

const AnswerItem: React.FC<AnswerItemProps> = ({answer, forwardCallback}) => {
    return (
        <div 
            key={answer[1]} 
            onClick={() =>  forwardCallback(answer[1])}
            className={classNames(styles.answerItem, {
                [styles.halfAnswerWidth]: answer[0] === 'Да'|| answer[0] === 'Нет',
            })}
        >
            {answer[0]}
        </div>
    )
}

export default AnswerItem;