//exercise 1

const maxCapacity = 14;
let surfTime = true;
let bestStudent;
//const purposeInLife;

console.log(maxCapacity);
console.log(surfTime);
console.log(bestStudent);
//console.log(purposeInLife);


//exercise 2
let myString = "music ";
let result = myString + "is the best thing ever";
console.log(result);
myString += " is the best thing ever";
console.log(myString);


//exercise 3
let password = "hello";
let confirmPassword = "hello";
const checkIfEquals = password === confirmPassword;
console.log(checkIfEquals);

//exercise 4
console.log(423 * 12);
let num1 = 802;
let num2 = 2;
console.log(num1 / num2);
num1 = 5;
num2 = 6;
console.log((num1 + num2) * 3);

//exercise 5
console.log((5 > 2) && false); // false
console.log(!("knife" === "sword")); // true
console.log((1 < 2) || (-1 > -1) || !false); // true
console.log(""); // false --- it's empty!
console.log((31 % 5) == "1"); // true 
console.log(!!true); // true
console.log("5th Avenue" != "5th Avenue"); // false
console.log(52 !== "52"); // false --- it's true!
console.log((undefined || null)); // true --- it's typing null!

//exercise 6
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
console.log(a + " " + b + " " + c);
//a = 0, b = 0, c = 2



