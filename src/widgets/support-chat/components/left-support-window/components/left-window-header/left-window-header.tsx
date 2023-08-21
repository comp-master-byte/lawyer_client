import React from 'react';
import styles from "./left-window-header.module.scss";
import backArrowSvg from "../../../../assets/backArrow.svg";

const LeftWindowHeader: React.FC = () => {
    return (
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
    )
}

export default LeftWindowHeader;