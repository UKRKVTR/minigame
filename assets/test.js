let gameEnd;

function game(n1, n2) {
  let answ = +prompt(`Сколько будет ${n1} умножить на ${n2}`);
  if ((res = n1 * n2 === answ)) {
    alert("Правильно");
    gameEnd = true;
  } else if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new TypeError("Введите число");
  } else {
    alert("Попробуй ещё раз");
  }
}
for (let i = 0; i < 3 && !gameEnd; i++) {
  game(
    (n1 = Math.trunc(Math.random() * 11)),
    (n2 = Math.trunc(Math.random() * 11))
  );
}
