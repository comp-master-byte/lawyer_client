import React, { FC } from "react";
import styles from "./ThemeQuestion.module.scss";
import classNames from "classnames";

interface ThemeQuestionProps {
  questionType: string;
  question: string;
  angle: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const ThemeQuestion: FC<ThemeQuestionProps> = ({
  questionType,
  question,
  angle,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      style={{ transform: `rotate(${angle}deg)`, top, right, bottom, left }}
      className={classNames(styles.questionWrapper, {
        [styles.orange]: questionType === "orange",
        [styles.blue]: questionType === "blue",
      })}
    >
      <p className={styles.questionText}>{question}</p>
      <div className={styles.questionIcon}>?</div>
    </div>
  );
};

export default ThemeQuestion;
