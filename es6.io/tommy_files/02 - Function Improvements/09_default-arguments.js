// // Non-default Arguments
// function calculateBill(total, tax, tip) {
//   return total + (total * tax) + (total * tip);
// }

// const totalBill = calculateBill(100, 0.13, 0.15);
// console.log(totalBill);


// // Default Arguments
// function calculateBill(total, tax = 0.13, tip = 0.13) {
//   return total + total * tax + total * tip;
// }

// const totalBill = calculateBill(100);
// console.log(totalBill);


// // Default Arguments with one undefined
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

const totalBill = calculateBill(100, undefined, 0.25);
console.log(totalBill);