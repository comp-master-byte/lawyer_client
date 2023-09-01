import React from 'react';
import styles from "./loader.module.scss";
import classNames from 'classnames';

interface LoaderProps {
    loaderWrapperClassName?: string;
}

const Loader: React.FC<LoaderProps> = ({loaderWrapperClassName}) => {
    return (
        <div className={classNames(styles.loaderWrapper, loaderWrapperClassName)}>
            <div className={styles.loader}>Юра загружается...</div>
        </div>
    )
}

export default Loader;