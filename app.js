let starPlayers = {};

function play(){

  const secretNumber = Math.floor(Math.random() * 10 + 1);
  console.log("Cheater! The answer is " + secretNumber);
  var trial = 1;
  let prevNumber = [];

  let playerName = prompt("Hi, welcome to Guess a Number! What is your name?");
  if (playerName === null){
    alert("Goodbye!");
  } else {

    while(true){
      let guessStr = prompt("Alright, " + playerName + ", guess a number from 1 to 10. \n     This is what you have guessed so far: "+ `${prevNumber}` + "\n\n SCOREBOARD: \n" + JSON.stringify(starPlayers, null, 4).replace(/"/g,'').replace('{','').replace('}','').replace(/,/g,''));
      if (guessStr === null){
        alert("Goodbye!");
        break;
      }
      let guessNum = Number(guessStr);

      if (guessNum === secretNumber){
        alert("That is correct, " + playerName + "! It took you " + trial + " time(s).");
        if (starPlayers[playerName] === undefined){
          starPlayers[playerName] = {};
          starPlayers[playerName] = trial;
        } else{
          if (starPlayers[playerName] > trial){
            alert(playerName + ', you also scored better with ' + (starPlayers[playerName] - trial) + ' fewer guesses. Good job!')
            starPlayers[playerName] = trial;
          }
        }
        let yesOrNo = confirm('Would you like to play again, ' + playerName + '? Please click "OK" if you want to play again.');
        if (yesOrNo === null || yesOrNo === false){
          alert('Goodbye! Thank you for playing.');
        } else{
          play();
        }
        break;
      } else if(guessNum <= 0 || guessNum > 10){
        prevNumber.push(guessStr);
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