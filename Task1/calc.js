let lastOperator = ""; // To store the last operator clicked
let evaluated = false; // Flag to track whether the expression has been evaluated

function solve(val) {
   var v = document.getElementById("result");
   var currentValue = v.value;

   // Check if the evaluated flag is true, indicating that the result is displayed
   if (evaluated) {
      // Reset the input value to the new number and reset the evaluated flag
      v.value = val;
      evaluated = false;
   } else {
      // Check if the clicked value is an operator
      if (["+", "-", "*", "/", "%"].includes(val)) {
         // Check if the last character in the input is an operator
         if (["+", "-", "*", "/", "%"].includes(currentValue.slice(-1))) {
            // If the last character is an operator, replace it with the new operator
            currentValue = currentValue.slice(0, -1);
         }
      }
      // Append the clicked value to the input
      v.value = currentValue + val;
   }
}

function calculateResult() {
   var v = document.getElementById("result");
   var expression = v.value;
   var num2 = eval(expression);
   v.value = num2;
   evaluated = true; // Set the evaluated flag to true after evaluating the expression
   lastOperator = ""; // Reset the last operator after displaying the result
   updateHistory(expression + " = " + num2);
}

// Function to update history
function updateHistory(expression) {
   var historyElement = document.getElementById("history");
   historyElement.textContent += expression + "\n";
}

function clearInput() {
   var inp = document.getElementById("result");
   inp.value = "";
}

function removeLastCharacter() {
   var ev = document.getElementById("result");
   ev.value = ev.value.slice(0, -1);
}
