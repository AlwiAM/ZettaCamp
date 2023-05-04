// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  input.sort();

  let length = input.length;
  let middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (input[middleIndex - 1] + input[middleIndex]) / 2;
  } else { 
    return input[middleIndex];
  }
}

console.log(result(input));