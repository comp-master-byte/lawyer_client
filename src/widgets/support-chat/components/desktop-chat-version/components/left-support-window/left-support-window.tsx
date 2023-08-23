import React from 'react';
import styles from "./left-support-window.module.scss";
import logoSvg from "widgets/support-chat/assets/logo.svg";
import { useTypedSelector } from 'shared/lib/hooks/redux';
import LeftWindowHeader from './components/left-window-header/left-window-header';
import StaticContent from './components/static-content/static-content';

const LeftSupportWindow: React.FC = () => {
    const {data} = useTypedSelector(state => state.supportChatSlice);

    return (
        <section className={styles.leftSupportChatWindow}>
            <LeftWindowHeader />
            <div className={styles.mainLeftWindowContent}>
                <div className={styles.leftWindowLogo}>
                    <img src={logoSvg} alt='' />
                </div>
                {data?.node_id === 1 
                    ? <StaticContent />
                    : <p className={styles.contentHelperText}>{data?.message}</p>
                }
            </div>
        </section>
    )
}

export default LeftSupportWindow;