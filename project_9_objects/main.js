//exercise 1:
const p1 = {
    name: 'Robert',
    age: 28,
    city: 'Jerusalem'
}

const p2 = {
    name: 'Jill',
    age: 25,
    city: 'Tel Aviv'
}

if (p1.age === p2.age) {
    if (p1.city === p2.city) {
        console.log(`${p2.name} wanted to date ${p1.name}`);
    }
    else {    
        console.log(`${p2.name} wanted to date ${p1.name}, but couln't`);
    }
}

//exercise 2:
const myList = [
    {city: 'London', country: 'England', continent: 'Europe'},
    {city: 'New York City', country: 'USA', continent: 'nourth-Amrica'},
];
myList[1].country = 'Britain';
myList.pop(1);
console.log(myList);


//exercise 3:
const addList = [
    {city: 'Jerusalem', country: 'Israel', continent: 'Asia'},
    {city: 'Capetown', country: 'South Africa', continent: 'Africa'}
 ];
myList.push(...addList);
console.log(myList);


//exercise 4:
const library = {
    books: [
        {title: 'Winnie-the-Pooh', author: 'A. A. Milne'},
        {title: 'Moby-Dick', author: 'Herman Melville'},
        {title: 'Harry-Potter', author: 'J. K. Rolling'},
        {title: 'The Hobbit', author: 'J. R. R. Tolkien'}
    ]
}
myList.push(...library.books);
console.log(myList);

// //exercise 5:
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
// }

// const name = prompt('Please enter the name for your reservation');

// if (reservations[name] !== undefined && reservations[name].claimed === false) {
//     alert(`Welcome, ${name}`);
// } 
// else if (reservations[name] !== undefined) {
//     alert('Hmm, someone already claimed this reservation');
// }
// else {
//     alert('You have no reservation');
// }

// //exercise 5.1:
// if (name in reservations === false) {
//     reservations[name] = {claimed: true};
// }
// console.log(reservations);


// //exercise 5.2:

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');
let lowerCaseName = name.toLowerCase();
let fixedName = name.charAt(0).toUpperCase() + (lowerCaseName.slice(1));

if (reservations[fixedName] !== undefined && reservations[fixedName].claimed === false) {
    alert(`Welcome, ${fixedName}`);
} 
else if (reservations[fixedName] !== undefined) {
    alert('Hmm, someone already claimed this reservation');
}
else {
    alert('You have no reservation');
    reservations[fixedName] = {claimed: true};
}
console.log(reservations);


