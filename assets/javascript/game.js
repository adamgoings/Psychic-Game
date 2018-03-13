function getRandomLetter () {

  var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var randomNumber = Math.floor((Math.random() * 25));

  var computerGuess = randomLetter[randomNumber];

  console.log(computerGuess);
};

getRandomLetter();



