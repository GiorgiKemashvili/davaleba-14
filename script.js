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