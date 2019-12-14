const todoForm = document.querySelector(".js-todo-form"),
    todoInput = todoForm.querySelector(".js-todo-input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finishedList");
const PENDING_LS = "PENDING";
const FINISHED_LS = "FINISED";

let toDosPending = [];
let toDosFinised = [];

function deleteToDos(event, type) {
  const btn = event.target;
  const li = btn.parentNode;
  if (type === PENDING_LS) {
    pendingList.removeChild(li);
    const cleanPending = toDosPending.filter(function(toDo) {
      return toDo.id !== li.id;
    });
    toDosPending = cleanPending;
  } else {
    finishedList.removeChild(li);
    const cleanPending = toDosFinised.filter(function(toDo) {
      return toDo.id !== li.id;
    });
    toDosFinised = cleanPending;
  }
  saveLS(type);
}

function moveToDos(event, fromType, toType) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  paintToDos(span.innerHTML, li.id, toType);
  deleteToDos(event, fromType);
  console.log(fromType, toType);
}

function saveToDos(type, toDoId, text) {
  const toDo = {
    id: toDoId,
    value: text
  };
  if (type === PENDING_LS) {
    toDosPending.push(toDo);
  } else {
    toDosFinised.push(toDo);
  }
  saveLS(type);
}

function paintToDos(text, toDoId, type) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", function(event) {
    deleteToDos(event, type);
  });
  const Span = document.createElement("span");
  Span.innerText = text + "  ";
  li.appendChild(Span);
  li.appendChild(delBtn);
  li.id = toDoId;
  if (type === PENDING_LS) {
    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔";
    checkBtn.addEventListener("click", function(event) {
      moveToDos(event, PENDING_LS, FINISHED_LS);
    });
    li.appendChild(checkBtn);
    pendingList.appendChild(li);
    saveToDos(PENDING_LS, toDoId, text);
  } else {
    const unDoBtn = document.createElement("button");
    unDoBtn.addEventListener("click", function(event) {
      moveToDos(event, FINISHED_LS, PENDING_LS);
    });
    unDoBtn.innerText = "↪";
    li.appendChild(unDoBtn);
    finishedList.appendChild(li);
    saveToDos(FINISHED_LS, toDoId, text);
  }
}

function getID() {
  const date = new Date();
  return date.getTime();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  const toDoId = String(getID());
  paintToDos(currentValue, toDoId, PENDING_LS);
  todoInput.value = "";
}

function loadLS() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinised = localStorage.getItem(FINISHED_LS);
  if (loadedPending !== null) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.map(function(todo) {
      paintToDos(todo.value, todo.id, PENDING_LS);
    });
  }
  if (loadedFinised !== null) {
    const parsedFinised = JSON.parse(loadedFinised);
    parsedFinised.map(function(todo) {
      paintToDos(todo.value, todo.id, FINISHED_LS);
    });
  }
}
function saveLS(type) {
  if (type === PENDING_LS) {
    localStorage.setItem(type, JSON.stringify(toDosPending));
  } else {
    localStorage.setItem(type, JSON.stringify(toDosFinised));
  }
}
function init() {
  loadLS();
  todoForm.addEventListener("submit", handleSubmit);
}

init();


