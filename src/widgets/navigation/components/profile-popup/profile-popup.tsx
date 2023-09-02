import React from 'react';
import styles from "./profile-popup.module.scss"
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import $api from 'shared/api/http';

interface ProfilePopupProps {
    isPopupVisible: boolean;
    closeProfilePopup: () => void;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({isPopupVisible, closeProfilePopup}) => {
    const navigate = useNavigate();

    const logout = async function() {
        try {
            const response = await $api.post('/auth/token/logout');
            Cookies.remove('token');
            navigate('/');
        } catch(error: any) {
            toast("Ошибки при выходе из профиля. Мы уже работает над этим!", {type: "error"})
        }
    }

    return (
        <div className={classNames(styles.profilePopupWrapper, {
            [styles.visible]: isPopupVisible
        })}>
            <div className={styles.profileMenuLinks}>
                <Link 
                    to='/cabinet/appeals' 
                    onClick={closeProfilePopup} 
                    className={styles.pageLink}
                >
                    Мои обращения
                </Link>
                <Link 
                    to='/cabinet/appeals' 
                    onClick={closeProfilePopup} 
                    className={styles.pageLink}
                >
                    Чаты
                </Link>
                <Link 
                    to='/cabinet/edit-profile' 
                    onClick={closeProfilePopup} 
                    className={styles.pageLink}
                >
                    Редактировать профиль
                </Link>
                <div 
                    onClick={logout} 
                    className={styles.pageLink}
                >
                    Выйти из профиля
                </div>
            </div>
        </div>
    )
}

export default ProfilePopup;