function findMultiples(integer, limit) {
    let output = [];
    let curr = integer;
    while (curr <= limit){
      output.push(curr);
      curr += integer;
    }
    return output
  }
  