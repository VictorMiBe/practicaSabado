const screen = document.getElementById("calculator-screen");
const keys = document.getElementById("calculator-keys");

const calculator = () => {
  if (!keys) return;
  keys.addEventListener("click", (e) => {
    const t = e.target.localName === "span" ? e.target.parentNode : e.target;
    const d = t.dataset;
    if (d.number) {
      writeScreen(d.number);
    } else if (d.math) {
      getMath(d.math);
    } else if (d.operator) {
      runOperation(d.operator);
    }
  });
};

screen.textContent = "0";

const writeScreen = (number) => {
  if (screen.textContent === "0" && number != ".") {
    if (number != "0") {
      screen.textContent = number;
    }
  } else {
    if (number === "." && !screen.textContent.includes(".")) {
      screen.textContent += number;
    } else {
      if (number != ".") {
        screen.textContent += number;
      }
    }
  }
  screen.scrollLeft = screen.scrollWidth;
};
let number1;
let typeOperation;

const getMath = (math) => {
  number1 = Number(screen.textContent);
  typeOperation = math;
  console.log(number1 + " " + typeOperation);
  screen.innerHTML =
    '<span style = "position: relative; top: 2px;" class="icon-' +
    math +
    '"></span>';
};

const runOperation = (operation) => {
  if (operation === "clear") {
    screen.textContent = "0";
  } else {
    const number2 = Number(screen.textContent);
    switch (typeOperation) {
      case "add":
        screen.textContent = number1 + number2;
        break;
      case "minus":
        screen.textContent = number1 - number2;
        break;
      case "multiply":
        screen.textContent = number1 * number2;
        break;
      case "divide":
        screen.textContent = number1 / number2;
        break;
      default:
        break;
    }
    screen.scrollLeft = screen.scrollWidth;
  }
};
calculator();
