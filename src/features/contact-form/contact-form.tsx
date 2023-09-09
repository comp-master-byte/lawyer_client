import React, { useState } from "react";
import styles from "./contact-form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from "shared/ui/MyButton/MyButton";
import { ContractFormValues } from "./model/types";
import QuestionForm from "./api/QuestionForm";
import { EMAIL_REGEX } from "shared/constants/constants";
import Checkbox from "shared/ui/checkbox/checkbox";
import MyInput from "shared/ui/MyInput/MyInput";
import TextArea from "shared/ui/MyInput/textarea";
import ErrorText from "shared/styled-components/error-text/error-text";

const ContactForm: React.FC = React.memo(function ContactForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ContractFormValues>({mode: "all"});

    const [isChecked, setIsChecked] = useState(false);
    const [triggerCheckedError, setIsTriggerCheckedError] = useState(false);

    const onChecked = function(e: React.ChangeEvent<HTMLInputElement>) {
      const checked = e.target.checked
      setIsChecked(checked);

      if(checked) {
          setIsTriggerCheckedError(false);
      }
  }

    const onSubmit: SubmitHandler<ContractFormValues> = async (data) => {
        if(!isChecked) {
          setIsTriggerCheckedError(true);
          return;
        }
        
        return await QuestionForm.questionToEmail(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.contactInputs}>
          <MyInput  
              placeholder="Имя"
              error={errors.name}
              inputClassName={styles.contactInputs__input}
              register={register("name", {
                  required: "Это поле обязательное!"
              })}
          />
          <MyInput  
              placeholder="E-mail"
              error={errors.email}
              inputClassName={styles.contactInputs__input}
              register={register("email", {
                  required: "Это поле обязательное!",
                  pattern: {
                      message: "E-mail введен некорректно!",
                      value: EMAIL_REGEX
                  }
              })}
          />
          <TextArea 
              placeholder="Ваше сообщение/вопрос"
              error={errors.message}
              inputClassName={styles.contactInputs__textarea}
              register={register("message", {
                  required: "Это поле обязательное!",
              })}
          />
      </div>
      
      <div className={styles.checkboxWrapper}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        {triggerCheckedError && <ErrorText />}
      </div>

      <MyButton btnClassName={styles.submitButton} color="primary" variant="contained" size="large">
        Отправить
      </MyButton>
    </form>
  );
});

export default ContactForm;
