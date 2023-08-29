import React from 'react';
import styles from "./SignUpModal.module.scss";
import Modal from 'shared/ui/modal/modal';
import closeModalSvg from "../../assets/close-modal.svg";
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpValues } from 'widgets/navigation/model/types';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import ControllerSelect from 'shared/ui/select/controller-select';
import { REGISTER_TYPE } from 'widgets/navigation/constants/constants';
import Checkbox from 'shared/ui/checkbox/checkbox';
import MyButton from 'shared/ui/MyButton/MyButton';
import Auth from 'widgets/navigation/api/Auth';

interface SignUpModalProps {
    isSignUpModalVisible: boolean;
    closeSignUpModal: () => void;
    openSignInModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({isSignUpModalVisible, closeSignUpModal, openSignInModal}) => {
    const {register, control, handleSubmit, formState: {errors}} = useForm<SignUpValues>({mode: "all"});

    const onSubmitSignUpForm: SubmitHandler<SignUpValues> = async (data) => {
        const response = await Auth.register(data);
        console.log(response);
    }

    return (
        <Modal 
            isModalVisible={isSignUpModalVisible}
            modalContentClassName={styles.signUpModalContent}
        >
            <div className={styles.closeModalButton} onClick={closeSignUpModal}>
                <img src={closeModalSvg} alt="" />
            </div>
            <article className={styles.signUpModalTitle}>
                <h2 className={styles.signUpModalTitle__title}>Авторизация</h2>
                <p className={styles.signUpModalTitle__text}>Еще не зарегистрированы?</p>
                <div className={styles.inlineButton} onClick={openSignInModal}>Войти</div>
            </article>
            <form 
                onSubmit={handleSubmit(onSubmitSignUpForm)}
                className={styles.signUpForm}
            >
                <div className={styles.formInputs}>
                    <MyInput 
                        placeholder='ФИО'
                        error={errors.full_name}
                        register={register("full_name", {required: "Это поле обязательное!"})}
                    />
                    <ControllerSelect 
                        name='type'
                        defaultValue='Тип регистрации'
                        control={control}
                        options={REGISTER_TYPE}
                    />
                    <MyInput 
                        placeholder='Email'
                        error={errors.password}
                        register={register("email", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Email введен некорректно!"
                            }
                        })}
                    />
                    <MyInput 
                        type='password'
                        placeholder='Пароль'
                        error={errors.password}
                        register={register("password", {required: "Это поле обязательное!"})}
                    />
                </div>
                <Checkbox />
                <MyButton 
                    color='secondary' 
                    variant='contained'
                    btnClassName={styles.signUpButton}
                >
                    Зарегистрироваться
                </MyButton>
            </form>
        </Modal>
    )
}

export default SignUpModal