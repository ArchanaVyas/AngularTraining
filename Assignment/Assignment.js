// //HOISTING

// var a = 4;
// function greet(){
//     b = "hello";
//     console.log(b);
//     var b;
// }
// greet();
// console.log(b);

// ##############################################################################################################

// // CLOSURES

// function callculate(x){
//     function multiply(y){
//         return x * y;
//     }
//     return multiply;
// }

// const multiply3 = callculate(3);
// const multiply4 = callculate(4);

// console.log(multiply3);
// console.log(multiply3());

// console.log(multiply3(6));
// console.log(multiply4(2));


// function outest(){
//     var c = 12;
//     function outer(b){
//         function inner(){
//             console.log(a, b, c);
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// var close = outest() ("Hi Closures");
// close();


// function setCount(){
//     let number=0;
//     return function(){
//         console.log(number++);
//         console.log(++number);
//     };
// }
// const counter = setCount();
// counter();
// counter();
// counter()

//############################################################################################################3

// // Spread Operator 

// const number = 123;

// // Convert the number to a string
// const numberString = number.toString();

// // Convert the string into an array of digits
// const Array = [...numberString].map(Number);

// console.log(Array); 
 
//************************************************************* */
// var alphabets = ["A", ..."BCD", "E"];
// console.log(alphabets); 
//************************************************************* */
// var newArray = [...[,,]];
//  console.log(newArray);

//#############################################################################################################

// //Object/Araay Destructuring 

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

// const [a, b, ...{ length }] = [1, 2, 3, 4];
// console.log(a, b, length);

//#########################################################################################################################3

// //CALL, APPLY, BIND

// const person1 = {
//     firstName: "Archana",
//     lastName: "Vyas",
//     fullName : function (prefix, suffix) {
//     console.log(prefix + ' ' + this.firstName + ' ' + this.lastName +  ' ' + suffix);
//   }
//   };
  
//   person1.fullName.call(person1,"Miss", "Greetings!!!");
  
//   const person2 = {
//     firstName: "Harry",
//     lastName: "Potter",
//   }
  
//   person1.fullName.call(person2, "Do you like The", "Movie?");
  
//   person1.fullName.apply(person2, ["Hello Mr.", "Good Evening"]);
  
//   const fullNamePerson2 = person1.fullName.bind(person2, "Watching...", "...Mischief Managed!!!");
//   fullNamePerson2();
  
//##############################################################################################################

// //Prototype

// //Constructor function with two parameters and props
// function Person(fName, lName){
//     this.firstName = fName,
//     this.lastName = lName
//   }
//   //adding property to function using prototype
//   Person.prototype.gender = "Female";
//   //adding method to get fullName
//   Person.prototype.fullName = function(){
//     return this.firstName+" "+ this.lastName;
//   }
//   //new object 
//   const person1 = new Person ("Archana", "Vyas");
//   const person2 = new Person ("Harry", "Potter");
//   //new property added
//   console.log(person2);
//   console.log(person1.fullName());
  
  
//   //Changing prototype
  
//   //new property "age" using prototype
//   Person.prototype.age = 25;
//   //new object person3
//   const person3 = new Person("Maharshi", "Vyas");
//   //changing prototype property from age:25 to age:30
//   Person.prototype = {age: 30}
//   //another new object person4
//   const person4 = new Person("Maharsh", "Vyas");
//   //Both have different ouput age
//   console.log(person3.age);//25
//   console.log(person4.age);//30
