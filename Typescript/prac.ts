// interface Person {
//   age: number;
// }

// interface Musician extends Person {
//   instrument: string;
// }

// var drummer = <Musician>{};
// drummer.age = 27;
// drummer.instrument = "Drums";
// console.log("Age:  " + drummer.age);
// console.log("Instrument:  " + drummer.instrument);

// ############################################################

// interface Person {   
//    name:string  
//    age:number  
// }  
// interface Employee extends Person {   
//    gender:string  
//    empCode:number  
// }  
// let empObject = <Employee>{};   
// empObject.name = "Archana Vyas"  
// empObject.age = 20   
// empObject.gender = "Female"  
// empObject.empCode = 13  
// console.log("Name: "+empObject.name);  
// console.log("Employee Code: "+empObject.empCode); 

// ############################################################
// interface in a class
// defining interface for class  
// interface Person {  
//    firstName: string;  
//    lastName: string;  
//    age: number;  
//    FullName();  
//    GetAge();  
// }  
// // implementing the interface  
// class Employee implements Person {  
//    firstName: string;  
//    lastName: string;  
//    age:number;  
//    FullName() {  
//        return this.firstName + ' ' + this.lastName;  
//    }  
//    GetAge() {  
//        return this.age;  
//    }  
//    constructor(firstN: string, lastN: string, getAge: number) {  
//        this.firstName = firstN;  
//        this.lastName = lastN;  
//        this.age = getAge;  
//    }  
// }  
// // using the class that implements interface  
// let myEmployee = new Employee('Archana', 'Vyas', 20);  
// let fullName = myEmployee.FullName();  
// let Age = myEmployee.GetAge();  
// console.log("Name of Person: " +fullName + '\nAge: ' + Age);

// // ############################################################
// interface Rectangle {
//    height: number,
//    width: number
//  }
 
//  const rectangle: Rectangle = {
//    height: 20,
//    width: 10
//  };

 // ############################################################
 // extending interface
//  interface Rectangle {
//    height: number,
//    width: number
//  }
 
//  interface ColoredRectangle extends Rectangle {
//    color: string
//  }
 
//  const coloredRectangle: ColoredRectangle = {
//    height: 20,
//    width: 10,
//    color: "red"
//  };

 // ############################################################
//  interface Person {
//    name: string;
//    age: number;
//    greet(): string;
//  }

//  class Person {
//    name: string;
//    age: number;
   
//    constructor(name: string, age: number) {
//      this.name = name;
//      this.age = age;
//    }
   
//    greet(): string {
//      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//    }
//  }
  
 