import React from 'react';
import styles from "./sign-up-modal.module.scss";
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpValues } from 'widgets/navigation/model/types';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import ControllerSelect from 'shared/ui/select/controller-select';
import { REGISTER_TYPE } from 'widgets/navigation/constants/constants';
import Checkbox from 'shared/ui/checkbox/checkbox';
import MyButton from 'shared/ui/MyButton/MyButton';
import Auth from 'widgets/navigation/api/Auth';
import AuthorizationModalLayout from 'entities/authorization/authorization-modal-layout/authorization-modal-layout';

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
        <AuthorizationModalLayout 
            authButtonText='Войти'
            authTitle='Авторизация'
            authSubtitle='Еще не зарегистрированы?'
            closeAuthModal={closeSignUpModal}
            isModalVisible={isSignUpModalVisible}
            openAnotherModalCallback={openSignInModal}
        >
            <form 
                autoComplete='off'
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
                        name='is_lawyer'
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
        </AuthorizationModalLayout>
    )
}

export default SignUpModal