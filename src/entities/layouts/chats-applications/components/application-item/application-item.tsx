import React from 'react';
import styles from "./application-item.module.scss";
import { ChatItem } from '../../model/types';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface ApplicationItemProps {
    application: ChatItem;
    onSelectAndConnectChat: (id: number) => void;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({application, onSelectAndConnectChat}) => {
    const {id} = useParams();

    return (
        <Link 
            to={`/cabinet/chats/${application.question}`} 
            onClick={() => onSelectAndConnectChat(application.chat_id)}
            className={classNames(styles.applicationWrapper, {
                [styles.selectedChat]: id && +id === +(application.question)
            })}
        >
            Заявка {application.question}
        </Link>
    )
}

export default ApplicationItem;