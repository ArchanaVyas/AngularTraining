let results = []; // Array to store previous results
let lastOperator = ""; // Last operator clicked
let evaluated = false; // Flag for evaluated expression
let decimalEntered = false; // Flag to track if decimal point has been entered

function solve(val) {
   const v = document.getElementById("result");
   let currentValue = v.value;
   
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
      if (["+", "-", "x", "/", "%", "."].includes(val)) {
         // if input is empty and there are previous results, use the last result
         if (currentValue === "" && results.length > 0) {
            v.value = results[results.length - 1] + val;
            return;
         }
         // Check if current value is just '0', replace it with the new value
         if (currentValue === "0" && val !== ".") {
            v.value = val;
            return;
         }
         // Check if the last character in the input is an operator
         if (["+", "-", "x", "/", "%", "."].includes(currentValue.slice(-1))) {
            // Replace with new operator
            currentValue = currentValue.slice(0, -1);
         }
         lastOperator = val; // Update last operator
      } else if (currentValue === "0") { // Check if current value is just '0'
         v.value = val; // Replace '0' with the new value
         return;
      }

      // Append clicked value to input
      if (val === "." && decimalEntered) {
         // If decimal point is already entered, ignore
         return;
      } else if (val === ".") {
         decimalEntered = true; // Set decimalEntered flag
      }
      v.value = currentValue + val;
   }
}

function calculateResult() {
   const v = document.getElementById("result");
   const expression = v.value;
   try {
     const num2 = eval(expression);
     results.push(num2); // Store current result in the results array
     v.value = num2;
     evaluated = true; // Set evaluated flag
     decimalEntered = false; // Reset decimalEntered flag
   } catch (error) {
     v.value = "ERROR"; // Display "ERROR" if an error occurs during evaluation
     decimalEntered = false; // Reset decimalEntered flag
   }
}

function clearInput() {
  const inp = document.getElementById("result");
  inp.value = "";
  decimalEntered = false; // Reset decimalEntered flag
}

function removeLastCharacter() {
   const v = document.getElementById("result");
   const currentValue = v.value;
   if (currentValue.length > 0) {
      if (currentValue.slice(-1) === ".") {
         decimalEntered = false; // Reset decimalEntered flag if removing a decimal point
      }
      v.value = currentValue.slice(0, -1);
   }
}

function useLastResult() {
   const v = document.getElementById("result");
   if (results.length > 0) {
      v.value = results[results.length - 1].toString();
   }
}
