import React from 'react';
import styles from "./lawyers-list.module.scss";
import LawyerItem from '../lawyer-item/lawyer-item';

interface LawyersListProps {
    interestedLawyers: any[];
}

const LawyersList: React.FC<LawyersListProps> = ({interestedLawyers}) => {
    return (
        <div className={styles.lawyersList}>
            {interestedLawyers?.map((item) => 
                <LawyerItem key={item.id} interestedLawyer={item} />
            )}
        </div>
    )
}

export default LawyersList;