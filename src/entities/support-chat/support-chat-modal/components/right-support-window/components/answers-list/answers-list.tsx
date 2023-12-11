import React from 'react';
import styles from "./answers-list.module.scss";
import AnswerItem from '@/entities/support-chat/answer-item/answer-item';
import { QuestionFromChain } from '@/shared/model/types';

interface AnswersListProps {
    chainData: QuestionFromChain|null;
    moveToTheNextChain: (nodeId: number) => void;
}

const AnswersList: React.FC<AnswersListProps> = ({chainData, moveToTheNextChain}) => {
    return (
        <div className={styles.answersList}> 
            {chainData?.answers ? Object.entries(chainData.answers).map((item, index) => <AnswerItem forwardCallback={moveToTheNextChain} key={index} answer={item} />) : <></>}
        </div>  
    )
}

export default AnswersList