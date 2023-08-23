import React from 'react';
import styles from "./answer-item.module.scss";
import classNames from 'classnames';
import { fetchMessageNode } from 'widgets/support-chat/model/async-actions';
import { supportChatSlice } from 'widgets/support-chat/model/supportChatSlice';
import { useAppDispatch } from 'shared/lib/hooks/redux';

interface AnswerItemProps {
    answer: [string, number];
}

const AnswerItem: React.FC<AnswerItemProps> = ({answer}) => {
    const dispatch = useAppDispatch();

    const moveToTheNextChain = function(nodeId: number) {
        dispatch(fetchMessageNode(nodeId));
        dispatch(supportChatSlice.actions.pushChainToArray(nodeId));
    }

    return (
        <div 
            key={answer[1]} 
            onClick={() =>  moveToTheNextChain(answer[1])}
            className={classNames(styles.answerItem, {
                [styles.halfAnswerWidth]: answer[0] === 'Да'|| answer[0] === 'Нет',
            })}
        >
            {answer[0]}
        </div>
    )
}

export default AnswerItem;