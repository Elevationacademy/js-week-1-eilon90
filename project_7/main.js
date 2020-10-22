//ecersize 1
let numChildren = prompt("How many children?");
let isCareful = false;
if (!isCareful) {
    numChildren++;
}
console.log(numChildren);

//ecersize 2
let checkNum = prompt("Give me a number-");
if (checkNum % 2 === 0) {
    console.log("There is something missing.");
}

//ecersize 3
let performance = "stellar";
let salary = 10000;
const goodBonus = 1000;
const stellarBonus = 3000;
if (performance === "stellar") {
    salary += stellarBonus;
}
else {
    salary += goodBonus;
}
console.log(salary);

//ecersize 4
const isVIP = false;
let cash = 500;
if (cash > 300 || isVip) {
    console.log("Hello, sir!");
}
else {
    console.log("Get out of here!!");
}

//ecersize 5
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

console.log(a + " " + b + " " + c + " " + d); //a=3  b=15  c=12  d=160 

//ecersize 6
const gender = null;
let profession = "business";
if (!gender) {
    profession += "person";
} 
else if (gender === "female") {
        profession += "woman";
}
else if (gender === "male") {
        profession += "man";
}
else {
    console.log("your gender is very special!");
}  
console.log(profession);


//ecersize 7 
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla && isUSCitizen) {
    if (currentYear - yearOfTeslaPurchase >= 4) {
        console.log("Would you like an upgrade?");
    }
    else {
        console.log("Are you satisfied with the car?");
    }
} 
else if (boughtTesla) {
    console.log("Would you like to move to the US?");
}
else {
    console.log("Are you interested in buying a Tasle?");
}
