import React, { useEffect, useState } from 'react';
import styles from "./lawyer-profile.module.scss";
import SectionTitle from 'shared/styled-components/SectionTitle/SectionTitle';
import personSvg from "./assets/avatar.svg";
import MyButton from 'shared/ui/MyButton/MyButton';
import ProfileKeyName from 'entities/profile-key-name/profile-key-name';
import MyInput from 'shared/ui/MyInput/MyInput';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from 'shared/constants/constants';
import { useTypedSelector } from 'shared/lib/hooks/redux';
import TextArea from 'shared/ui/MyInput/textarea';

interface EditProfileValues {
    full_name: string;
    email: string;
    birthday: string;
    about_lawyer: string;
    education: string;
    experience: string;
    password: string;
}

const LawyerProfile: React.FC = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<EditProfileValues>();

    const {user} = useTypedSelector(state => state.userSlice);

    const [isEditLawyer, setIsEditLawyer] = useState(false);

    useEffect(() => {
        reset({
            full_name: user?.full_name,
            email: user?.email,
            birthday: user?.birthday,
            about_lawyer: user?.about_lawyer as string,
            education: user?.education as string,
            experience: user?.experience as string
        })
    }, [user])

    return (
        <section className={styles.profileWrapper}>
            <SectionTitle titleClassName={styles.title}>Профиль юриста</SectionTitle>

            <div className={styles.avatarSectionWrapper}>
                <article className={styles.avatarWrapper}>
                    <img src={personSvg} className={styles.avatarWrapper__img} alt="" />
                    <MyButton
                        color='secondary'
                        variant='contained'
                        size='large'
                        btnClassName={styles.avatarWrapper__button}
                    >
                        Редактировать профиль
                    </MyButton>
                </article>
            </div>

            <form className={styles.editLawyerProfileForm}>
                <div className={styles.editInputs}>
                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>ФИО</ProfileKeyName>
                        <MyInput 
                            disabled={!isEditLawyer}
                            variant='secondary'
                            error={errors.full_name}
                            inputClassName={styles.input}
                            register={register("full_name", {
                                required: "Это поле обязательное!"
                            })}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>Email</ProfileKeyName>
                        <MyInput 
                            disabled={!isEditLawyer}
                            variant='secondary'
                            error={errors.email}
                            inputClassName={styles.input}
                            register={register("email", {
                                required: "Это поле обязательное!",
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: "Email введен некорректно"
                                }
                            })}
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>Возраст</ProfileKeyName>
                        <MyInput 
                            disabled={!isEditLawyer}
                            variant='secondary'
                            error={errors.birthday}
                            inputClassName={styles.input}
                            register={register("birthday", {
                                required: "Это поле обязательное!",
                            })}
                        />
                    </div>

                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>Пароль</ProfileKeyName>
                        <MyButton 
                            color='primary'
                            variant='contained'
                            size='large'
                            btnClassName={styles.passwordButton}
                        >Изменить</MyButton>
                    </div>
                </div>

                <div className={styles.profileTextAreas}>
                    <TextArea 
                        labelClassName={styles.label}
                        label='Обо мне (Напишите несколько предложений о себе, чтобы заинтересовать потенциальных клиентов)'
                        variant='secondary'
                        disabled={!isEditLawyer}
                        error={errors.about_lawyer}
                        inputClassName={styles.profileTextAreas__area}
                        register={register("about_lawyer", {
                            required: "Это поле обязательное!",
                        })}
                    />
                    <TextArea 
                        labelClassName={styles.label}
                        variant='secondary'
                        label='Образование и повышение квалификации'
                        disabled={!isEditLawyer}
                        error={errors.education}
                        inputClassName={styles.profileTextAreas__area}
                        register={register("education", {
                            required: "Это поле обязательное!",
                        })}
                    />
                    <TextArea 
                        labelClassName={styles.label}
                        label='Опыт работы'
                        variant='secondary'
                        disabled={!isEditLawyer}
                        error={errors.experience}
                        inputClassName={styles.profileTextAreas__area}
                        register={register("experience", {
                            required: "Это поле обязательное!",
                        })}
                    />
                </div>

                <div className={styles.submitButton}>
                    <MyButton
                        color='secondary'
                        variant='contained'
                        size='large'
                        btnClassName={styles.button}
                    >Сохранить изменения</MyButton>
                </div>
            </form>
        </section>
    )
}

export default LawyerProfile; 