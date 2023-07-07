function toggleDarkMode() {
    let body = document.body;
    let calculator = document.querySelector('.calculator');
  
    body.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');
  }
  
  let display = document.getElementById("display");

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
