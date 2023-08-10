function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
    case "-":
      result = value.a - value.b;
    case "/":
      result = value.a / value.b;
    case "*":
      result = value.a * value.b;
    case "%":
      result = value.a % value.b;
    case "^":
      result = Math.pow(value.a, value.b);
  }
  return result;
}

// lacked break statements

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      result = value.a + value.b;
      break;
    case "-":
      result = value.a - value.b;
      break;
    case "/":
      result = value.a / value.b;
      break;
    case "*":
      result = value.a * value.b;
      break;
    case "%":
      result = value.a % value.b;
      break;
    case "^":
      result = Math.pow(value.a, value.b);
      break;
  }
  return result;
}

// other fix, add return statement within cases

function evalObject(value) {
  switch (value.operation) {
    case "+":
      return value.a + value.b;
    case "-":
      return value.a - value.b;
    case "/":
      return value.a / value.b;
    case "*":
      return value.a * value.b;
    case "%":
      return value.a % value.b;
    case "^":
      return Math.pow(value.a, value.b);
  }
}
