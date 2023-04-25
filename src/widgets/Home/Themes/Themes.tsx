import React from "react";
import styles from "./Themes.module.scss";
import ThemeQuestion from "./components/themeQuestion/ThemeQuestion";
import { questions } from "./lib/mocks/questions";

const Themes: React.FC = React.memo(function Themes() {
  return (
    <div className={styles.themesWrapper}>
      <h1 className={styles.themesWrapper__title}>Категории и темы</h1>
      <div className={styles.container}>
        <div className={styles.themesContent}>
          {questions.map((question) => (
            <ThemeQuestion {...question} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Themes;
