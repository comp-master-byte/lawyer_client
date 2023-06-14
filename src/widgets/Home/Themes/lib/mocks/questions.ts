interface Question {
  id: number;
  question: string;
  questionType: string;
  angle: number;
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Трудовое право",
    questionType: "blue",
    angle: 5,
    left: 38,
    top: 29,
  },
  {
    id: 2,
    question: "Защита прав\nпотребителей",
    questionType: "orange",
    angle: -11,
    left: 376,
    top: 38,
  },
  {
    id: 3,
    question: "Семейное право",
    questionType: "blue",
    angle: 0,
    right: 366,
    top: 32,
  },
  {
    id: 4,
    question: "Наследственное\nправо",
    questionType: "orange",
    angle: 9,
    right: 14,
    top: 60,
  },

  {
    id: 5,
    question: "Самозанятость",
    questionType: "orange",
    angle: 4,
    left: 21,
    top: 125,
  },
  {
    id: 6,
    question: "Недвижимость",
    questionType: "blue",
    angle: -2,
    left: 256,
    top: 220,
  },
  {
    id: 7,
    question: "Мобилизация и военная\nслужба по призыву",
    questionType: "blue",
    angle: -3,
    right: 393,
    top: 140,
  },
  {
    id: 8,
    question: "Земельное\nправо",
    questionType: "blue",
    angle: -4,
    right: 100,
    top: 190,
  },

  {
    id: 8,
    question: "Ипотека",
    questionType: "orange",
    angle: -6,
    left: 30,
    top: 285,
  },
  {
    id: 9,
    question: "Страхование\n(включая\nавтострахование)",
    questionType: "blue",
    angle: -5,
    left: 255,
    top: 310,
  },
  {
    id: 10,
    question: "Процедура\nрегистрации ИП\nи юрлиц",
    questionType: "orange",
    angle: -4.69,
    top: 260,
    right: 433,
  },
  {
    id: 11,
    question: "Административная\nотвественность",
    questionType: "orange",
    angle: 7,
    right: 36,
    top: 330,
  },
  {
    id: 20,
    question: "Пенсионное\nобеспечение",
    questionType: "orange",
    angle: 5,
    left: 10,
    bottom: 145,
  },
  {
    id: 21,
    question: "Туризм",
    questionType: "blue",
    angle: 0,
    left: 256,
    bottom: 54,
  },
  {
    id: 22,
    question: "Налоговое\nправо",
    questionType: "orange",
    angle: 8,
    left: 455,
    bottom: 115,
  },
  {
    id: 23,
    question: "Правовые аспекты \nкредитования",
    questionType: "blue",
    angle: 3,
    right: 300,
    bottom: 157,
  },
  {
    id: 24,
    question: "Льготы отдельным\nкатегориям граждан",
    questionType: "orange",
    angle: -6,
    right: 42,
    bottom: 50,
  },
];
