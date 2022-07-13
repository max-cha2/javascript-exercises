const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  let x = 0;
  if (arr.length === 0){
    return 0;
  }
	for (let i = 0; i < arr.length; i++){
    x += arr[i];
  }
  return x;
};

const multiply = function(arr) {
  let mult = 1;
  for (let i = 0; i < arr.length; i++){
    mult *= arr[i];
  }
  return mult;
};

const power = function(x, y) {
  let power = 1;
  for (let i = 0; i < y; i++){
    power *= x;
  }
  return power;
};

const factorial = function(num) {
  let fact = 1;
  if (num === 0){
    return 1;
  }
  for (let i = num; i > 0;){
    fact *= i;
    i--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
