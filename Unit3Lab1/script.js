let fullName = "Jack Neelsen";
let age = 22;
let birthday = "January 5"
let pineapplePizza = true
const lifeEvents = 
[   'I went to UNC',
    'I got a dog',
    'I visited Spain',
    'My friends got me an Apple Watch'
]

if (pineapplePizza === true) {
    console.log(`My name is ${fullName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
} 

else {
        console.log(`My name is ${fullName} and I am not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i])
}

let randomNum = null;
let counter = 0;

while(randomNum != 5) {
    randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    if (randomNum != 5) {
        counter = counter + 1
        console.log(`${randomNum} !== 5`)
    }

    else {
        counter = counter + 1
        console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`)
    }
}