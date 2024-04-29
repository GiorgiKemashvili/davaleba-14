// Task 1
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i];
}
console.log("Sum of all elements:", sum);
// Task 2
const personsArray = [
    { name: "John", age: 25, address: "123 Main St" },
    { name: "Jane", age: 18, address: "456 Elm St" },
    { name: "Alice", age: 30, address: "789 Oak St" },
  ];
  // Task 3
console.log(
    "My name is",
    personsArray[0].name,
    ", My age is",
    personsArray[0].age,
    ", My address is",
    personsArray[0].address
  );
  // Task 4
if (personsArray[1].age < 19) {
    console.log("I am a teenager");
  } else {
    console.log("I am an adult");
  }
  // Task 5
const numbersArray2 = [10, 20, 30, 40, 50];
console.log("Elements of the array:");
for (let i = 0; i < numbersArray2.length; i++) {
  console.log(numbersArray2[i]);
}