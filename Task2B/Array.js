// var input = [0,23,0,0,0,4,6,0,8,10,0,0,0,12];
// expected output = [23,4,6,8,10,12,0,0,0,0,0,0,0,0];

var input = [0,23,0,0,0,4,6,0,8,10,0,0,0,12];
console.log('Input : ' + input);

// Function to remove 0 and push at the end
function removeZero(num) {
  if(num != 0){
    return num;
  }
}

// Using the filter() function to apply the function to each element of the input array
var output = input.filter(removeZero);
var zeroCount = input.length - output.length;
for(var i=0; i<zeroCount; i++){
  output.push(0);
}

console.log('Expected Output: ' +output);