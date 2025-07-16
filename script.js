let currentInput = 0;

function getNumber(zahl) {
  console.log(currentInput);
  currentInput = currentInput * 10 + zahl;
  console.log(currentInput);
  updateCurrentInput();
}

function add() {}

function subtraction() {}

function multiplication() {}

function division() {}

function clearAll() {}

function result() {}

function updateCurrentInput() {
  document.getElementById("output").innerHTML = currentInput;
}
