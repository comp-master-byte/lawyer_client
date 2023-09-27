import React from 'react';
import styles from "./response-modal.module.scss";
import ModalCloseButton from 'entities/layouts/modal-close-button/modal-close-button';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextArea from 'shared/ui/MyInput/textarea';
import InputMask from 'shared/ui/MyInput/input-mask';
import MyButton from 'shared/ui/MyButton/MyButton';
import Respond from './api/Respond';
import { toast } from 'react-toastify';
import { useAppDispatch } from 'shared/lib/hooks/redux';
import { marketSlice } from 'pages/lawyer-cabinet/market/model/marketSlice';

interface ResponseModalProps {
    closeModal: () => void;
    isModalVisible: boolean;
    questionId: number;
}

export interface ResponseValues {
    cost: string;
    period: string;
    response: string;
}

const ResponseModal: React.FC<ResponseModalProps> = ({closeModal, isModalVisible, questionId}) => {
    const {register, formState: {errors}, control, handleSubmit} = useForm<ResponseValues>();

    const dispatch = useAppDispatch();
    const {deleteFreeQuestion} = marketSlice.actions;

    const onSubmitRespond: SubmitHandler<ResponseValues> = async (data) => {
        const response = await Respond.sendResponse(data, questionId);
        if(response) {
            dispatch(deleteFreeQuestion(questionId));
            closeModal();
            toast("Ваш отклик успешно отправлен!", {
                type: "success"
            })
        }
    }

    return (
        <ModalCloseButton
            closeModal={closeModal}
            isModalVisible={isModalVisible}
        >
            <form onSubmit={handleSubmit(onSubmitRespond)} className={styles.responseModalContent}>
                <h2 className={styles.title}>Напишите ваш отклик</h2>
                <TextArea 
                    inputClassName={styles.textarea}
                    error={errors.response}
                    register={register("response", {
                        required: "Это поле обязательное!"
                    })}
                />
                <div className={styles.formInputs}>
                    <InputMask 
                        name='cost'
                        mask='*****************руб'
                        label='Стоимость услуги'
                        control={control}
                        inputClassName={styles.input}
                    />
                    <InputMask 
                        name='period'
                        mask='***дн **ч'
                        label='Время выполнения'
                        control={control}
                        inputClassName={styles.input}
                    />
                </div>

                <MyButton
                    size='large'
                    color='secondary'
                    variant='contained'
                > 
                    Отправить отклик
                </MyButton>
            </form>
        </ModalCloseButton>
    )
}

export default ResponseModal;