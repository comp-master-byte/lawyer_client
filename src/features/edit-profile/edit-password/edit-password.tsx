import React, { useCallback, useState } from 'react';
import styles from "./edit-password.module.scss";
import ProfileKeyName from 'entities/profile-key-name/profile-key-name';
import MyButton from 'shared/ui/MyButton/MyButton';
import EditPasswordModal from './components/edit-password-modal/edit-password-modal';

interface EditPasswordProps {
    variant: 'primary'|'secondary'
}

const EditPassword: React.FC<EditPasswordProps> = ({variant}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeEditModal = useCallback(() => {
        setIsModalVisible(false);
    }, [])

    const openEditModal = () => setIsModalVisible(true);

    return (
        <div className={styles.editPasswordWrapper}>
            <EditPasswordModal 
                closeEditPasswordModal={closeEditModal}
                isEditPasswordModalVisible={isModalVisible}
            />
            <div className={styles.inputWrapper}>
                <ProfileKeyName variant={variant}>Пароль</ProfileKeyName>
                <MyButton 
                    type='button'
                    color='primary'
                    variant='contained'
                    size='large'
                    btnClassName={styles.passwordButton}
                    onClick={openEditModal}
                >
                    Изменить
                </MyButton>
            </div>
        </div>
    )
}

export default EditPassword;