import classNames from "classnames";
import { FC } from "react";
import styles from "./MyButton.module.scss";

interface MyButtonProps {
  color: "primary"|"secondary";
  variant: "contained"|"outlined";
  size?: "large"|"small";
  children?: React.ReactNode;
  btnClassName?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({
    color,
    variant,
    size,
    children,
    btnClassName,
    disabled,
    ...props
}) => {
  return (
    <button
      className={classNames(styles.myButton, btnClassName, {
        [styles.primaryContained]:
          color === "primary" && variant === "contained",
        [styles.primaryOutlined]: color === "primary" && variant === "outlined",
        [styles.secondaryContained]:
          color === "secondary" && variant === "contained",
        [styles.large]: size === "large",
        [styles.small]: size === "small",
        [styles.disabled]: disabled
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
