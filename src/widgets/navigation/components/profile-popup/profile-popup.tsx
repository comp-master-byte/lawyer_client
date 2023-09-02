import React from 'react';
import styles from "./profile-popup.module.scss"
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface ProfilePopupProps {
    isPopupVisible: boolean;
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({isPopupVisible}) => {
    return (
        <div className={classNames(styles.profilePopupWrapper, {
            [styles.visible]: isPopupVisible
        })}>
            <div className={styles.profileMenuLinks}>
                <Link to='/cabinet/appeals' className={styles.pageLink}>Мои обращения</Link>
                <Link to='/cabinet/appeals' className={styles.pageLink}>Чаты</Link>
                <Link to='/cabinet/appeals' className={styles.pageLink}>Редактировать профиль</Link>
                <div className={styles.pageLink}>Выйти из профиля</div>
            </div>
        </div>
    )
}

export default ProfilePopup;