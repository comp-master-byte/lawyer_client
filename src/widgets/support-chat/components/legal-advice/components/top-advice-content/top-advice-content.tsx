import React from 'react';
import styles from "./top-advice-content.module.scss";
import logoSvg from "../../../../assets/logo.svg";
import closeSvg from "../../../../assets/close.svg";
import backBlueArrowSvg from "../../../../assets/backBlueArrow.svg";

interface TopAdviceContentProps {
    closeLegalAdviceModal: () => void;
    backToChatCallback: () => void;
}

const TopAdviceContent: React.FC<TopAdviceContentProps> = ({closeLegalAdviceModal, backToChatCallback}) => {
    return (
        <div className={styles.topAdviceContent}>
            <div className={styles.topLeftColumnContent}>
                    <img src={logoSvg} alt="" />
                <div className={styles.topLeftContentText}>
                    <h3 className={styles.topLeftContentTitle}>Задай свой вопрос юристу</h3>
                    <p className={styles.topLeftContentParagraph}>
                        Твой вопрос будет отправлен всем нашим юристам, и среди откликнувшихся на твой запрос ты сможешь выбрать понравившегося тебе специалиста в твоем личном кабинете, который создается вместе с заявкой.
                    </p>
                </div>
            </div>
            <div className={styles.topRightNavigationButtons}>
                <div className={styles.backToSupportChat} onClick={backToChatCallback}>
                    <img src={backBlueArrowSvg} alt="" />
                    <p className={styles.backToSupportChat__text}>Вернуться <br />назад</p>
                </div>
                <div className={styles.closeSvgButton} onClick={closeLegalAdviceModal}>
                    <img src={closeSvg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default TopAdviceContent;