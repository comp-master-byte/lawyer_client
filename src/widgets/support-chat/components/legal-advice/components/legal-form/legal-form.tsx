import React from 'react';
import styles from "./legal-form.module.scss";
import { useLegalAdviceForm } from 'widgets/support-chat/lib/hooks/useLegalAdviceForm';
import MyInput from 'shared/ui/MyInput/MyInput';
import TextArea from 'shared/ui/MyInput/textarea';

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

            <TextArea  
                label='Вопрос' 
                placeholder='Введите вопрос...' 
                error={errors.question} 
                register={register("question")} 
            />
        </form>
    )
}

export default LegalForm;