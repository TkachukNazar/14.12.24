let now = new Date();
let day = now.getDay();
let arr = [
  "понеділок",
  "вівторок",
  "середа",
  "четвер",
  "п'ятниця",
  "субота",
  "неділя",
];
document.write(
  `Сьогодні ${now.getDate()}.${
    now.getMonth() + 1
  }.${now.getFullYear()}, день тижня - ${arr[day - 1]}.`
);
