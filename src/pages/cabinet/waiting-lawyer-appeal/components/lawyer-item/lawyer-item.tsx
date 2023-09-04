import React from 'react';
import styles from "./lawyer-item.module.scss";
import personSvg from "../../assets/person.svg";
import MyButton from 'shared/ui/MyButton/MyButton';
import classNames from 'classnames';

const LawyerItem: React.FC = () => {
    return (
        <div className={styles.interestedLawyerItem}>
            <div className={styles.lawyerProfileImgWrapper}>
                <div className={styles.lawyerProfileImg}>
                    <img src={personSvg} className={styles.personImg} alt="" />
                    <div className={styles.profileText}>
                        Профиль
                    </div>
                </div>
            </div>

            <div className={styles.lawyerDataWrapper}>
                <p className={styles.lawyerDataWrapper__fio}>Иванов Иван Александрович</p>
                <p className={styles.lawyerDataWrapper__age}>35 лет</p>
            </div>

            <div className={styles.lawyerPriceWrapper}>
                <p className={styles.lawyerPriceWrapper__text}>Стоимость</p>
                <p className={styles.lawyerPriceWrapper__text}>3 000 руб</p>
            </div>

            <div className={styles.timeToComplete}>
                <p className={styles.timeToComplete__time}>Срок выполнения</p>
                <p className={styles.timeToComplete__text}>0 дн 10 ч</p>
            </div>

            <div className={styles.lawyerButtons}>
                <MyButton
                    color='primary'
                    variant='contained'
                    btnClassName={classNames(styles.button, styles.lawyerAnswerButton)}
                >
                    Посмотреть отклик
                </MyButton>

                <MyButton
                    color='secondary'
                    variant='contained'
                    btnClassName={classNames(styles.button, styles.lawyerSelectButton)}
                >
                    Выбрать
                </MyButton>
            </div>
        </div>
    )
}

export default LawyerItem;