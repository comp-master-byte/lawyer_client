import React, { useState } from 'react';
import styles from "./reset-form.module.scss";
import MyInput from 'shared/ui/MyInput/MyInput';
import MyButton from 'shared/ui/MyButton/MyButton';
import { SubmitHandler, useForm } from 'react-hook-form';
import Auth from 'widgets/navigation/api/Auth';
import { useTypedSelector } from 'shared/lib/hooks/redux';

interface FormValues {
    new_password: string;
}

interface ResetFormProps {
    setIsSuccessResetPassword: (bool: boolean) => void;
}

const ResetForm: React.FC<ResetFormProps> = ({setIsSuccessResetPassword}) => {
    const {register, formState: {errors}, handleSubmit} = useForm<FormValues>();
    const {token, uid} = useTypedSelector(state => state.authorizationSlice);

    const [isLoading, setIsLoading] = useState(false);

    const onResetPassword: SubmitHandler<FormValues> = async (data) => {
        setIsLoading(true);
        const response = await Auth.resetPasswordConfirm({new_password: data.new_password, token, uid});
        setIsLoading(false);
        if(response) {
            setIsSuccessResetPassword(true);
        }
    }

    return (
        <form onSubmit={handleSubmit(onResetPassword)}>
            <MyInput 
                type='password'
                inputClassName={styles.resetPasswordInput}
                register={register("new_password", {
                    required: "Это поле обязательное!"
                })}
            />
            <MyButton
                color='secondary'
                variant='contained'
                size='large'
                btnClassName={styles.resetPasswordButton}
                disabled={isLoading}
            >
                Сохранить
            </MyButton>
        </form>
    )
}

export default ResetForm;