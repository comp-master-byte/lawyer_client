import React from 'react';
import styles from "./lawyer-on-verification.module.scss";

const LawyerOnVerification: React.FC = () => {
    return (
        <div className={styles.verification}>
            Ваш профиль в процессе верификации. Как только мы его одобрим, напишем на вашу почту, и вам откроется возможность просматривать заявки и откликаться на них.
        </div>
    )
}

export default LawyerOnVerification;