var a = 10;
console.log(a); //Var Example

let username = "admin11";
console.log(username); //let example

// const user = "Chitra";
// user = "Pranav"
// console.log(user);

let mark = 100;
mark = 200;
console.log(mark);
// const total = 1000;
// total = 2000; // This will throw an error because total is a constant
// console.log(total);

const student = {
    name: "Chitra",
    age: 20
};
student.name = "Pranav"; // This is allowed because we are modifying the property of the object, not reassigning the constant
console.log(student); // { name: 'Pranav', age: 20 }