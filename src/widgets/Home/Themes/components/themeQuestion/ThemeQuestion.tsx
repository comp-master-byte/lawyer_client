import React from "react";
import styles from "./ThemeQuestion.module.scss";
import classNames from "classnames";

interface ThemeQuestionProps {
  questionType: "orange"|"blue";
  question: string;
  questionClassName: string;
  // angle: number;
  // top?: number;
  // right?: number;
  // bottom?: number;
  // left?: number;
}

const ThemeQuestion: React.FC<ThemeQuestionProps> = React.memo(
  function ThemeQuestion({
    questionType,
    question,
    questionClassName
    // angle,
    // top,
    // right,
    // bottom,
    // left,
  }) {
    return (
      <div
        // style={{ transform: `rotate(${angle}deg)`, top, right, bottom, left }}
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
