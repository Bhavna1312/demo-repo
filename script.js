//Use logical operators to find whether the age of a person lies between 10 and 20?
let age = prompt("What is your age?")
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
}
else{
    console.log("Your age doesnt lies between 10 and 20");
}

//Demonstrate the use of switch case statements in javascript
let age = prompt("What is your age?")
switch (age) {
    case 12:
        console.log("Your age is 12");
        break;
    case 13:
        console.log("Your age is 13");
        break;
    case 14:
        console.log("Your age is 14");
        break;
    case 15:
        console.log("Your age is 15");
default:
    console.log("Your age is not special");
} 

//Write a Javascript program to find whether a no. is Divisible by 2 and 3.
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3 ");
}
else {
    console.log("Your number is not divisible by 2 and 3");
    
}

//Write a Javascript program to find whether a no. is Divisible by either 2 or 3.
let num = prompt("What is your age?")
num = Number.parseInt(num)
if (num % 2 == 0 ){
    console.log("Your number is divisible by 2");
}
else {
    (num % 3 == 0)
    console.log("Your number is divisible by 3");
}
