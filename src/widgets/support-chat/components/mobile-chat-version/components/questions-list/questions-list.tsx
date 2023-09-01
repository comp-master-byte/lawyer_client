import React from 'react';
import styles from "./questions-list.module.scss";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import AnswerItem from 'entities/support-chat/answer-item/answer-item';
import Loader from 'shared/ui/loader/loader';

const QuestionsList: React.FC = () => {
    const {data, isLoading} = useTypedSelector(state => state.supportChatSlice);

    if(data && !Object.keys(data.answers).length) {
        return <></>
    }
    
    return (
        <div className={styles.questionsListWrapper}>
            {isLoading ? <Loader /> : data?.answers && Object.entries(data.answers).map((item) => <AnswerItem answer={item} />)}
        </div>
    )
}

export default QuestionsList;