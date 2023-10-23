import React from 'react';
import styles from "./right-chain-header.module.scss";
import closeSvg from "shared/assets/close.svg";

interface RightChainHeaderProps {
    closeModal: () => void;
}

const RightChainHeader: React.FC<RightChainHeaderProps> = ({closeModal}) => {
    return (
        <div className={styles.rightChainWrapper}>
            <h3 className={styles.title}>Наталья П. выбрал(а)</h3>
            <img className={styles.img} onClick={closeModal} src={closeSvg} alt="" />
        </div>
    )
}

export default RightChainHeader;