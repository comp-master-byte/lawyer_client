import React from 'react';
import styles from "./applications-list.module.scss";
import ApplicationItem from '../application-item/application-item';
import { ChatItem } from '../../model/types';

interface ApplicationsListProps {
    applications: ChatItem[];
    onSelectAndConnectChat: (id: number, userId: number) => void;
}

const ApplicationsList: React.FC<ApplicationsListProps> = ({applications, onSelectAndConnectChat}) => {
    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.applicationsList}>
                {applications.map((item) => 
                    <ApplicationItem key={item.chat_id} application={item} onSelectAndConnectChat={onSelectAndConnectChat} />
                )}
            </div>
        </div>
    )
}

export default ApplicationsList;