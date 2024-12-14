const arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привіт світ",
  "Я несу гусеня",
  "Де помити мопед?",
  "Козак з казок",
];

function checkPalindrom(arr) {
  let palindroms1 = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(
      arr[i].toLowerCase().replaceAll(" ", "").split("").join("") ==
        arr[i]
          .toLowerCase()
          .replaceAll(" ", "")
          .replaceAll("?", "")
          .split("")
          .reverse()
          .join("")
    );
    if (
      arr[i]
        .toLowerCase()
        .replaceAll(" ", "")
        .replaceAll("?", "")
        .split("")
        .join("") ==
      arr[i]
        .toLowerCase()
        .replaceAll(" ", "")
        .replaceAll("?", "")
        .split("")
        .reverse()
        .join("")
    ) {
      palindroms1.push(arr[i]);
    }
  }
  return palindroms1;
}
let palindroms = checkPalindrom(arr);
console.log(palindroms);
for (let i = 0; i < palindroms.length; i++) {
  alert(palindroms[i]);
}
