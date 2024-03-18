function Solve(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('result');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('result');
    ev.value = ev.value.slice(0,-1);
 }