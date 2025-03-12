/* Write a program to print the marks of a student in an object using for loop
obj = { harry: 98, rohan : 70, aakash: 7} */
let marks = {
  harry: 98,
  rohan: 70,
  aakash: 7,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of" +
      Object.keys(marks)[i] +
      "are" +
      marks[Object.keys(marks)[i]]
  );
}

//Write the program in Q1 using for in loop
for (let i in marks) {
  console.log(i);
}
