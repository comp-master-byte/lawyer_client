import React from 'react';
import styles from "./profile-key-name.module.scss";
import classNames from 'classnames';

interface ProfileKeyNameProps {
    children: React.ReactNode;
    variant: 'primary'|'secondary';
}

const ProfileKeyName: React.FC<ProfileKeyNameProps> = ({children, variant}) => {
    return (
        <div className={classNames(styles.keyName, {
            [styles.secondary]: variant === 'secondary'
        })}>{children}</div>
    )
}

export default ProfileKeyName;