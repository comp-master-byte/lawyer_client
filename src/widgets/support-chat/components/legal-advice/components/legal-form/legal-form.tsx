import React from 'react';
import styles from "./legal-form.module.scss";
import { useLegalAdviceForm } from 'widgets/support-chat/lib/hooks/useLegalAdviceForm';
import MyInput from 'shared/ui/MyInput/MyInput';

const LegalForm: React.FC = () => {
    const {
        register,
        errors,
        handleSubmit,
        onSubmitAdviceForm
    } = useLegalAdviceForm();

    return (
        <form onSubmit={handleSubmit(onSubmitAdviceForm)}>
            <div className={styles.legalFormInputs}>
                <MyInput 
                    label='Имя' 
                    placeholder='Введите имя...' 
                    error={errors.name} 
                    register={register("name")} 
                />
                <MyInput 
                    label='Почта' 
                    placeholder='Введите почту...' 
                    error={errors.email} 
                    register={register("email")} 
                />
            </div>
        </form>
    )
}

export default LegalForm;