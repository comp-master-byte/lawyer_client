import React from 'react';
import styles from "./waiting-lawyer-appeal.module.scss";
import { useParams } from 'react-router-dom';

const WaitingLawyerAppeal: React.FC = () => {
    const {id} = useParams();

    return (
        <div>WaitingLawyerAppeal: React.FC</div>
    )
}

export default WaitingLawyerAppeal;