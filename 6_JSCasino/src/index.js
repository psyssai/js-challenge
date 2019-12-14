// <⚠️ /DONT DELETE THIS ⚠️>
const rangeForm = document.querySelector(".rangeForm"),
  rangeInput = rangeForm.querySelector(".rangeInput");

const numberForm = document.querySelector(".numberForm"),
  numberInput = numberForm.querySelector(".numberInput"),
  numberButton = numberForm.querySelector(".numberButton");

const informDiv = document.querySelector(".informDiv");
const resultDiv = document.querySelector(".resultDiv");
const h3Text = document.querySelector("h3");

let maxNumber = 10;

function handleChangeRangeInput() {
  maxNumber = this.value;
  h3Text.innerText = `Generate a number between 0 and ${maxNumber}`;
  numberInput.max = maxNumber;
}

function setInform(chosedNumber, randomNumber) {
  informDiv.innerText = `You chose: ${chosedNumber}, the machine chose:${randomNumber}`;
}

function setResult(chosedNumber, randomNumber) {
  numberInput.value === String(randomNumber)
    ? (resultDiv.innerText = "You won!")
    : (resultDiv.innerText = "You lost!");
}

function handleClickButton(event) {
  event.preventDefault();
  const randomNumber = Math.floor(Math.random() * maxNumber);
  if (numberInput.value === "") {
    alert("Select a number!");
  } else if (numberInput.value > maxNumber) {
    alert(`Select a number less than ${maxNumber}!`);
  } else {
    setInform(numberInput.value, randomNumber);
    setResult(numberInput.value, randomNumber);
  }
}

rangeInput.addEventListener("change", handleChangeRangeInput);
numberButton.addEventListener("click", handleClickButton);
