let yourWage = prompt("What is wage?");
yourWage = Number(yourWage);
let yourHours = prompt("Hours worked?");
yourHours = Number(yourHours);

let overtimeWage = yourWage * 1.5;
let overtimeHours = yourHours - 40;
let pay = null;

if (yourHours <= 40) {
    pay = yourHours * yourWage;
}

else {
    normalPay = yourWage * 40;
    overtimePay = overtimeHours * overtimeWage;
    pay = normalPay + overtimePay;
}

let grossMillion = 1000000 / Number(pay);
let totalPay = Math.ceil(pay);

console.log(`Weeks to millionaire: ${totalPay}`)

