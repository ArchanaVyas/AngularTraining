let lastResult = 0; // Previous result
let lastOperator = ""; // Last operator clicked
let evaluated = false; // Flag for evaluated expression

function solve(val) {
   var v = document.getElementById("result");
   var currentValue = v.value;
   
   // If the current value is "ERROR", replace "ERROR" with the clicked number
   if (currentValue === "ERROR" && !isNaN(Number(val))) {
      v.value = val;
      return;
   }
   // Reset input value if result displayed
   if (evaluated) {
      v.value = val;
      evaluated = false;
   } else {
      // Append clicked value to input
      if (["+", "-", "*", "/", "%", "."].includes(val)) {
         // if input is empty append 0 before operator
         if (currentValue === "") {
            v.value = "0" + val;
            return;
         }
         // Check if current value is just '0', replace it with the new value
         if (currentValue === "0" && val !== ".") {
            v.value = val;
            return;
         }
         // Check if the last character in the input is an operator
         if (["+", "-", "*", "/", "%", "."].includes(currentValue.slice(-1))) {
            // Replace with new operator
            currentValue = currentValue.slice(0, -1);
         }
         lastOperator = val; // Update last operator
      } else if (currentValue === "0") { // Check if current value is just '0'
         v.value = val; // Replace '0' with the new value
         return;
      }
      // Append clicked value to input
      v.value = currentValue + val;
   }
}


function calculateResult() {
   var v = document.getElementById("result");
   var expression = v.value;
   try {
     var num2 = eval(expression);
     lastResult = num2; // Store current result
     v.value = num2;
     evaluated = true; // Set evaluated flag
   } catch (error) {
     v.value = "ERROR"; // Display "ERROR" if an error occurs during evaluation
   }
 }
 

function clearInput() {
  var inp = document.getElementById("result");
  inp.value = "";
}

function removeLastCharacter() {
   var v = document.getElementById("result");
   var currentValue = v.value;
   if (currentValue.length > 0) {
      v.value = currentValue.slice(0, -1);
   }
}
