import React from 'react';
import styles from "./empty-chat.module.scss";

const EmptyChat: React.FC = () => {
    return (
        <section className={styles.emptyChatWrapper}>
            Выберите чат, чтобы продолжить переписку
        </section>
    )
}

export default EmptyChat;