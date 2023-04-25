import React from "react";
import styles from "./ContactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import MyInput from "../../shared/UI/MyInput/MyInput";
import MyButton from "../../shared/UI/MyButton/MyButton";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = React.memo(function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <div className={styles.contactInputs}>
        <input
          defaultValue=""
          placeholder="Имя"
          className={styles.contactInputs__input}
          {...register("name", { required: "Это поле обязательное!" })}
        />
        <input
          defaultValue=""
          placeholder="E-mail"
          className={styles.contactInputs__input}
          {...register("email", { required: "Это поле обязательное!" })}
        />
        <textarea
          defaultValue=""
          placeholder="Ваше сообщение/вопрос"
          className={styles.contactInputs__input}
          {...register("message", { required: "Это поле обязательное!" })}
        />
      </div>

      <p className={styles.contactParagraph}>
        Нажимая на кнопку &quot;отправить&quot; вы соглашаетесь с{" "}
        <span>политикой конфиденциальности</span>
      </p>

      <MyButton color="primary" variant="contained" size="large">
        Отправить
      </MyButton>
    </form>
  );
});

export default ContactForm;
