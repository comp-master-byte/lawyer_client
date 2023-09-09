import React from 'react';
import styles from "./error-text.module.scss";

const ErrorText: React.FC = () => {
    return (
        <p className={styles.errorText}>
            Для отправки запроса необходимо принять условия Политики конфиденциальности и Пользовательского соглашения
        </p>
    )
}

export default ErrorText;