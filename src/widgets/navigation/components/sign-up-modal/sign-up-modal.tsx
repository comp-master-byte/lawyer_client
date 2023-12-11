import React, { useState } from 'react';
import styles from "./sign-up-modal.module.scss";
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpValues } from '@/widgets/navigation/model/types';
import MyInput from '@/shared/ui/MyInput/MyInput';
import { EMAIL_REGEX } from '@/shared/constants/constants';
import ControllerSelect from '@/shared/ui/select/controller-select';
import { REGISTER_TYPE } from '@/widgets/navigation/constants/constants';
import Checkbox from '@/shared/ui/checkbox/checkbox';
import MyButton from '@/shared/ui/MyButton/MyButton';
import Auth from '@/widgets/navigation/api/Auth';
import ModalWithTitle from '@/shared/ui/modal-with-title/modal-with-title';
import { useAppDispatch, useTypedSelector } from '@/shared/lib/hooks/redux';
import { authorizationSlice } from '@/widgets/navigation/model/authorizationSlice';
import ErrorText from '@/shared/styled-components/error-text/error-text';

interface SignUpModalProps {
    openSignInModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({openSignInModal}) => {
    const {register, control, handleSubmit, formState: {errors}, setError} = useForm<SignUpValues>({mode: "all"});

    const dispatch = useAppDispatch();

    const {
        toggleSuccessRegisterModalVisibility, 
        toggleRegisterModalVisibility
    } = authorizationSlice.actions;

    const {isRegisterModalVisible} = useTypedSelector(state => state.authorizationSlice);
    const {savedChains} = useTypedSelector(state => state.supportChatSlice);

    const [isLoading, setIsLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [triggerCheckedError, setIsTriggerCheckedError] = useState(false);

    const onChecked = function(e: React.ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked
        setIsChecked(checked);

        if(checked) {
            setIsTriggerCheckedError(false);
        }
    }

    const onSubmitSignUpForm: SubmitHandler<SignUpValues> = async (data) => {
        if(!isChecked) {
            setIsTriggerCheckedError(true);
            return;
        }

        setIsLoading(true);
        const response = await Auth.register({...data, chain: savedChains}, setError);
        setIsLoading(false);
        if(response) {
            dispatch(toggleRegisterModalVisibility(false));
            dispatch(toggleSuccessRegisterModalVisibility(true));
        } 
    }

    return (
        <ModalWithTitle 
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
                <Checkbox isChecked={isChecked} onChecked={onChecked} />
                {triggerCheckedError && <ErrorText />} 
                <MyButton 
                    disabled={isLoading}
                    color='secondary' 
                    variant='contained'
                    btnClassName={styles.signUpButton}
                >
                    Зарегистрироваться
                </MyButton>
            </form>
        </ModalWithTitle>
    )
}

export default SignUpModal