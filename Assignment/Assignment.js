// Spread Operator #################################################################################

// const number = 123;

// // Convert the number to a string
// const numberString = number.toString();

// // Convert the string into an array of digits
// const Array = [...numberString].map(Number);

// console.log(Array); 
 
//************************************************************* */
// var alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets); 
//***************************************************************** */
// var newArray = [...[,,]];
//  console.log(newArray);

//Object/Araay Destructuring #################################################################################

// const arrValue = ['one', 'two', 'three', 'four'];
// const [ ...x, y] = arrValue;
// console.log(x);

// const arrValue = ['one', 'two', 'three', 'four'];
// const [ Y, ...x] = arrValue;
// console.log(x);
// console.log(Y);

//***************************************************************** */
// nested destructuring assignment in arrays
// const arrValue = ["one", ["two", "three"]];
// const [x, [y, z]] = arrValue;
// console.log(x);
// console.log([y,z]); 
// console.log(z); 

//***************************************************************** */
// assigning default value 5 and 7
// let arrValue = [10];
// let [x = 5,  y = 7] = arrValue;
// console.log(x);
// console.log(y);

//***************************************************************** */

// const [a, b, ...[ length ]] = [1, 2, 3];
// console.log(a, b, length);

//***************************************************************** */

const [a, b, ...{ length }] = [1, 2, 3];
console.log(a, b, length);

