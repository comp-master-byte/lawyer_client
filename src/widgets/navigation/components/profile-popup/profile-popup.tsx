import React from 'react';
import styles from "./profile-popup.module.scss"
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import $api from 'shared/api/http';
import { ProfileLink } from 'widgets/navigation/model/types';

interface ProfilePopupProps {
    isPopupVisible: boolean;
    closeProfilePopup: () => void;
    profileLinks: ProfileLink[];
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({isPopupVisible, closeProfilePopup, profileLinks}) => {
    const navigate = useNavigate();

    const logout = async function() {
        try {
            const response = await $api.post('/auth/token/logout');
            Cookies.remove('token');
            localStorage.removeItem('user');
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
                {profileLinks.map((link) => 
                    <Link 
                        key={link.to}
                        to={link.to} 
                        onClick={closeProfilePopup} 
                        className={styles.pageLink}
                    >
                        {link.name}
                    </Link>
                )}
{/* 
                <Link 
                    to='/cabinet/appeals' 
                    onClick={closeProfilePopup} 
                    className={styles.pageLink}
                >
                   
                </Link>
                <Link 
                    to='/cabinet/chats' 
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
                    
                </Link> */}
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