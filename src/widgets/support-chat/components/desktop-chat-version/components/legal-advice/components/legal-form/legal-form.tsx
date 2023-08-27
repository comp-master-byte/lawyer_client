import React from 'react';
import styles from "./legal-form.module.scss";
import { useLegalAdviceForm } from 'widgets/support-chat/lib/hooks/useLegalAdviceForm';
import MyInput from 'shared/ui/MyInput/MyInput';
import TextArea from 'shared/ui/MyInput/textarea';
import MyButton from 'shared/ui/MyButton/MyButton';
import Checkbox from 'shared/ui/checkbox/checkbox';
import Select from 'shared/ui/select/select';
import { THEMES } from 'shared/constants/constants';
import ControllerSelect from 'shared/ui/select/controller-select';

const LegalForm: React.FC = () => {
    const {
        register,
        errors,
        handleSubmit,
        control,
        onSubmitAdviceForm
    } = useLegalAdviceForm();

    return (
        <form className={styles.legalAdviceForm} onSubmit={handleSubmit(onSubmitAdviceForm)}>
            <ControllerSelect 
                name='topic'
                label='Тема обращения'
                options={THEMES}
                control={control}
            />

            <TextArea  
                label='Вопрос' 
                placeholder='Введите вопрос...' 
                error={errors.question} 
                register={register("question")} 
            />

            <Checkbox />

            <MyButton 
                color='secondary' 
                variant='contained'
                btnClassName={styles.submitButton}
            >
                Отправить запрос юристу
            </MyButton>
        </form>
    )
}

export default LegalForm;