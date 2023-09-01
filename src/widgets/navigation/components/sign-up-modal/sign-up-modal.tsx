import React, { useState } from 'react';
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
import { useAppDispatch, useTypedSelector } from 'shared/lib/hooks/redux';
import { authorizationSlice } from 'widgets/navigation/model/authorizationSlice';

interface SignUpModalProps {
    openSignInModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({openSignInModal}) => {
    const {register, control, handleSubmit, formState: {errors}, setError} = useForm<SignUpValues>({mode: "all"});

    const dispatch = useAppDispatch();

    const {toggleSuccessRegisterModalVisibility, toggleRegisterModalVisibility} = authorizationSlice.actions;

    const {isRegisterModalVisible} = useTypedSelector(state => state.authorizationSlice);

    const [isLoading, setIsLoading] = useState(false);

    const onSubmitSignUpForm: SubmitHandler<SignUpValues> = async (data) => {
        setIsLoading(true);
        const response = await Auth.register(data, setError);
        setIsLoading(false);
        if(response) {
            dispatch(toggleRegisterModalVisibility(false));
            dispatch(toggleSuccessRegisterModalVisibility(true));
        } 
    }

    return (
        <AuthorizationModalLayout 
            authButtonText='Войти'
            authTitle='Регистрация'
            authSubtitle='Еще не зарегистрированы?'
            closeAuthModal={() => dispatch(authorizationSlice.actions.toggleRegisterModalVisibility(false))}
            isModalVisible={isRegisterModalVisible}
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
                        error={errors.is_lawyer}
                        validation={{
                            required: "Это поле обязательное!"
                        }}
                    />
                    <MyInput 
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
                        type='password'
                        placeholder='Пароль'
                        error={errors.password}
                        register={register("password", {required: "Это поле обязательное!"})}
                    />
                </div>
                <Checkbox />
                <MyButton 
                    disabled={isLoading}
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