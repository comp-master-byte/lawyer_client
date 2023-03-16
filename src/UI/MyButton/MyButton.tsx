import classNames from "classnames";
import { FC } from "react";
import styles from "./MyButton.module.scss";

interface MyButtonProps {
  color: string;
  variant: string;
  size?: string;
  children?: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({
  color,
  variant,
  size,
  children,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.myButton, {
        [styles.primaryContained]:
          color === "primary" && variant === "contained",
        [styles.primaryOutlined]: color === "primary" && variant === "outlined",
        [styles.large]: size === "large",
        [styles.small]: size === "small",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
