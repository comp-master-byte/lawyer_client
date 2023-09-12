import React, { useEffect, useState } from 'react';
import styles from "./sign-in-modal.module.scss";
import { SubmitHandler, useForm } from 'react-hook-form';
import MyInput from 'shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from 'shared/constants/constants';
import MyButton from 'shared/ui/MyButton/MyButton';
import { SignInValues } from 'widgets/navigation/model/types';
import Auth from 'widgets/navigation/api/Auth';
import classNames from 'classnames';
import ModalWithTitle from 'shared/ui/modal-with-title/modal-with-title';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { userSlice } from 'features/user/model/userSlice';

interface SignInModalProps {
    closeSignInModal: () => void;
    openSignUpModal: () => void;
    openForgetPasswordModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = (props) => {
    const {closeSignInModal, openSignUpModal, openForgetPasswordModal} = props;
    const {register, handleSubmit, formState: {errors}, setError, reset} = useForm<SignInValues>({mode: "all"});
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {isSignInModalVisible} = useTypedSelector(state => state.authorizationSlice);

    const [isLoading, setIsLoading] = useState(false);

    const onSignInFormSubmit: SubmitHandler<SignInValues> = async (data) => {
        setIsLoading(true);
        const response = await Auth.login(data, setError);
        setIsLoading(false);
        if(response) {
            const token = JSON.stringify(response.auth_token);
            Cookies.set('token', token);
            dispatch(userSlice.actions.setUser(response.user));
            closeSignInModal();
            if(response.user.is_lawyer) {
                navigate('/lawyer-cabinet/applications');
            } else {
                navigate('/cabinet/appeals');
            }
            reset({email: "", password: ""})
        }
    }

    useEffect(() => {
        if(isSignInModalVisible) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isSignInModalVisible])
    

    return (
        <ModalWithTitle
            authTitle='Авторизация'
            authButtonText='Зарегистрироваться'
            authSubtitle='Еще не зарегистрированы?'
            closeAuthModal={closeSignInModal}
            isModalVisible={isSignInModalVisible}
            openAnotherModalCallback={openSignUpModal}
        >
            <form 
                autoComplete="off"
                className={styles.signInFormWrapper}
                onSubmit={handleSubmit(onSignInFormSubmit)}
            >
                <div className={styles.formInputs}>
                    <MyInput 
                        label=''
                        placeholder='Email'
                        error={errors.email}
                        register={register("email", {
                            required: "Это поле обязательное!",
                            pattern: {
                                value: EMAIL_REGEX,
                                message: "Email введен некорректно!"
                            }
                        })}
                    />
                    <MyInput 
                        label=''
                        type="password"
                        placeholder='Пароль'
                        error={errors.password}
                        register={register("password", {
                            required: "Это поле обязательное!",
                        })}
                    />
                </div>

                <div className={styles.signInButtons}>
                    <MyButton 
                        color='secondary' 
                        variant='contained' 
                        disabled={isLoading}
                        btnClassName={styles.submitButton}
                    >   
                        Войти
                    </MyButton>
                    <div 
                        onClick={openForgetPasswordModal}
                        className={classNames(styles.inlineButton, styles.mobBtnInline)}
                    >
                        Напомнить пароль?
                    </div>
                </div>

            </form>
        </ModalWithTitle>
    )
}

export default SignInModal