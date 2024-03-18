// var input = [1, 2, 3, 4, 5, 6]
// Expected Output: [2,4,6,8,10,12]


var input = [1, 2, 3, 4, 5, 6];
console.log('Input : ' + input);

// Function to multiply each element by 2
function multiplyByTwo(num) {
  return num * 2;
}

// Using the map() function to apply the function to each element of the input array
var output = input.map(multiplyByTwo);

console.log('Expected Output: ' +output); 