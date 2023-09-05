import React from 'react';
import styles from "./applications-list.module.scss";
import ApplicationItem from '../application-item/application-item';

interface ApplicationsListProps {
    applications: any[]
}

const ApplicationsList: React.FC<ApplicationsListProps> = ({applications}) => {
    return (
        <div className={styles.scrollWrapper}>
            <div className={styles.applicationsList}>
                {applications.map((item) => 
                    <ApplicationItem key={item.question_id} application={item} />
                )}
            </div>
        </div>
    )
}

export default ApplicationsList;