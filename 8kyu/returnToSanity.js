/* This function should return an object, but it's not doing what's intended. What's wrong?

function mystery() {
    var results =
      {sanity: 'Hello'};
    return
      results;
  } */

// pseudocode: fix the structure, too many line breaks causing results to not be reached

function mystery() {
  var results = { sanity: "Hello" };
  return results;
}
