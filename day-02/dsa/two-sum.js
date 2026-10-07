// Brute Approach
const num = [2, 3, 4];
const target = 6;
for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] + num[j] == target) {
      console.log("Target Found at " + num[i] + " & " + num[j]);
    }
  }
}

// Optimized Approach
function twoSum(num, target) {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    const complement = target - num[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(num[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));

// 2nd Exercise
function findMax(numbers) {
  let maxNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

function findMin(numbers) {
  let minNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < maxNum) {
      maxNum = numbers[i];
    }
  }
  return minNum;
}

// 3rd Exercise
const numbers = [1, 2, 2, 3, 1, 2, 4, 3];

function countFrequency(numbers) {
  const frequency = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (frequency.has(numbers[i])) {
      const count = frequency.get(numbers[i]) + 1;
      frequency.set(numbers[i], count);
    } else {
      frequency.set(numbers[i], 1);
    }
  }

  return frequency;
}

// 4th Exercise
function removeDuplicates(numbers) {
  const seen = new Set();

  for (let i = 0; i < numbers.length; i++) {
    seen.add(numbers[i]);
  }
  return [...seen];
}
removeDuplicates([1, 2, 3, 2, 4, 1, 5]);

// 5th Exercise
function reverseArray(numbers) {
  let left = 0;
  let right = numbers.length - 1;
  let reverse;
  while (left < right) {
    reverse = numbers[left];
    numbers[left] = numbers[right];
    numbers[right] = reverse;
    left++;
    right--;
  }
  return numbers;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 6th Exercise
function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [numbers[left], numbers[right]];
    }
    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
twoSumSorted([1, 2, 3, 4, 6, 8, 11], 10);

// 7th Exercise
function reverseString(str) {
  const revStr = [...str];
  let left = 0;
  let right = revStr.length - 1;
  let reverse;
  while (left < right) {
    reverse = revStr[left];
    revStr[left] = revStr[right];
    revStr[right] = reverse;
    left++;
    right--;
  }
  return revStr.join("");
}
reverseString("hello");

// 8th exercise
function isPalindrome(str) {
  const revStr = [...str];
  let left = 0;
  let right = revStr.length - 1;
  let reverse;
  while (left < right) {
    reverse = revStr[left];
    revStr[left] = revStr[right];
    revStr[right] = reverse;
    left++;
    right--;
  }
  if (str === revStr.join("")) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("madam"); // true
isPalindrome("hello"); // false
isPalindrome("racecar"); // true

// 9th Exercise
function firstNonRepeatingChar(str) {
  const revStr = [...str];
  const frequency = new Map();
  for (let i = 0; i < revStr.length; i++) {
    if (frequency.has(revStr[i])) {
      const count = frequency.get(revStr[i]) + 1;
      frequency.set(revStr[i], count);
    } else {
      frequency.set(revStr[i], 1);
    }
  }
  for (let i = 0; i < revStr.length; i++) {
    if(frequency.get(revStr[i]) === 1){
        return revStr[i];
    }
  }
  return frequency;
}
firstNonRepeatingChar("javascript");
