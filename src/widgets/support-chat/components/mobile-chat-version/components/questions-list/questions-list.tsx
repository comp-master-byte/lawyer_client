import React from 'react';
import styles from "./questions-list.module.scss";
import { useAppDispatch, useTypedSelector } from '@/shared/lib/hooks/redux';
import AnswerItem from '@/entities/support-chat/answer-item/answer-item';
import Loader from '@/shared/ui/loader/loader';
import { fetchMessageNode } from '@/widgets/support-chat/model/async-actions';
import { supportChatSlice } from '@/widgets/support-chat/model/supportChatSlice';

const QuestionsList: React.FC = () => {
    const {data, isLoading} = useTypedSelector(state => state.supportChatSlice);

    const dispatch = useAppDispatch();

    const moveToTheNextChain = function(nodeId: number) {
        dispatch(fetchMessageNode(nodeId));
        dispatch(supportChatSlice.actions.pushChainToArray(nodeId));
    }

    if(data && !Object.keys(data.answers).length) {
        return <></>
    }
    
    return (
        <div className={styles.questionsListWrapper}>
            {isLoading ? <Loader /> : data?.answers && Object.entries(data.answers).map((item) => <AnswerItem forwardCallback={moveToTheNextChain} answer={item} />)}
        </div>
    )
}

export default QuestionsList;