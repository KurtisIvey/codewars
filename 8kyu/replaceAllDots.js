// original, only replaces first occurence
var replaceDots = function (str) {
  return str.replace(".", "-");
};

// solution with replaceAll
var replaceDots = function (str) {
  // add all to change to replaceAll built in function
  return str.replaceAll(".", "-");
};

// alt solution with regex
return str.replace(/\./g, "-");
