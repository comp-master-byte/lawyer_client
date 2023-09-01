import React from 'react';
import styles from "./success-register-modal.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeSvg from "./assets/close-modal.svg";
import MyButton from 'shared/ui/MyButton/MyButton';
import { useDispatch } from 'react-redux';
import { authorizationSlice } from 'widgets/navigation/model/authorizationSlice';
import { useTypedSelector } from 'shared/lib/hooks/redux';

interface SuccessRegisterModalProps {
}

const SuccessRegisterModal: React.FC<SuccessRegisterModalProps> = () => {
    const dispatch = useDispatch();

    const {isSuccessRegisterModalVisible} = useTypedSelector(state => state.authorizationSlice);
    
    const {toggleSuccessRegisterModalVisibility, toggleSignInModalVisibility} = authorizationSlice.actions;

    return (
        <Modal 
            isModalVisible={isSuccessRegisterModalVisible} 
            modalContentClassName={styles.successRegisterContent}
        >
            <div className={styles.closeModalButton}>
                <img onClick={() => dispatch(toggleSuccessRegisterModalVisibility(false))} src={closeSvg} alt="" />
            </div>

            <div className={styles.modalContent}>
                <h2 className={styles.modalContent__title}>Регистрация успешно пройдена</h2>
                <MyButton 
                    color='secondary' 
                    variant='contained'
                    btnClassName={styles.modalContent__button}
                    onClick={() => {
                        dispatch(toggleSuccessRegisterModalVisibility(false));
                        dispatch(toggleSignInModalVisibility(true));
                    }}
                >
                    Войти в личный кабинет
                </MyButton>
            </div>
        </Modal>
    )
}

export default SuccessRegisterModal;