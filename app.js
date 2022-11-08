//============ OBJECTS THAT KEEPS HIGH SCORES ==========
let starPlayers = {};
/* starPlayers has to look like
starPlayers = {
  Sang: {numberOfTries: 3}
}*/

//window.localStorage

//============= NAME PROMPT ===============
let playerName = prompt("Hi, welcome to Guess a Number! What is your name?"); // name prompt
if (playerName === null){ // if they press x or just press esc, instead of reading the input as nothing written or 0, it quits the dialogue
  alert("Goodbye!"); // goodbye message when the program quits, doesn't prompt or alert anything else.
} else { // had to put play() in else because if I quit out of name prompt, the code kept going down and eventually read play()
  play(); // game start
}

function namePrompt(){
  let playerName = prompt("Hi, welcome to Guess a Number! What is your name?"); // name prompt
  if (playerName === null){ // if they press x or just press esc, instead of reading the input as nothing written or 0, it quits the dialogue
    alert("Goodbye!"); // goodbye message when the program quits, doesn't prompt or alert anything else.
  } else { // had to put play() in else because if I quit out of name prompt, the code kept going down and eventually read play()
    play(); // game start
  }
}

//============= ACTUAL PLAY CODE =============
function play(){ // game start



  const secretNumber = Math.floor(Math.random() * 10 + 1); // random number generator per game
  console.log("Cheater! The answer is " + secretNumber); // console log to make myself as the dev easier
  var trial = 1; // my number of tries starts at 1
  let prevNumber = []; // empty array of all the inputs the player put in so far

      //======== LOOP TO KEEP GAME GOING UNTIL YOU GET THE ANSWER =======================
  while(true){ // This condition is always gonna be true. This loop will keep on happening until the code is broken with "break". So until the person gets it correct, it keeps going
    let guessStr = prompt("Alright, " + playerName + ", guess a number from 1 to 10. \n So far, these are the scores of people who guessed before you: \n" + JSON.stringify(starPlayers));
    // prompt will open up a window no matter what. Whatever is submitted is guessStr.
    // I'm trying to implement displaying starPlayers but couldn't do it yet.
    if (guessStr === null){ // program quits with ESC or exit
      alert("Goodbye!");
      break;
    }
    let guessNum = Number(guessStr); // prompt always stores data as a string, so gotta convert

    //CORRECT GUESS
    if (guessNum === secretNumber){
      alert("That is correct, " + playerName + "! It took you " + trial + " time(s).");
      if (starPlayers[playerName] === undefined){ // creating an object with the playerName
        starPlayers[playerName] = {};
        starPlayers[playerName].numberOfTries = trial; // gives numberOfTries to name
      } else{
        if (starPlayers[playerName].numberOfTries <= trial){ // score is higher or equal? Don't do anything
          starPlayers[playerName].numberOfTries = trial;
        }
      }
      playAgain();
      break;
      //INCORRECT GUESSES
    } else if(guessNum <= 0 || guessNum > 10){
      prevNumber.push(guessStr); // pushing string in case they add words or something
      alert("Please enter a number between 1 and 10, " + playerName + ". You tried ", trial, " time(s). You tried " + `${prevNumber}` + " so far.");
    } else if(guessNum > secretNumber){
      prevNumber.push(guessStr);
      alert("Wrong! Try again, " + playerName + ". Your number is higher than the secret number. You tried " + trial + " time(s). You tried "+ `${prevNumber}` + " so far.");
    } else if(guessNum < secretNumber){
      prevNumber.push(guessStr);
      alert("Wrong! Try again, " + playerName + ". Your number is lower than the secret number. You tried " + trial + " time(s). You tried "+ `${prevNumber}` + " so far.");
    } else{
      prevNumber.push(guessStr);
      alert("Please enter a number, not a word or symbol, " + playerName + ". You tried " + trial + " time(s). You tried "+ `${prevNumber}` + " so far.");
    }
    trial++;
  }
}



  // switch (guessNum){
  //   case 9:
  //     alert("Correct!");
  //     break;
  //   case (guessNum <= 0 || guessNum > 10):
  //     alert("Please enter a number between 1 and 10.");
  //     break;
  //   case (guessNum > 9):
  //     alert("Wrong! Try again. Your number is higher than the secret number.");
  //     break;
  //   case (guessNum < 9):
  //     alert("Wrong! Try again. Your number is higher than the secret number.");
  //     break;
  //   default:
  //     alert("Please enter a number, not a word or symbol.");
  //     break;
  // }

function playAgain(){
  let yesOrNo = prompt('Would you like to play again, ' + playerName + '? Please type in "Yes" or "No".');
  if (yesOrNo === null){
    alert('Goodbye! Thank you for playing.');
  } else if(yesOrNo === 'yes' || yesOrNo === 'Yes'){
    play();
  } else if(yesOrNo === 'no' || yesOrNo === 'No'){
    alert('Goodbye! Thank you for playing.');
  } else{
    alert('Please type in either "Yes" or "No".')
  }
}