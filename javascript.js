var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = 0;
var operator = null;

for (var i = 0; 1 < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    if (value == "=") {
      operand2 = parseFloat(display.textContent);

      console.log(operand2);
      display.innerText = "";
      display.innerText = value;

      var result = eval(operand1 + " " + operator + " " + operand2);
      display.innerText = result;
    } else if (
      value == "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5" ||
      "6" ||
      "7" ||
      "8" ||
      "9" ||
      "0" ||
      "."
    ) {
      display.innerText += value;
      console.log(value);
    } else if (value == "AC") {
      display.innerText = "";
    } else if (value == "DEL") {
      display.innerText = display.innerText.toString().slice(0, -1);
    } else {
      if (value == "+") {
        operator = "+";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value == "-") {
        operator = "-";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value == "*") {
        operator = "*";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value == "%") {
        operator = "%";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      } else if (value == "/") {
        operator = "/";
        operand1 = parseFloat(display.textContent);
        display.innerText = "";
        display.innerText = operator;
      }
      //show result on display
    }
  });
}
