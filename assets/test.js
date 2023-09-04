let gameEnd;

let gameChoise = +prompt("Выберете игру: 1 - умножение, 2 - угадай число");

function game(n1, n2) {
  let answer = +prompt(`Сколько будет ${n1} умножить на ${n2}`);
  if ((res = n1 * n2 === answer)) {
    alert("Правильно");
    gameEnd = true;
  } else if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new TypeError("Введите число");
  } else {
    alert("Попробуй ещё раз");
  }
}

function game2() {
  let x1 = Math.trunc(Math.random() * 11);
  let answ = +prompt(`я загадал число между ${x1 - 3} и ${x1 + 3}`);
  if (answ < x1 - 3 || answ > x1 + 3) {
    throw new RangeError("Вы не попали даже в диапозон");
  } else if (typeof answ !== "number") {
    throw new Error("Используйте числа");
  } else if (answ === x1) {
    alert(`Правильно!! ${x1}`);
    gameEnd = true;
  } else {
    alert(`Попробуй ещё`);
  }
}

if (gameChoise === 1) {
  for (let i = 0; i < 3 && !gameEnd; ++i) {
    game(
      (n1 = Math.trunc(Math.random() * 11)),
      (n2 = Math.trunc(Math.random() * 11))
    );
  }
} else if (gameChoise === 2) {
  for (let i = 0; i < 3 && !gameEnd; i++) {
    game2();
  }
} else {
  alert("Данная игра в розработке");
}
