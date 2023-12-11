import React, { useEffect, useState } from 'react';
import styles from "./lawyer-profile.module.scss";
import SectionTitle from '@/shared/styled-components/SectionTitle/SectionTitle';
import personSvg from "./assets/avatar.svg?url";
import MyButton from '@/shared/ui/MyButton/MyButton';
import ProfileKeyName from '@/entities/profile-key-name/profile-key-name';
import MyInput from '@/shared/ui/MyInput/MyInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '@/shared/constants/constants';
import { useTypedSelector } from '@/shared/lib/hooks/redux';
import TextArea from '@/shared/ui/MyInput/textarea';
import InputMask from '@/shared/ui/MyInput/input-mask';
import Edit from '@/features/edit-profile/api/Edit';
import EditPassword from '@/features/edit-profile/edit-password/edit-password';
import { useNavigate } from 'react-router-dom';

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
    const {register, handleSubmit, formState: {errors, isDirty}, reset, control} = useForm<EditProfileValues>();

    const navigate = useNavigate();

    const {user} = useTypedSelector(state => state.userSlice);

    const onSubmitEditedProfile: SubmitHandler<EditProfileValues> = async (data) => {
        return await Edit.editProfile(data);
    }

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
            <MyButton
                color='primary'
                variant='outlined'
                size='large'
                btnClassName={styles.goBackButton}
                onClick={() => navigate(-1)}
            >
                Назад
            </MyButton>
            <SectionTitle titleClassName={styles.title}>Профиль юриста</SectionTitle>

            <div className={styles.avatarSectionWrapper}>
                <article className={styles.avatarWrapper}>
                    <img src={personSvg} className={styles.avatarWrapper__img} alt="" />
                    <MyButton
                        color='primary'
                        variant='contained'
                        size='large'
                        btnClassName={styles.avatarWrapper__button}
                    >
                        Загрузить фото
                    </MyButton>
                </article>
            </div>

            <form onSubmit={handleSubmit(onSubmitEditedProfile)} className={styles.editLawyerProfileForm}>
                <div className={styles.editInputs}>
                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>ФИО</ProfileKeyName>
                        <MyInput 
                            variant='secondary'
                            inputClassName={styles.input}
                            register={register("full_name", {
                                required: "Это поле обязательное!"
                            })}
                        />
                    </div>
                    <div className={styles.inputWrapper}>
                        <ProfileKeyName variant='secondary'>Email</ProfileKeyName>
                        <MyInput 
                            variant='secondary'
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
                        <ProfileKeyName variant='secondary'>Дата рождения</ProfileKeyName>
                        <InputMask 
                            name='birthday'
                            variant='secondary'
                            mask='99.99.9999'
                            control={control}
                            inputClassName={styles.input}
                            validation={{
                                required: 'Это поле обязательное!'
                            }}
                        />
                    </div>

                    <EditPassword variant='secondary' />
                </div>

                <div className={styles.profileTextAreas}>
                    <TextArea 
                        labelClassName={styles.label}
                        label='Обо мне (Напишите несколько предложений о себе, чтобы заинтересовать потенциальных клиентов)'
                        variant='secondary'
                        inputClassName={styles.profileTextAreas__area}
                        register={register("about_lawyer", {
                            required: "Это поле обязательное!",
                        })}
                    />
                    <TextArea 
                        labelClassName={styles.label}
                        variant='secondary'
                        label='Образование и повышение квалификации'
                        inputClassName={styles.profileTextAreas__area}
                        register={register("education", {
                            required: "Это поле обязательное!",
                        })}
                    />
                    <TextArea 
                        labelClassName={styles.label}
                        label='Опыт работы'
                        variant='secondary'
                        inputClassName={styles.profileTextAreas__area}
                        register={register("experience", {
                            required: "Это поле обязательное!",
                        })}
                    />
                </div>

                {isDirty && 
                    <div className={styles.submitButton}>
                        <MyButton
                            color='secondary'
                            variant='contained'
                            size='large'
                            btnClassName={styles.button}
                        >
                            Сохранить изменения
                        </MyButton>

                        {Object.keys(errors).length ? <p className={styles.errorText}>Для верификации профиля требуется заполнить все поля</p> : <></>}
                    </div>
                }
            </form>
        </section>
    )
}

export default LawyerProfile; 