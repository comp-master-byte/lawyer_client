import React from 'react';
import styles from "./support-bot.module.scss";
import botButtonSvg from "./assets/bot.svg";

const SupportBot: React.FC = () => {
    return (
        <div>
            <div className={styles.botButton}>
                <img src={botButtonSvg} alt="" />
            </div>
        </div>
    )
}

export default SupportBot;