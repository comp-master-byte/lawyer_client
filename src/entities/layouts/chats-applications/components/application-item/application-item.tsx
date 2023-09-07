import React from 'react';
import styles from "./application-item.module.scss";
import { ChatItem } from '../../model/types';

interface ApplicationItemProps {
    application: ChatItem;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({application}) => {
    return (
        <div className={styles.applicationWrapper}>
            Заявка {application.chat_id}
        </div>
    )
}

export default ApplicationItem;