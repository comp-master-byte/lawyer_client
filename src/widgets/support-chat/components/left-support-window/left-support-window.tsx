import React from 'react';
import styles from "./left-support-window.module.scss";
import logoSvg from "../../assets/logo.svg";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import LeftWindowHeader from './components/left-window-header/left-window-header';

const LeftSupportWindow: React.FC = () => {
    const {data} = useTypedSelector(state => state.supportChatSlice);

    return (
        <section className={styles.leftSupportChatWindow}>
            <LeftWindowHeader />

            <div className={styles.mainLeftWindowContent}>
                <img src={logoSvg} alt='' />
                {data?.node_id === 1 
                    ? 
                        <React.Fragment>
                            <h3 className={styles.contentMainTitle}>
                                Приветствую! <br />
                                Меня зовут Юра. <br /> 
                                Я твой  юридический помощник.
                            </h3>
                            <p className={styles.contentHelperText}>
                                Постараюсь помочь тебе разобраться в проблеме из области права. Выбери юридическую область, к которой относится твой вопрос.
                            </p>
                        </React.Fragment>

                    : <p className={styles.contentHelperText}>{data?.message}</p>
                }
            </div>
        </section>
    )
}

export default LeftSupportWindow;