import React from 'react';
import styles from "./application-item.module.scss";
import { ChatItem } from '../../model/types';
import { Link, useParams } from 'react-router-dom';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import classNames from 'classnames';

interface ApplicationItemProps {
    application: ChatItem;
    onSelectAndConnectChat: (id: number, userId: number) => void;
}

const ApplicationItem: React.FC<ApplicationItemProps> = ({application, onSelectAndConnectChat}) => {
    const {user} = useTypedSelector(state => state.userSlice);
    const {id} = useParams();

    return (
        <Link 
            to={`/cabinet/chats/${application.chat_id}`} 
            onClick={() => onSelectAndConnectChat(application.chat_id, user!.id)}
            className={classNames(styles.applicationWrapper, {
                [styles.selectedChat]: id && +id === +(application.chat_id)
            })}
        >
            Заявка {application.chat_id}
        </Link>
    )
}

export default ApplicationItem;