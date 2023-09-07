import React from 'react';
import styles from "./lawyer-profile.module.scss";
import EmptyPlaceholder from 'entities/empty-placeholder/empty-placeholder';
import SectionTitle from 'shared/styled-components/SectionTitle/SectionTitle';

const LawyerProfile: React.FC = () => {
    return (
        <section className={styles.profileWrapper}>
            <SectionTitle titleClassName={styles.title}>Профиль юриста</SectionTitle>
        </section>
    )
}

export default LawyerProfile; 