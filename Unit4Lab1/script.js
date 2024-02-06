
const buttons = document.querySelector(".container")
const lime = document.querySelector("#lime")
const salted = document.querySelector("#salted")
const choc = document.querySelector("#choc")
const gummies = document.querySelector("#gummies")
const spanClass = document.querySelector("span")
let total = 0

buttons.addEventListener('click', (e) => {
    if (e.target.id === "lime") {
        total += 2
    }
    else if (e.target.id === "salted") {
        total += 3
    }
    else if (e.target.id === "choc") {
        total += 4
    }
    else if (e.target.id === "gummies") {
        total += 6
    }
    console.dir(e.target.id)
    console.log(total)
    spanClass.innerText = `$${total}.00`
})

// Part 2: Make money
const coinButton = document.querySelector('#makeMoney')
const count = document.querySelector('#coinCount');

const types = document.querySelector('#coinTypes');

const myCoins = document.querySelector('#theCoins');

coinButton.addEventListener('submit', (e) => {
    e.preventDefault()
    const numCount = parseInt(count.value);
    const typeVal = types.value;
    const coinDiv = document.createElement('div');
    coinDiv.className = 'coin';
    coinDiv.innerText = typeVal;
    for (let i = 0; i < numCount; i++) {
        coinDiv.append()
        myCoins.append(coinDiv);
    }
    
})

//Part 3

const pressButtons = document.querySelector(".pressButtons")
const bulb = document.querySelector(".lightBulb")
const on = document.querySelector("#on")
const off = document.querySelector("#off")
const toggle = document.querySelector("#toggle")
const end = document.querySelector("#end")

pressButtons.addEventListener('submit', (e) => {
if (e.target.id === "on") {
    bulb.style.backgroundColor = 'light'
}
else if (e.target.id === "off") {
    bulb.style.backgroundColor = 'dark'
}
else if (e.target.id === "toggle") {
    
}
else if (e.target.id === "end") {
    // maybe work in display=none for the whole div?
}
})
