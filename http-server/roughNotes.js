const fs = require("fs");

// Function to convert a number to its word representation
function numberToWord(num) {
  const numberWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
  };

  if (num <= 20 || num % 10 === 0) {
    return numberWords[num];
  } else {
    const tens = Math.floor(num / 10) * 10;
    const ones = num % 10;
    return numberWords[tens] + "-" + numberWords[ones];
  }
}

// Open a file for writing
const fileName = "numbers.txt";
const stream = fs.createWriteStream(fileName);

// Loop from 1 to 50 and write the word representation to the file
for (let i = 1; i <= 50; i++) {
  const word = numberToWord(i);
  stream.write(`${i}: ${word}\n`);
}

// Close the file stream
stream.end();

console.log(`Numbers 1 to 50 written to ${fileName}`);
