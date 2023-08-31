import React from "react";
import styles from "./contact-form.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import MyButton from "shared/ui/MyButton/MyButton";
import { ContractFormValues } from "./model/types";
import QuestionForm from "./api/QuestionForm";
import { EMAIL_REGEX } from "shared/constants/constants";
import Checkbox from "shared/ui/checkbox/checkbox";

const ContactForm: React.FC = React.memo(function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContractFormValues>({mode: "all"});

  const onSubmit: SubmitHandler<ContractFormValues> = async (data) => {
      return await QuestionForm.questionToEmail(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.contactInputs}>
        <input
          defaultValue=""
          placeholder="Имя"
          className={styles.contactInputs__input}
          {...register("name", { required: "Это поле обязательное!" })}
        />
        {errors && errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
        <input
          defaultValue=""
          placeholder="E-mail"
          className={styles.contactInputs__input}
          {...register("email", { 
            required: "Это поле обязательное!",
            pattern: {
              message: "E-mail введен некорректно!",
              value: EMAIL_REGEX
            }
          })}
        />
        {errors && errors.email && <p style={{color: "red"}}>{errors.email.message}</p>}
        <textarea
          defaultValue=""
          placeholder="Ваше сообщение/вопрос"
          className={styles.contactInputs__input}
          {...register("message", { 
            required: "Это поле обязательное!",
          })}
        />
        {errors && errors.message && <p style={{color: "red"}}>{errors.message.message}</p>}
      </div>
      
      <div className={styles.checkboxWrapper}>
        <Checkbox />
      </div>

      <MyButton btnClassName={styles.submitButton} color="primary" variant="contained" size="large">
        Отправить
      </MyButton>
    </form>
  );
});

export default ContactForm;
