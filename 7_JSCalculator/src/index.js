// <⚠️ /DONT DELETE THIS ⚠️>

const input = document.querySelector("input");
const initButton = document.querySelector(".init");
const numButton = document.querySelectorAll(".number");
const operationButton = document.querySelectorAll("#operator");

/* buttonType */
const OPERATION = 0;
const NUMBER = 1;

/* Operation Type */
const INIT = -1;
const PLUS = 11;
const MINUS = 12;
const MULTIPLY = 13;
const DEVIDE = 14;
const EQUAL = 15;

let currentNumber = 0;
let clickedButton = OPERATION;
let preButton = INIT;

function handleInitClicked(event) {
  event.preventDefault();
  input.value = "0";
  currentNumber = input.value;
  clickedButton = OPERATION;
  preButton = INIT;
}

function doPlus() {
  currentNumber = parseInt(currentNumber) + parseInt(input.value);
  input.value = currentNumber;
}
function doMinus() {
  currentNumber = parseInt(currentNumber) - parseInt(input.value);
  input.value = currentNumber;
}
function doMultiply() {
  currentNumber = parseInt(currentNumber) * parseInt(input.value);
  input.value = currentNumber;
}
function doDevide() {
  currentNumber = parseInt(currentNumber) / parseInt(input.value);
  input.value = currentNumber;
}
function doOperator() {
  if (clickedButton === NUMBER)
    if (preButton === PLUS) {
      doPlus();
    } else if (preButton === MULTIPLY) {
      doMultiply();
    } else if (preButton === DEVIDE) {
      doDevide();
    } else if (preButton === MINUS) {
      doMinus();
    }
}
function handleOperatorClicked(event, preOperator) {
  event.preventDefault();
  doOperator();
  currentNumber = input.value;
  if (preOperator === "plus") {
    preButton = PLUS;
  } else if (preOperator === "minus") {
    preButton = MINUS;
  } else if (preOperator === "multiply") {
    preButton = MULTIPLY;
  } else if (preOperator === "devide") {
    preButton = DEVIDE;
  } else if (preOperator === "equal") {
    preButton = EQUAL;
  }
  clickedButton = OPERATION;
}

function handleNumClicked(event, clickedNum) {
  event.preventDefault();
  clickedButton === OPERATION
    ? (input.value = clickedNum)
    : (input.value += clickedNum);
  clickedButton = NUMBER;
}
initButton.addEventListener("click", handleInitClicked);

operationButton.forEach(function(button) {
  button.addEventListener("click", function(event) {
    handleOperatorClicked(event, button.classList.value);
  });
});
numButton.forEach(function(button) {
  button.addEventListener("click", function(event) {
    handleNumClicked(event, button.innerText);
  });
});
