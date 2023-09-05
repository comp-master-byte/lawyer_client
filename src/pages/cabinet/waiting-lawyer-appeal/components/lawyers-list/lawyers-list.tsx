import React from 'react';
import styles from "./lawyers-list.module.scss";
import LawyerItem from '../lawyer-item/lawyer-item';
import { InterestedLawyer } from '../../model/types';

interface LawyersListProps {
    interestedLawyers: InterestedLawyer[];
}

const LawyersList: React.FC<LawyersListProps> = ({interestedLawyers}) => {
    return (
        <div className={styles.lawyersList}>
            {interestedLawyers?.map((item) => 
                <LawyerItem key={item.lawyer.id} interestedLawyer={item} />
            )}
        </div>
    )
}

export default LawyersList;