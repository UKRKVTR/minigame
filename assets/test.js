function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}

let gameEnd;

let gameChoise = +prompt(
  "Выберете игру: 1 - умножение, 2 - угадай число, 3 - угадай слово"
);

function game() {
  let n1 = randomInteger(1, 10);
  let n2 = randomInteger(1, 10);
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
  let x1 = randomInteger(1, 10);
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

function game3() {
  const words = ["Кот", "Дисперсия", "Олег"];
  let randomIndex = randomInteger(0, 2);
  const guess = words[randomIndex];
  const firstLatters = guess[0];
  let underscores = "_ ".repeat(guess.length);
  let userAnsw = prompt(`Guess a word: ${underscores}`);

  for (let lives = 6; lives < 0 && !gameEnd; lives--) {
    if (userAnsw === guess) {
      alert(`Правильно это слово ${guess} `);
      gameEnd = true;
    } else if (i === 6 && !gameEnd) {
      alert(`Вы проиграли( \n слово было ${guess}`);
    } else {
      userAnsw = prompt(
        `Guess a word: ${underscores} \n у вас осталось ${lives} \n первая буква ${firstLatters}`
      );
    }
    console.log(guess);
  }
}

function menu(gameChoise) {
  if (gameChoise === 1) {
    for (let i = 0; i < 3 && !gameEnd; ++i) {
      game();
    }
  } else if (gameChoise === 2) {
    for (let i = 0; i < 3 && !gameEnd; i++) {
      game2();
    }
  } else if (gameChoise === 3) {
    game3();
  } else {
    alert("Данная игра в розработке");
  }
}
menu(gameChoise);
