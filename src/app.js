function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function unsafeParse(input) {
  return eval(input);
}

module.exports = { add, divide, unsafeParse };
