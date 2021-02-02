// -------------------------------  BEGINNER

/* Opdracht 1 */
// Schrijf een functie die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// "Nova" geeft "Hoi Nova!"
// "Nick" geeft "Hoi Nick!"
function greet(name) {
  return `Hoi ${name}`;
}

const greetNova = greet("Nova");
const greetNick = greet("Nick");
// console.log("OUTPUT 1:", greetNova);
// console.log("OUTPUT 2:", greetNick);

/* Opdracht 2 */
// Schrijf een functie die een hoeveelheid minuten verwacht (als een getal) en teruggeeft
// hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// 1 geeft 60
// 3 geeft 180
// 23 geeft 1840
function getSecondsFromMinutes(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const output1 = getSecondsFromMinutes(1);
const output3 = getSecondsFromMinutes(3);
const output23 = getSecondsFromMinutes(23);
// console.log("OUTPUTS:", output1, output3, output23);

/* Opdracht 3 */
// Schrijf een functie die een cijfer verwacht en teruggeeft of het cijfer groter is
// dan nul
// ---- Verwachte uitkomsten:
// -3 geeft false
// 0 geeft false
// 300 geeft true

function isBiggerThanZero(number) {
  const biggerThanZero = number > 0;
  return biggerThanZero;
}

const outputMinus3 = isBiggerThanZero(-3);
const output0 = isBiggerThanZero(0);
const output300 = isBiggerThanZero(300);
// console.log("OUTPUTS:", outputMinus3, output0, output300);

/* Opdracht 4 */
// Schrijf een functie die twee getallen verwacht en teruggeeft of ze, opgetelt, gróter zijn dan 100.
// ---- Verwachte uitkomsten:
// 1 en 23 geeft false
// 8 en 92 geeft false
// 89 en 14 geeft true
function isBiggerThan100Together(number1, number2) {
  const sum = number1 + number2;
  const biggerThan100 = sum > 100;
  return biggerThan100;
}

const output123 = isBiggerThan100Together(1, 23);
const output892 = isBiggerThan100Together(8, 92);
const output8914 = isBiggerThan100Together(89, 14);
// console.log("OUTPUTS:", output123, output892, output8914);

/* Opdracht 5 */
// Schrijf een functie die een array van strings verwacht. Hoe lang die array is, weet je niet van tevoren,
// dus het moet werken voor alle lengtes. Zelfs voor een lengte van 100 (dus niet één voor één uitschrijven!)
// De functie geeft alle strings aan elkaar geplakt terug. Je mag hier geen array- of string methoden
// voor gebruiken zoals .concat()
// ---- Verwachte uitkomsten:
// ["abra", "cadabra"] geeft "abracadabra"
// ["a", "b", "c", "d", "e"] geeft "abcde"
function joinStrings(stringArray) {
  let outputString = "";
  for (let index = 0; index < stringArray.length; index++) {
    const string = stringArray[index];
    outputString = outputString + string;
  }

  return outputString;
}

const outputAbra = joinStrings(["abra", "cadabra"]);
const outputAbcde = joinStrings(["a", "b", "c", "d", "e"]);
// console.log("OUTPUTS:", outputAbra, outputAbcde);

// -------------------------------  INTERMEDIATE

/* Opdracht 6 */
// Schrijf een functie die een woord verwacht en dit omgedraait teruggeeft. Je kunt dit zowel handmatig
// als met ingebouwde string- en array methoden doen. Probeer beide manieren uit te werken als je
// graag wil oefenen!
// ---- Verwachte uitkomsten:
// "koekje" geeft "ejkeok"
// "vrienden" geeft "nedneirv"

function reverseString(string) {
  const stringArray = string.split("");
  const reversedArray = stringArray.reverse();
  const outputString = reversedArray.join("");
  return outputString;
}

const outputKoekje = reverseString("koekje");
const outputVrienden = reverseString("vrienden");
// console.log("OUTPUTS:", outputKoekje, outputVrienden);

function reversStringLoop(string) {
  // looping backward:
  // starting at index at string.length - 1
  // koekje: length -> 6, length - 1 -> 5
  // the first letter we will get is: string[5] -> e (the last letter)
  // keeping going as long as index is bigger or equal to 0
  // after each iteration of the loop subtract 1 from index
  // koekje[5] -> e
  // koekje[4] -> j
  // koekje[3] -> k
  // koekje[2] -> e
  // koekje[1] -> o
  // koekje[0] -> k
  // Loop stopped (no longer bigger or equal to 0)

  let outputString = "";
  for (let index = string.length - 1; index >= 0; index--) {
    const letter = string[index];
    outputString = outputString + letter;
  }

  return outputString;
}

const outputLoop = reversStringLoop("koekje");
// console.log("OUTPUT:", outputLoop);

/* Opdracht 7 */
// Schrijf een functie die een woord verwacht checkt of dit woord een palindroom is. Een palindroom is een
// spiegelwoord: het is hetzelfde zowel vooruit als achterstevoren. Als dit zo is, geeft de functie true terug,
// zo niet, dan false.
// ---- Verwachte uitkomsten:
// "lepel" geeft true
// "madam" geeft true
// "vrienden" geeft false
function isPalinDrome(word) {
  // CHEESE, you can do this in fancier ways I am sure
  const reverseWord = reverseString(word);
  const palindrome = reverseWord === word;
  return palindrome;
}

const outputLepel = isPalinDrome("lepel");
const outputMadam = isPalinDrome("madam");
const outputVrienden2 = isPalinDrome("vrienden");
// console.log("OUTPUT:", outputLepel, outputMadam, outputVrienden2);

/* Opdracht 8 */
// Schrijf een functie die een string en een letter verwacht. De functie telt hoe vaak die letter voorkomt in
// de string en geeft dit terug. Je mag hiervoor geen string- of array-methoden gebruiken.
// ---- Verwachte uitkomsten:
// "Hans en marietje lopen naar de supermarkt" en "e" geeft 6
// "Hans is zijn mondkapje vergeten" en "a" geeft 2
function countLetterInSentence(sentence, letter) {
  let count = 0;
  for (let index = 0; index < sentence.length; index++) {
    const letterInSentence = sentence[index];
    const isSameLetter = letterInSentence === letter;
    if (isSameLetter) {
      count = count + 1;
    }
  }
  return count;
}

const outputCount = countLetterInSentence(
  "Hans en marietje lopen naar de supermarkt",
  "e"
);
// console.log("OUTPUT:", outputCount);

// ------------------------------- ADVANCED (optionele bonusopdrachten)

/* Opdracht 9 */
// Schrijf een functie genaamd lastEntry die de laatste entry van een array teruggeeft.
// Als de parameter n wordt meegegeven, worden de laatste n entries van de array teruggegeven.
// ---- Verwachte uitkomsten:
// lastEntry([3, 6, 9, 17, 4, 6, 25, 4]) geeft 4
// lastEntry([46, 65, 34, 204, 190, 89], 3) geeft [204, 190, 89]

// count = 1, if count is not passed as an argument, count will be 1
function lastEntry(array, count = 1) {
  const firstIndexToInclude = array.length - count;
  // using array slice to "cut the array in half" at the right index
  const outputArray = array.slice(firstIndexToInclude);
  return outputArray;
}

const outputArr1 = lastEntry([3, 6, 9, 17, 4, 6, 25, 4]);
const outputArr2 = lastEntry([46, 65, 34, 204, 190, 89], 3);
// console.log("OUTPUT:", outputArr1, outputArr2);

/* Opdracht 10 */
// Schrijf een functie die een array van getallen verwacht. De functie geeft het hoogste
// getal in de array terug. Je mag hier geen array-object methoden voor gebruiken zoals .max()
// ---- Verwachte uitkomsten:
// [3, 6, 9, 17, 4, 6, 25] geeft 25
// [46, 65, 34, 204, 190, 89] geeft 204
function highestNumber(numberArray) {
  let highestSoFar = 0;
  for (let index = 0; index < numberArray.length; index++) {
    const numberInLoop = numberArray[index];
    const isHighestSoFar = numberInLoop > highestSoFar;
    if (isHighestSoFar) {
      highestSoFar = numberInLoop;
    }
  }

  return highestSoFar;
}

const highest1 = highestNumber([3, 6, 9, 17, 4, 6, 25]);
const highest2 = highestNumber([46, 65, 34, 204, 190, 89]);
// console.log("OUTPUT:", highest1, highest2);

/* Opdracht 11 */
// Schrijf een functie die geen parameters verwacht en de getallen 1 tot 100 print.
// Voor getallen die deelbaar zijn door 3 print je "Fizz" in plaats van het getal.
// Voor getallen die deelbaar zijn door 5 print je "Buzz" in plaats van het getal.
// Voor getallen die zowel deelbaar zijn door 3 als door 5, print je "FizzBuzz".
// ---- Verwachte uitkomst:

function fizzBuzz() {
  console.log("AANGEROEPEN?");
  for (let index = 1; index <= 100; index++) {
    const number = index;
    console.log("NUMBER IN LOOP:", number);
  }
}

fizzBuzz();

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// etc.
