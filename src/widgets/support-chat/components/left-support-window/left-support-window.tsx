import React from 'react';
import styles from "./left-support-window.module.scss";
import backArrowSvg from "../../assets/backArrow.svg";
import logoSvg from "../../assets/logo.svg";

const LeftSupportWindow: React.FC = () => {
    return (
        <section className={styles.leftSupportChatWindow}>
            <header className={styles.leftWindowHeader}>
                <button className={styles.leftWindowHeader__startBegin}>
                    Начать сначала
                </button>
                <div className={styles.backToPrevQuestion}>
                    <img src={backArrowSvg} alt='' />
                    <p className={styles.backToPrevQuestion__text}>
                        вернуться <br /> к предыдущему <br /> вопросу
                    </p>
                </div>
            </header>

            <div className={styles.mainLeftWindowContent}>
                <img src={logoSvg} alt='' />
                <h3 className={styles.contentMainTitle}>
                    Приветствую! <br />
                    Меня зовут Юра. <br /> 
                    Я твой  юридический помощник.
                </h3>
                <p className={styles.contentHelperText}>
                    Постараюсь помочь тебе разобраться в проблеме из области права. Выбери юридическую область, к которой относится твой вопрос.
                </p>
            </div>
        </section>
    )
}

export default LeftSupportWindow;