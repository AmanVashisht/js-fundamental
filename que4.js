// You are developing a booking application for a cinema. The ticket price depends on the type of the 
// viewer("child", "adult", or "senior"). Write a program which calculates the price accordingly and prints the total 
// price to be paid. Let's assume the ticket price for a child is Rs+ 100, adult ticket price is Rs+ 150 and ticket price 
// for a senior is Rs+ 120

let numberofChilds = 2;
let numberofAdults = 1;
let numberofSeniors = 1;

total=(numberofChilds*100)+(numberofAdults*150)+(numberofSeniors*120);

console.log(`The total ticket price is ${total}`)