/*
Converting a normal (12-hour) time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!

You will have to define a function named "to24hourtime", and you will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either "am" or "pm") as input.

Your task is to return a four-digit string that encodes that time in 24-hour time.

p: taking in hour int, minute int, period am/pm string
r: expecting string 4 characters in military time
ep:
    create output = 0
    first validate whether am or pm
        if pm output and hour not 12 +=1200
        else if period am and hour = 12, set hout to zero
    then handle hour & mins
    output += hour * 100
    output += minute
    we can use padstart to fill any remainging zeros
    return output.tostring()
*/

/* The padStart() method pads the current string with another string (multiple times, if needed)
 until the resulting string reaches
 the given length. The padding is applied from the start of the current string. */

function to24hourtime(hour, minute, period) {
  let output = 0;
  if (period === "pm" && hour !== 12) {
    hour += 12; // Adding 12 to convert hour to 24-hour format
  } else if (period === "am" && hour === 12) {
    hour = 0; // Resetting hour to 0 for 12 AM
  }
  output += hour * 100;
  output += minute;
  outputString = output.toString().padStart(4, "0"); // Padding leading zeros if needed
  return outputString;
}
