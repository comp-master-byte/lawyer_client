import React from 'react';
import styles from "./application-item.module.scss";

interface ApplicationItemProps {
    application: any;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({application}) => {
    return (
        <div className={styles.applicationWrapper}>
            Заявка {application.question_id}
        </div>
    )
}

export default ApplicationItem;