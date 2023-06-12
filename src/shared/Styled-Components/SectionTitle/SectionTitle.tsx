import React from 'react';
import styles from "./SectionTitle.module.scss";
import classNames from 'classnames';

interface SectionTitleProps {
    children: React.ReactNode;
    titleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({children, titleClassName}) => {
    return (
        <h2 className={classNames(styles.sectionTitle, titleClassName)}>{children}</h2>
    )
}

export default SectionTitle