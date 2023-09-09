import React from 'react';
import styles from "./legal-form.module.scss";
import TextArea from 'shared/ui/MyInput/textarea';
import MyButton from 'shared/ui/MyButton/MyButton';
import Checkbox from 'shared/ui/checkbox/checkbox';
import { THEMES } from 'shared/constants/constants';
import ControllerSelect from 'shared/ui/select/controller-select';
import { useLegalAdviceForm } from '../../hooks/useLegalAdviceForm';
import ErrorText from 'shared/styled-components/error-text/error-text';

const LegalForm: React.FC = () => {
    const {
        register,
        errors,
        control,
        isChecked, 
        onChecked,
        handleSubmit,
        triggerCheckedError,
        onSubmitAdviceForm
    } = useLegalAdviceForm();

    return (
        <form className={styles.legalAdviceForm} onSubmit={handleSubmit(onSubmitAdviceForm)}>
            <ControllerSelect 
                name='topic'
                label='Тема обращения'
                options={THEMES}
                error={errors.topic}
                validation={{required: "Это поле обязательное!"}}
                control={control}
            />

            <TextArea  
                label='Вопрос' 
                placeholder='Введите вопрос...' 
                error={errors.question_text} 
                inputClassName={styles.textareaRadius}
                register={register("question_text", {
                    required: "Это поле обязательное!"
                })} 
            />

            <Checkbox isChecked={isChecked} onChecked={onChecked} />

            {triggerCheckedError && <ErrorText />}

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