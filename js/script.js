const remainingWord = document.querySelector(".remaining");
const input = document.querySelector(".letter");
const guessBtn = document.querySelector(".guess");
const resetBtn = document.querySelector(".play-again");
const form = document.querySelector(".guess-form");
const displayCorrectWord = document.querySelector(".word-in-progress");
let word,
  newWord,
  counter = 8;
const displayDot = () => {
  let things = ["DARSHAN", "PAPER", "TOM", "UIO", "TONY",'aaaaa'];
  word = things[Math.floor(Math.random() * things.length)];
  word = word.split("");
  newWord = word.map((e) => (e = "🔵"));
  displayCorrectWord.innerHTML = newWord.join(" ");
};
const checkCharacter = (inputValue) => {
  counter -= 1;

  remainingWord.innerHTML = `You have <span>${counter} guesses</span> remaining.`;
  if (!inputValue) return;
  if (inputValue.length > 1) {
    console.log("one word allowed");
    inputValue = inputValue[0];
    console.log(inputValue);
  }

  if (word.includes(inputValue)) {
    let correctWord = word.indexOf(inputValue);
    word.splice(correctWord, 1, "*");
    newWord[correctWord] = inputValue;
    displayCorrectWord.innerHTML = newWord.join("");
    console.log(newWord);
    console.log(word);
  }
  if (counter <= 0) {
    remainingWord.innerHTML = `You Lose The Game`;
  }
  if (!newWord.includes("*") && !newWord.includes("🔵")) {
    remainingWord.innerHTML = `You Win The Game`;
  }
};

const guessword = (e) => {
  e.preventDefault();
  let value = input.value;
  value = value.toUpperCase();
  checkCharacter(value);
};

function init() {
  guessBtn.addEventListener("click", guessword);

  displayDot();
}

init();
