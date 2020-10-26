//exersice 1:
const names = ['Avi', 'Moshe', 'Shmulic', 'Zrubavel', 'Avner'];
const ages = [54, 32, 78, 3, 184, 40];
for (let i in names) {
    console.log(`${names[i]} is ${ages[i]} years old`)
}


//exersice 2:
const numbers = [43, 7, 548, 69, 2109, 5];
let sum = 0;
for (let i of numbers) {
    sum += i;
}
console.log(sum);


//exersice 3:
// const numbers = [43, 7, 548, 69, 2109, 5];
// let sum = 0;
// for (let i of numbers) {
//     sum += i;
// }
let average = sum / numbers.length;
console.log(average);


//exersice 4:
let nums = [];
for (let i = 0; i < 100; i++) {
    nums.push(i + 1);
}
console.log(nums);


//exersice 5:
for (let numCheck of nums) {
    if (numCheck % 2 === 1) {
        console.log(numCheck);
    }
}


//exersice 6:
let newNums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
let index = 0
while (newNums[index] !== 709) {
    index++;
}
console.log(index);


//exersice 7:
const newNames = ["Ashley", "Donovan", "Lucas"]
const newAges = [23, 47, 18]
const people = []
for (let i in newNames) {
    people[i] = { 
        name: newNames[i],
        age: newAges[i]
    }
}
console.log(people);


//exersice 8:
for (let person of people) {
    console.log(`${person.name} is ${person.age} years old`);
}


//exersice 9:
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for (let i in posts) {
    if (posts[i].id === 2) {
        posts.splice(i, 1);
    }
}
console.log(posts);


//exersice 10:
const newPosts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  for (let post of newPosts) {
      if (post.id === 2) {
          for (let j in post.comments) {
              if (post.comments[j].id === 3) {
                post.comments.splice(j, 1);
              }
          }
      }
  }
  console.log(newPosts);

