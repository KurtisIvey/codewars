/*
Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
*/

/*
p: distance int, boatspeed, int, stream (direction and speed of stream)string
r: expect a float to 2 deciminal places
ep:
    let actualSpeed = boatSpeed
    need to split stream by " ". redefine into array
    arr[0] is direction, arr[1] = speed in string;
    create var for parseInt(arr[1]). 
        if arr[0] === downstream add parsedint arr[1] to actual speed
        else subtract it from actual speed.
    divide distance by actualSpeed
    math.floor for 2 decimal places

*/

function time(distance, boatSpeed, stream) {
  let actualSpeed = boatSpeed;
  let streamArr = stream.split(" ");
  let streamSpeed = parseInt(streamArr[1]);
  if (streamArr[0] === "Upstream") {
    actualSpeed -= streamSpeed;
  } else {
    actualSpeed += streamSpeed;
  }
  const time = distance / actualSpeed;
  return parseFloat(time.toFixed(2));
}
