function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

// ? My solution
let double = (arr) => {
  return arr.map(val * 2);
};

// Solution code
const double = (arr) => arr.map((val) => val * 2);

// My solution wih the help of solution code for syntax
const squareAndFindEvens = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
