import React, { useState } from 'react';
import styles from "./select-lawyer-modal.module.scss";
import InterestedLawyerModal from 'entities/insterested-lawyer-modal/insterested-lawyer-modal';
import MyButton from 'shared/ui/MyButton/MyButton';
import { useNavigate, useParams } from 'react-router-dom';
import Lawyer from 'pages/cabinet/waiting-lawyer-appeal/api/Lawyer';

interface SelectLawyerModalProps {
    isModalVisible: boolean;
    closeModal: () => void;
    interestedLawyerId: number;
}

const SelectLawyerModal: React.FC<SelectLawyerModalProps> = ({closeModal, isModalVisible, interestedLawyerId}) => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const chooseInterestedLawyer = async () => {
        if(id) {
            setIsLoading(true);
            const response = await Lawyer.choose_lawyer(+id, interestedLawyerId);
            setIsLoading(false);
            if(response) {
                navigate(`/cabinet/chats/${id}`)
            }
        }        
    }

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
                    onClick={chooseInterestedLawyer}
                    disabled={isLoading}
                >
                    Да, я уверен(а)
                </MyButton>
            </div>
        </InterestedLawyerModal>
    )
}

export default SelectLawyerModal;