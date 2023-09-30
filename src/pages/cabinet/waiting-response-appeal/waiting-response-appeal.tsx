import React from 'react';
import styles from "./waiting-response-appeal.module.scss";
import { useParams } from 'react-router-dom';

const WaitingResponseAppeal: React.FC = () => {
    const {appealId} = useParams();

    return (
        <div>WaitingResponseAppeal {appealId}</div>
    )
}

export default WaitingResponseAppeal;