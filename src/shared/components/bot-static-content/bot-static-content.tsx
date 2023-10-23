import React from 'react';
import styles from "./bot-static-content.module.scss";

const BotStaticContent: React.FC = () => {
    return (
        <div className={styles.staticContentWrapper}>
            <h3 className={styles.contentMainTitle}>
                Приветствую! <br />
                Меня зовут Юра. <br /> 
                Я твой  юридический помощник.
            </h3>
            <p className={styles.contentHelperText}>
                Постараюсь помочь тебе разобраться в проблеме из области права. Выбери юридическую область, к которой относится твой вопрос.
            </p>
        </div>
    )
}

export default BotStaticContent;