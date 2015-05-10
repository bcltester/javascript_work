/*

var x = 30;
console.log("The value of x is", x);

var fav_food = prompt("What is your favorite food?", "Don't write \"durian\" here, ok?");
console.log(fav_food);

var number = Number(prompt("Enter a number:", "Write your favorite number here"));
if(!isNaN(number))
  console.log("Your number is the square root of " + number*number);
else alert("Why don't you give me a number?");

var even_num = 0;
while(even_num <= 12) {
  console.log(even_num);
  even_num += 2;  
}

var base = 2, exponent = 1;
while (exponent <=10) {
  console.log(base);
  base = base * 2;
  exponent += 1;
}

var result = 1;
for(var power = 0; power<10; power++)
  result = result * 2;
console.log("The result is " + result);

// var LCM = 1;
for(var i = 0; i < 1000; i++)
{
  var LCM = 1 + i;
  if (LCM % 20 === 0 && LCM % 7 ===0) {
    console.log(LCM);
    break;
  }
}

switch(prompt("What's the weather like today?","Enter the weather here"))
{
  case "rainy": {
    console.log("Use an umbrealla.")
    break;
  }
  case "sunny": {
    console.log("Put on sunscreen.")
    break;
  }
  case "windy": {
    console.log("Use extra firm hair gel.")
    break;
  }
}

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}




//Chapter 2 Problem "Looping a Triangle"
var triangleString = "";
while(triangleString.length < 7){
  triangleString = triangleString + "#";
  console.log(triangleString);
}

//book solution
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

//Chapter 2 Problem "FizzBuzz"
for(var value = 1; value <= 100; value++) {
  if(value % 5 === 0 && value % 3 === 0)
    console.log("FizzBuzz");
  else if (value % 5 === 0)
    console.log("Buzz");
  else if (value % 3 === 0)
    console.log("Fizz");
  else console.log(value);
}

//book solution
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

//Chapter 2 Problem "Chessboard"

//i is index of row, j is index of column
var size = 8;
for (var i=0; i<size; i++)
{
  var row = "";
  for(var j=0; j<size; j++)
  {
    if((i + j) % 2 === 0)
      row = row + " ";
    else
      row = row + "#";
  }
  console.log(row);
}

//book solution
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


// Chapter 3 Functions

var makeNoise = function(){
  console.log("Pling!");
};

makeNoise();

var power = function(base, exponent){
  var value = 1;
  while(exponent >= 1){
    value = value * base;
    exponent--;
  }
  return value;
};
console.log(power(3,4));

var something = 1;
{
  var something = 2;
}
console.log(something);
*/

function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(8));

function min(numA, numB) {
  if (numA > numB)
    return numB;
  else return numA;
}
console.log(min(10,10));

var isEven = function(number) {
  if(number === 0)
    return true;
  else if(number === 1)
    return false;
  else if (number > 1) 
    return (isEven(number - 2));
  else
    return (isEven(number + 2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-100));

var countBs = function(string) {
  var totalBs=0;
  for (var i = 0; i<string.length; i++) {
    if (string.charAt(i) === "B")
      totalBs++;
  }
  return totalBs;
}

function countChar(word, letter) {
  var totalLetters=0;
  for (var i = 0; i<word.length; i++) {
    if (word.charAt(i) === letter) {
      totalLetters++;
    }
  }
  return totalLetters;
}

console.log(countChar("kakkerlak", "k"));
console.log(countBs("BBabiBbbbbssdfiC"));
console.log(countChar("BBabiBbbbbssdfiC","b"));
