// // When you really need 'this'
const button = document.querySelector('#pushy');
button.addEventListener('click', function() {
  this.classList.toggle('on');
});


// // When you need a method to bind to an object
const person = {
  points: 23,
  score() {
    this.points++;
  }
}


// // When you need to add a prototype method
class Car {
  constructor(make, color) {
    this.make = make;
    this.color = color;
  }
}

const beemer = new Car('bmw', 'blue');
const subie = new Car('subaru', 'white');

Car.prototype.summarize = function() {
  return `This car is a ${this.make} in the color ${this.color}`;
};


// //When you need arguments object
const orderChildren = function() {
  const children = Array.from(arguments);
  return children.map((child, i) => {
    return `${child} was child #${i + 1}`;
  });
}