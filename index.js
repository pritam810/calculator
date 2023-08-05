var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = 0;
var operator = null;

for (var i = 0; 1 < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "/" ||
      value === "%"
    ) {
      if (value === "+") {
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value === "-") {
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value === "*") {
        operator = "*";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value === "%") {
        operator = "%";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else {
        operator = "/";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      }
      display.innerText = "";
    } else if (value === "=") {
      operand2 = parseFloat(display.textContent);
      display.innerText = "";
      display.innerText = value;
      //use eval to get result
      var res = eval(operand1 + " " + operator + " " + operand2);

      display.innerText = res;

      //show result on display
    } else {
      if (value == "AC") {
        display.innerText = "";
      } else if (value == "DEL") {
        display.innerText = display.innerText.toString().slice(0, -1);
      } else {
        display.innerText += value;
      }
    }
  });
}
