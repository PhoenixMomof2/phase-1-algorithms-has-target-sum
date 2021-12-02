// function hasTargetSum(array, target) {
//   // interate through each number in the array
//   for (let i = 0; i <array.length; i++){
//     // for current num, identify a complement that adds to the target (comp = target - num)
//     // n steps
//     const complement = target - array[i]
//     // iterate through the rest of the array
//     for (let j = i + 1; j < array.length; j++){
//       // check if any number is our complement
//       // n * n steps
//       if (array[j] === complement) return true
//       // if so, return true
//     }
//   }
//   return false
//   //if I reach the end of the array, return false
// }

// function hasTargetSum(array, target) {
//   // create an object to keep track of all the numbers we've seen
//   const seenNumbers = {};
//   // iterate over the array of numbers
//   for (const number of array) {
//     // for the current number, identify a complementary number that adds to our target
//     // (for example: if our number is 2, and the target is 5, the complementary number is 3)
//     const complement = target - number;
//     // check if any of the keys in our object is the complement to the current number
//     // if so, return true
//     if (seenNumbers[complement]) return true;
//     // save the current number as the key on our object so we can check it later against other numbers
//     seenNumbers[number] = true;
//   }
//   // if we reach the end of the array, return false
//   return false;
// }

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }
//   return false;
// }

function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space: 0(n)
*/


//   Add your pseudocode here
  //iterate through each number in the array for the current num, identify a complement that adds to the target (complement)(comp = target - num)

// Examples:  

  hasTargetSum([3, 8, 12, 4, 11, 7], 10);
  // returns true, since 3 and 7 add up to 10

  hasTargetSum([22, 19, 4, 6, 30], 25);
  // returns true, since 19 and 6 add up to 25

  hasTargetSum([1, 2, 5], 4);
  // returns false, since no pair of numbers adds up to 4


/*
  Add written explanation of your solution here

  I need to make a hasTargetSum function that checks if two numbers in an array add up to some target number. For example, if the array is [1,2,3,4] and the target number is 6, I know that 2 and 4 add up to 6, so I should return true. If I have the same array and the target is 10, no two numbers in the array add up to 10, so I should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
