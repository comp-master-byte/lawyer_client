import React from 'react';
import styles from "./free-questions-list.module.scss";
import { MarketQuestion } from '../../model/types';
import FreeQuestionItem from '../free-question-item/free-question-item';

interface FreeQuestionsListProps {
    applications: MarketQuestion[]
}

const FreeQuestionsList: React.FC<FreeQuestionsListProps> = ({applications}) => {
    return (
        <div className={styles.applicationsList}>
            {applications.map((item) => 
                <FreeQuestionItem key={item.question_id} application={item} />
            )}
        </div>
    )
}

export default FreeQuestionsList;