import React from 'react';
import styles from "./select-lawyer-modal.module.scss";
import InterestedLawyerModal from 'entities/insterested-lawyer-modal/insterested-lawyer-modal';
import MyButton from 'shared/ui/MyButton/MyButton';

interface SelectLawyerModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
}

const SelectLawyerModal: React.FC<SelectLawyerModalProps> = ({closeModal, isModalVisible}) => {
    return (
        <InterestedLawyerModal
            closeModal={closeModal}
            isModalVisible={isModalVisible}
        >
            <div className={styles.content}>
                <h2 className={styles.confirmationTitle}>
                    Вы уверены, что хотите выбрать именно этого юриста?
                </h2>
                <br />
                <h2 className={styles.confirmationTitle}>
                    В дальнейшем изменить выбор по данной заявке будет невозможно
                </h2>
                <MyButton
                    color='secondary'
                    variant='contained'
                    size='large'
                    btnClassName={styles.button}
                >
                    Да, я уверен(а)
                </MyButton>
            </div>
        </InterestedLawyerModal>
    )
}

export default SelectLawyerModal;