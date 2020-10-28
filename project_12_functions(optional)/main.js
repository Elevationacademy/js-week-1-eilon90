//exercise 1:
people_info = [
    {
      name: "guido",
      profession: "bungalow builder",
      age: 17,
      country: "canaland",
      city: "sydurn",
      catchphrase: "what a piece of wood!"
    },
    {
      name: "petra",
      profession: "jet plane mechanic",
      age: 31,
      country: "greenmark",
      city: "bostork",
      catchphrase: "that's my engine, bub"
    },
    {
      name: "damian",
      profession: "nursery assistant",
      age: 72,
      country: "zimbia",
      city: "bekyo",
      catchphrase: "with great responsibility comes great power"
    }
  ]
  
const capitalize = function(str) {
    let capitalizedStr = ''
    capitalizedStr += str[0].toUpperCase();
    capitalizedStr += str.slice(1);
    return capitalizedStr;
}

function capEachWord(str) {
    let fixedStr = capitalize(str);
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ') {
            fixedStr = fixedStr.slice(0, i + 1);
            fixedStr += str.charAt(i + 1).toUpperCase();
            fixedStr += str.slice(i + 2);
        }
    }
    return fixedStr;
}


function cityAndCountry(city, country) {
    city = capitalize(city);
    country = capitalize(country);
    let connectedStr = `${city}, ${country}`;
    return connectedStr;
}

function isUnderage(age) {
    if (age < 21) {
        age = 'an underage';
    }
    return age;
}

function isOld(age) {
    if (age >= 55) {
        age = 'a 55+';
    }
    return age;
}

function checkAge(age) {
    age = isUnderage(age);
    age = isOld(age);
    if (typeof age === 'number') {
        age = `${age} year old`;
    }
    return age;
}

function wrapInQuotes(str) {
    let fixedStr = `"${str}"`
    return fixedStr;
}

const getSummary = function(person){
    let summary = '';
    summary += capitalize(person.name);
    summary += ` is ${checkAge(person.age)}`;
    summary += ` ${capEachWord(person.profession)}`;
    summary += ` from ${cityAndCountry(person.city, person.country)}. `;
    summary += capitalize(person.name);
    summary += ` loves to say ${wrapInQuotes(capitalize(person.catchphrase))}.`;
    
    return summary;
}

for (person of people_info) {
    console.log(getSummary(person));
}


//exercise 2:
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = wordsCounter(story, specialChars);

function wordsCounter(str, specialChars) {

    let wordsInArr = wordsCollector(str);
    let lowerOnly = withoutCap(wordsInArr);
    let onlyLetters = removeSpecialCharts(lowerOnly, specialChars);
    let objOfWords = creatObj(onlyLetters);
    let fixedObj = addCounting(objOfWords, onlyLetters);
    let finalObj = withSpacesOfSebtences(fixedObj, str, specialChars);
    
    return finalObj;
}


function wordsCollector(str) {
    let words = [];
    words = str.split(' ');
    return words;
}

function withoutCap(arr) {
    for (let i in arr) {
        arr[i] = arr[i].toLowerCase();
    }
    return arr;
}

function removeSpecialCharts(arr, chartsToDelet) {
    for (let i in arr) {
        for (let j in chartsToDelet) {
            arr[i] = arr[i].replace(chartsToDelet[j], '');
        }
    }
    return arr;
}

function creatObj(arr) {
    let obj = {}
    for (let i in arr) {
        obj[arr[i]] = 0;
    }
    return obj;
}

function addCounting(obj, arr) {
    for (let i in arr) {
        obj[arr[i]]++;
    }
    return obj;
}

function withSpacesOfSebtences(obj, str, specialChars) {
    let wordsInArr = wordsCollector(str);
    let numOfSpaces = 0;
    for (let i = 0; i < wordsInArr.length - 1; i++) {
        for (let j in specialChars) {
            if (wordsInArr[i].includes(specialChars[j])) {
                numOfSpaces++;
            }
        }
    }
    obj["''"] = numOfSpaces;
    return obj;
}

console.log(wordCounts)

let numOfSpaces = 0;
let a = ['a.a', 'fg', 'r?gt'];
for (let i = 0; i < a.length; i++) {
    for (let j in specialChars) {
        if (a[i].includes(specialChars[j])) {
            numOfSpaces++;
        }
    }
}
console.log(numOfSpaces);