// Suppose you are building a payment checkout page and must display the final price after the discount.
// Create a simple discount calculator that takes two values from the variables - the total cost and the 
// discount percentage - and prints the discounted value.

let totalValue = 2000;
let discountPercentage = 20;

let result = totalValue-(totalValue*(discountPercentage/100));

console.log(`The final price after discount is: Rs. ${result}`);