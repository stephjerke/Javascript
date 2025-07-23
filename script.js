let currentInput = 0;
let previousInput = 0;
let operator = "+";
let history = "";

function getNumber(zahl) {
  currentInput = currentInput * 10 + zahl;
  updateCurrentInput(currentInput);
}

function add() {
  performOperator();
  operator = "+";
  updatePreviousInput();
}

function subtract() {
  performOperator();
  operator = "-";
  updatePreviousInput();
}

function multiply() {
  performOperator();
  operator = "*";
  updatePreviousInput();
}

function divide() {
  performOperator();
  operator = "/";
  updatePreviousInput();
}

function result() {
  performOperator();
  operator = "=";
  updatePreviousInput();
  updateCurrentInput(previousInput);
}

function performOperator() {
  let currentResult = 0;

  if (operator === "+") {
    currentResult = previousInput + currentInput;
  } else if (operator === "-") {
    currentResult = previousInput - currentInput;
  } else if (operator === "*") {
    currentResult = previousInput * currentInput;
  } else if (operator === "/") {
    currentResult = previousInput / currentInput;
  } else if (operator === "=") {
    currentResult = currentInput;
  }

  let historyString =
    "<p>" +
    previousInput +
    " " +
    operator +
    " " +
    currentInput +
    " = " +
    currentResult +
    "</p>";

  history = historyString + history;
  updateHistory();

  previousInput = currentResult;
  currentInput = 0;
  updateCurrentInput("");
}

function clearAll() {
  currentInput = 0;
  previousInput = 0;
  operator = "+";
  history = "";
  updateCurrentInput("");
  updatePreviousInput();
  updateHistory();
}

function updateCurrentInput(text) {
  document.getElementById("output").innerHTML = text;
}

function updatePreviousInput() {
  document.getElementById("display").innerHTML = previousInput + " " + operator;
}

function updateHistory() {
  document.getElementById("history").innerHTML = history;
}
