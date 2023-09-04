import React from "react";
import styles from "./themes.module.scss";
import ThemeQuestion from "./components/themeQuestion/ThemeQuestion";
import SectionTitle from "shared/styled-components/SectionTitle/SectionTitle";
import line from "./assets/line.svg";

const Themes: React.FC = React.memo(function Themes() {
  return (
    <div className={styles.themesWrapper}>
      <SectionTitle>Категории и темы</SectionTitle>
        <div className={styles.themesContent}>
          <img src={line} className={styles.line} alt="" />
          <ThemeQuestion 
              question="Трудовое право" 
              questionType="blue" 
              questionClassName={styles.question__1} 
          />
          <ThemeQuestion 
              question={`Защита прав\nпотребителей`}
              questionType="orange" 
              questionClassName={styles.question__2} 
          />
          <ThemeQuestion 
            question="Семейное право" 
            questionType="blue" 
            questionClassName={styles.question__3} 
          />
          <ThemeQuestion 
            question={`Наследственное\nправо`}
            questionType="orange" 
            questionClassName={styles.question__4} 
          />

          <ThemeQuestion 
            question="Самозанятость" 
            questionType="orange" 
            questionClassName={styles.question__5} 
          />
          <ThemeQuestion 
            question={`Мобилизация и военная\nслужба по призыву`}
            questionType="blue" 
            questionClassName={styles.question__6} 
          />
          <ThemeQuestion 
            question={`Земельное\nправо`}
            questionType="blue" 
            questionClassName={styles.question__7} 
          />

          <ThemeQuestion 
            question={`Недвижимость`}
            questionType="blue" 
            questionClassName={styles.question__12} 
          />

          <ThemeQuestion 
            question={`Ипотека`}
            questionType="orange" 
            questionClassName={styles.question__8} 
          />
          <ThemeQuestion 
            question={`Страхование\n(включая\nавтострахование)`}
            questionType="blue" 
            questionClassName={styles.question__9} 
          />
          <ThemeQuestion 
            question={`Процедура\nрегистрации ИП\nи юрлиц`}
            questionType="orange" 
            questionClassName={styles.question__10} 
          />
          <ThemeQuestion 
            question={`Административная\nответственность`}
            questionType="orange" 
            questionClassName={styles.question__11} 
          />

          <ThemeQuestion 
            question={`Пенсионное\nобеспечение`}
            questionType="orange" 
            questionClassName={styles.question__20} 
          />
          <ThemeQuestion 
            question="Туризм"
            questionType="blue" 
            questionClassName={styles.question__21} 
          />
          <ThemeQuestion 
            question={`Налоговое\nправо`}
            questionType="orange" 
            questionClassName={styles.question__22} 
          />
          <ThemeQuestion 
            question={`Правовые аспекты \nкредитования`}
            questionType="blue" 
            questionClassName={styles.question__23} 
          />
          <ThemeQuestion 
            question={`Льготы отдельным\nкатегориям граждан`}
            questionType="orange" 
            questionClassName={styles.question__24} 
          />

        </div>
    </div>
  );
});

export default Themes;
