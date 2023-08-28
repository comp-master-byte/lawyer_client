import React from 'react';
import styles from "./answer-list.module.scss"
import StaticContent from 'entities/support-chat/static-content/static-content';
import { useTypedSelector } from 'shared/lib/hooks/redux';

const AnswerList: React.FC = () => {
    const {data, isLoading} = useTypedSelector(state => state.supportChatSlice);

    return (
        <section className={styles.answerList}>
            {isLoading ? <StaticContent /> : data?.node_id === 1 
                ? <StaticContent />
                : <p className={styles.contentHelperText}>{data?.message}</p>
            }
        </section>
    )
}

export default AnswerList;