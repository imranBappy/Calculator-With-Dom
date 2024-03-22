const btn1 = document.querySelector("#number1");
const btn2 = document.querySelector("#number2");
const operator = document.querySelector("#operator");
const btn = document.querySelector("#btn");
const display = document.querySelector("#display");

function add(num1, num2) {
  return num1 + num2;
}

function calculator() {
  const btn1Value = Number(btn1.value);
  const btn2Value = Number(btn2.value);
  const result = eval(`${btn1Value} ${operator.value} ${btn2Value}`);
  display.innerHTML = result;
}

btn.addEventListener("click", calculator);
