import React from 'react';
import styles from "./questions-list.module.scss";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import AnswerItem from 'entities/support-chat/answer-item/answer-item';

const QuestionsList: React.FC = () => {
    const {data} = useTypedSelector(state => state.supportChatSlice);

    return (
        <div className={styles.questionsListWrapper}>
            {data?.answers ? Object.entries(data.answers).map((item) => <AnswerItem answer={item} />) : <></>}
        </div>
    )
}

export default QuestionsList;