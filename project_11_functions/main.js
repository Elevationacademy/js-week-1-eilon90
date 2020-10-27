//exercise 1: 
const calcAge = function(currentYear, birthyear) {
    return currentYear - birthyear;
}
const age = calcAge(2017, 1989);
console.log(age);


//exercise 2: 
const possibleAges = function(currentYear, birthyear) {
    const afterBirthday = currentYear - birthyear;
    const beforeBirthday = afterBirthday - 1;
    console.log(`You are either ${beforeBirthday} or ${afterBirthday}`);
}
possibleAges(2020, 1990);


//exercise 3:
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(21));
console.log(isEven(44));


//exercise 4: 
function printOddNums(nums) {
    for (let num of nums) {
       if (isEven(num) === false) {
           console.log(num);
       }
    }
}
printOddNums([4, 67, 528, 5359, 3 ,7 ,0, 8354]);


//exercise 5:
function isIncluded(nums, checkNum) {
    let included = false;
    for (num of nums) {
        if (checkNum === num) {
            included = true;
        }
    }
    return included;
}
console.log(isIncluded([5, 8, 34, 956, 34, 2, 8, 53], 2));


//exercise 6:
const calculator = {
    add: function(num1, num2) {
        return num1 + num2;
    },
    subtract: function(num1, num2) {
        return num1 - num2;
    }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42



//exercise 7:
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength (money, name) {
    return money * name.length;
} 

function makeRegal(name) {
    return `His Royal Highness, ${name}`;
}

//extention

Array.prototype.splice = function(){
    let originalArr = this;
    let start = arguments[0];
    let deletCount = arguments[1];
    let fixedArray = [];
    let trash = [];
    if (start > originalArr.length) {
        start = originalArr.length;
    }
    if (start < 0) {
        start = originalArr.length + start;
    }
    for (i = 0;  i < start; i++) {
        fixedArray[i] = originalArr[i];
    }
    for (let i = 2; i < arguments.length; i++) {
        fixedArray[fixedArray.length] = arguments[i];
    }
    for (i = start + deletCount; i < originalArr.length; i++) {
        fixedArray[fixedArray.length] = originalArr[i];
    }
    if (!deletCount && deletCount !== 0) {
        deletCount = originalArr.length - start;
    }
    for (i = start; i < start + deletCount; i++) {
        trash [i - start] = originalArr[i];
    }
    if (start + deletCount > originalArr.length) {
        trash.length = originalArr.length - start;
    }
    for (let i in fixedArray) {
        originalArr[i] = fixedArray[i];
    }
    originalArr.length = fixedArray.length;
    return trash;  
}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]


// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]


// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 


// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 


// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 


// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 


// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 