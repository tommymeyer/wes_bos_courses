const names = ['wes', 'kait', 'lux'];
// // ES5 Way
// const fullNames = names.map(function(name) {
//   return `${name} bos`;
// });

// console.log(fullNames);

// // ES6 Way: Explicit 'return'
// const fullNames2 = names.map((name) => {
//   return `${name} bos`
// });

// console.log(fullNames2);

// // Implicit 'return'
const fullNames3 = names.map(name => `${name} bos`);

console.log(fullNames3);
