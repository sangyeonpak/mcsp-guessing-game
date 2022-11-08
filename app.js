//============ OBJECTS THAT KEEPS HIGH SCORES ==========
let starPlayers = {};
/* starPlayers has to look like
starPlayers = {
  Sang: 3
}*/

//window.localStorage?



//============= PLAY =============\\
function play(){ // game start

  // IMPORTANT VARIABLES THAT RESET EACH TIME YOU PLAY
  const secretNumber = Math.floor(Math.random() * 10 + 1); // random number generator per game
  console.log("Cheater! The answer is " + secretNumber); // console log to make myself as the dev easier
  var trial = 1; // my number of tries starts at 1
  let prevNumber = []; // empty array of all the inputs the player put in so far

  // NAME PROMPT
  let playerName = prompt("Hi, welcome to Guess a Number! What is your name?"); // name prompt
  if (playerName === null){ // if they press x or just press esc, instead of reading the input as nothing written or 0, it quits the dialogue
    alert("Goodbye!"); // goodbye message when the program quits, doesn't prompt or alert anything else.
  } else {

    //======== LOOP TO KEEP GAME GOING UNTIL YOU GET THE ANSWER =======================
    while(true){ // This condition is always gonna be true. This loop will keep on happening until the code is broken with "break". So until the person gets it correct, it keeps going. Thanks Jeremy for the while(true)

      let guessStr = prompt("Alright, " + playerName + ", guess a number from 1 to 10. \n     This is what you have guessed so far: "+ `${prevNumber}` + "\n\n SCOREBOARD: \n" + JSON.stringify(starPlayers, null, 4).replace(/"/g,'').replace('{','').replace('}','').replace(/,/g,'')); // this cleans up the scoreboard
      if (guessStr === null){ // program quits with ESC or exit
        alert("Goodbye!");
        break;
      }
      let guessNum = Number(guessStr); // prompt always stores data as a string, so gotta convert

      //CORRECT GUESS
      if (guessNum === secretNumber){
        alert("That is correct, " + playerName + "! It took you " + trial + " time(s).");
        if (starPlayers[playerName] === undefined){ // creating an object with the playerName if there is none yet
          starPlayers[playerName] = {};
          starPlayers[playerName] = trial;
        } else{
          if (starPlayers[playerName] > trial){ // same name, new score is lower? set highscore (low rather lol) to the new score
            alert(playerName + ', you also scored better with ' + (starPlayers[playerName] - trial) + ' fewer guesses. Good job!')
            starPlayers[playerName] = trial;
          }
        }
        let yesOrNo = confirm('Would you like to play again, ' + playerName + '? Please click "OK" if you want to play again.'); //Thanks Lance for the button idea
        if (yesOrNo === null || yesOrNo === false){
          alert('Goodbye! Thank you for playing.');
        } else{
          play();
        }
        break;

      //INCORRECT GUESSES
      } else if(guessNum <= 0 || guessNum > 10){
        prevNumber.push(guessStr); // pushing the string, not the converted number, in case they add words or something and it'll display that
        alert("Please enter a number between 1 and 10, " + playerName + ". You guessed ", trial, " time(s) so far.");
      } else if(guessNum > secretNumber){
        prevNumber.push(guessStr);
        alert("Wrong! Try again, " + playerName + ". Your number is higher than the secret number. You guessed " + trial + " time(s) so far.");
      } else if(guessNum < secretNumber){
        prevNumber.push(guessStr);
        alert("Wrong! Try again, " + playerName + ". Your number is lower than the secret number. You guessed " + trial + " time(s) so far .");
      } else{
        prevNumber.push(guessStr);
        alert("Please enter a number, not a word or symbol, " + playerName + ". You guessed " + trial + " time(s) so far.");
      }
      trial++;
    }
  }
}

play();