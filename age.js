function birthDateToAge(b) {
  let n = new Date();
  b = new Date(b);
  age = n.getFullYear() - b.getFullYear();
  let n_2000 = n.setFullYear(2000);
  let b_2000 = b.setFullYear(2000);
  if (n_2000 < b_2000) age -= 1;
  let n_m = n.getMonth();
  let b_m = b.getMonth();
  let months;
  if (n_m < b_m) {
    age -= 1;
    months = 12 - (b_m - n_m);
  } else months = n_m - b_m;
  let str = `Вам ${age} `;
  age % 10 == 1 && age != 11
    ? (str += "рік")
    : age % 10 <= 4 && age % 10 >= 2 && (age > 15 || age < 10)
    ? (str += "роки")
    : (str += "років");
  if (months != 0) {
    str += ` і ${months} `;
    months == 1
      ? (str += "місяць")
      : months >= 2 && months <= 4
      ? (str += "місяці")
      : (str += "місяців");
  }
  return str;
}
document.write(
  birthDateToAge(prompt("Ведіть дату народження виду Рік-місяць-число: "))
);
