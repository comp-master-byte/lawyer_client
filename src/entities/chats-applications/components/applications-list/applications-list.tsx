import React from 'react';
import styles from "./applications-list.module.scss";
import ApplicationItem from '../application-item/application-item';
import { ChatItem } from 'entities/chats-applications/model/types';

interface ApplicationsListProps {
    applications: ChatItem[]
}

const ApplicationsList: React.FC<ApplicationsListProps> = ({applications}) => {
    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.applicationsList}>
                {applications.map((item) => 
                    <ApplicationItem key={item.chat_id} application={item} />
                )}
            </div>
        </div>
    )
}

export default ApplicationsList;