function lowercaseCount(str) {
  // Use a regular expression to match lowercase letters
  const lowercaseMatches = str.match(/[a-z]/g);

  // Check if lowercaseMatches is not null
  if (lowercaseMatches) {
    // Return the length of the array, which represents the count of lowercase letters
    return lowercaseMatches.length;
  } else {
    // If no lowercase letters are found, return 0
    return 0;
  }
}
