import React from "react";
import styles from "./ThemeQuestion.module.scss";
import classNames from "classnames";

interface ThemeQuestionProps {
  questionType: "orange"|"blue";
  question: string;
  questionClassName: string;
}

const ThemeQuestion: React.FC<ThemeQuestionProps> = React.memo(
  function ThemeQuestion({
    questionType,
    question,
    questionClassName
  }) {
    return (
      <div
        className={classNames(styles.questionWrapper, questionClassName, {
          [styles.orange]: questionType === "orange",
          [styles.blue]: questionType === "blue",
        })}
      >
        <p className={styles.questionText}>{question}</p>
        <div className={styles.questionIcon}>?</div>
      </div>
    );
  }
);

export default ThemeQuestion;
