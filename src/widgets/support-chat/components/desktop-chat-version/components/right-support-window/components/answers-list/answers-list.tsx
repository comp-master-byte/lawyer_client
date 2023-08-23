import React from 'react';
import styles from "./answers-list.module.scss";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import AnswerItem from '../answer-item/answer-item';

const AnswersList: React.FC = () => {
    const {data} = useTypedSelector(state => state.supportChatSlice);

    return (
        <div className={styles.answersList}> 
            {data?.answers ? Object.entries(data.answers).map((item) => <AnswerItem answer={item} />) : <></>}
        </div>  
    )
}

export default AnswersList