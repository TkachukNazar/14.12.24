const phrases = [
  "Я хочу розмовляти про JavaScript!",
  "Масиви в JavaScript схожі на об'єкти",
  "JavaScript має багато методів для роботи з рядком",
  "JavaScript - об'єктно-оріентована мова програмування",
  "З Вами дуже приємно спілкуватися!",
];

const goodBye = "До побачення, радий був поспілкуватися!";
let str;
alert("Добрий день.");
while (true) {
  str = prompt("Ваше запитання").toLowerCase();
  if (str.search("до побачення") != -1 || str === "!" || str === "" || !str) {
    alert(goodBye);
    break;
  } else if (str.search("javascript") != -1) {
    alert(phrases[Math.floor(Math.random() * 4) + 1]);
  } else {
    alert(phrases[0]);
  }
}
