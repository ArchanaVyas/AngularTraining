function solve(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 function calculateResult() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function clearInput() {
    var inp = document.getElementById('result');
    inp.value = '';
 }
 function removeLastCharacter() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }