const grettingForm = document.querySelector(".js-gretting-form"),
    grettingInput = grettingForm.querySelector(".js-gretting-input");
const grettingText = document.querySelector(".js-gretting-text");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function paintGreeting(text){
    grettingForm.classList.remove(SHOWING_CN);
    grettingText.classList.add(SHOWING_CN);
    grettingText.innerText = `Hello ${text}`;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = grettingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    grettingForm.classList.add(SHOWING_CN);
    grettingForm.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init()