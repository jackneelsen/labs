
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

// Define my variables
const makeMoney = document.querySelector("#makeMoney")
const formID = document.querySelector("#formID")
const count = document.querySelector("#coinCount")
const coinTypes = document.querySelector("#coinTypes")
const theCoins = document.querySelector("#theCoins")


// Add an event listener that triggers when makeMoney is pressed
formID.addEventListener('submit', (e) => {
    e.preventDefault()
  
    console.log(coinTypes.value)

    for (let i = 0; i < count.value; i++) {
        const coin = document.createElement('div')
    coin.classList.add('coin')
    if (coinTypes.value === 'penny') {
        coin.innerText = 'penny'
    }
    else if (coinTypes.value === 'nickel') {
        coin.innerText = 'nickel'
    }
    else if (coinTypes.value === 'dime') {
        coin.innerText = 'dime'
    }
    else if (coinTypes.value === 'quarter') {
        coin.innerText = 'quarter'
    }
    theCoins.append(coin)
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
