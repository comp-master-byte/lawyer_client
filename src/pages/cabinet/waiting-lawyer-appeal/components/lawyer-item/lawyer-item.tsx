import React from 'react';
import styles from "./lawyer-item.module.scss";
import personSvg from "../../assets/person.svg";
import MyButton from 'shared/ui/MyButton/MyButton';
import classNames from 'classnames';
import LawyerResponseModal from './components/lawyer-response-modal/lawyer-response-modal';
import { InterestedLawyer } from '../../model/types';
import SelectLawyerModal from './components/select-lawyer-modal/select-lawyer-modal';
import { useLawyerItem } from '../../lib/hooks/useLawyerItem';

interface LawyerItemProps {
    interestedLawyer: InterestedLawyer;
}

const LawyerItem: React.FC<LawyerItemProps> = ({interestedLawyer}) => {
    const {
        isLawyerResponseModalVisible,
        isSelectLawyerModalVisible,
        closeLawyerResponseModal,
        closeSelectLawyerModal,
        openLawyerResponseModal,
        openSelectLawyerModal,
    } = useLawyerItem();


    return (
        <div className={styles.interestedLawyerItemWrapper}>

            <LawyerResponseModal 
                closeLawyerResponse={closeLawyerResponseModal}
                isLawyerResponseVisible={isLawyerResponseModalVisible}
                openConfirmationModal={openSelectLawyerModal}
                interestedLawyer={interestedLawyer}
            />

            <SelectLawyerModal 
                closeModal={closeSelectLawyerModal}
                isModalVisible={isSelectLawyerModalVisible}
                interestedLawyerId={interestedLawyer.lawyer.id}
            />

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
                    <p className={styles.lawyerDataWrapper__fio}>{interestedLawyer.lawyer.full_name}</p>
                    <p className={styles.lawyerDataWrapper__age}>35 лет</p>
                </div>

                <div className={styles.lawyerPriceWrapper}>
                    <p className={styles.lawyerPriceWrapper__text}>Стоимость</p>
                    <p className={styles.lawyerPriceWrapper__text}>{interestedLawyer.cost} руб</p>
                </div>

                <div className={styles.timeToComplete}>
                    <p className={styles.timeToComplete__time}>Срок выполнения</p>
                    <p className={styles.timeToComplete__text}>0 дн 10 ч</p>
                </div>

                <div className={styles.lawyerButtons}>
                    <MyButton
                        color='primary'
                        variant='contained'
                        onClick={openLawyerResponseModal}
                        btnClassName={classNames(styles.button, styles.lawyerAnswerButton)}
                    >
                        Посмотреть отклик
                    </MyButton>

                    <MyButton
                        color='secondary'
                        variant='contained'
                        btnClassName={classNames(styles.button, styles.lawyerSelectButton)}
                        onClick={openSelectLawyerModal}
                    >
                        Выбрать
                    </MyButton>
                </div>
            </div>
        </div>
    )
}

export default LawyerItem;