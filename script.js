console.log("Hello 🌎, Witness my Light and SOund Memory Game !");

const cluePauseTime = 500;
var nextClueWaitTime = 1000;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var randomNum = [];
var clueHoldTime = 1500;
var mistake = 1;
var timeLeft;
var countDown;

var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

//starts up the AudioContext after pressing the start button
document.querySelector("button").addEventListener("click", function () {
  context.resume().then(() => {
    console.log("Playback resumed successfully");
  });
});

function randomPauseTime(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function randomPattern() {
  for (let i = 0; i < 10; i++) {
    randomNum.push(Math.floor(Math.random() * (7 - 1) + 1)); // randomly chooses number between 1-6
  }
  console.log(randomNum);
}

function timer() {
  countDown = countDown - 1;
  if (countDown <= -1) {
    clearInterval(timeLeft);
    loseGame();
    return;
  }
  document.getElementById("timer").innerHTML =
    "You have " + countDown + " seconds left";
}

function startGame() {
  //initialize game variables
  clearInterval(countDown);
  document.getElementById("intro").play();
  mistake = 1;
  randomNum = []; //resets array at the start of each game
  randomPattern();
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("picture1").classList.add("hidden");
  document.getElementById("picture2").classList.add("hidden");
  document.getElementById("picture3").classList.add("hidden");
  document.getElementById("picture4").classList.add("hidden");
  document.getElementById("picture5").classList.add("hidden");
  document.getElementById("picture6").classList.add("hidden");

  setTimeout(() => {
    playClueSequence();
  }, 2000); //delays the playClueSequence by 2 seconds for intro song to play
  setTimeout(() => {
    timer();
  }, 2000); //delays countdown by 2 seconds
  setTimeout(() => {
    document.getElementById("timer").classList.remove("hidden");
  }, 3200);
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("timer").classList.add("hidden");
  document.getElementById("heart1").classList.remove("hidden");
  document.getElementById("heart2").classList.remove("hidden");
  document.getElementById("picture1").classList.remove("hidden");
  document.getElementById("picture2").classList.remove("hidden");
  document.getElementById("picture3").classList.remove("hidden");
  document.getElementById("picture4").classList.remove("hidden");
  document.getElementById("picture5").classList.remove("hidden");
  document.getElementById("picture6").classList.remove("hidden");
  clearInterval(timeLeft); //at the end of each game, timeLimit is cleared for next game
}

// Sound Synthesis Functions
// const freqMap = {
//   1: 200,
//   2: 300,
//   3: 400,
//   4: 500,
//   5: 600,
//   6: 700
// }

function playTone(btn, len) {
  // o.frequency.value = freqMap[btn]
  // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  document.getElementById("audio" + btn).play();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    // o.frequency.value = freqMap[btn]
    // g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    document.getElementById("audio" + btn).play();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.02);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
  showImage(btn);
  setTimeout(() => {
    clearButton();
  }, 2000);
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
  stopImage(btn);
}

function showImage(btn) {
  document.getElementById("picture" + btn).classList.remove("hidden");
}

function stopImage(btn) {
  document.getElementById("picture" + btn).classList.add("hidden");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  clearInterval(timeLeft);
  guessCounter = 0;
  clueHoldTime = randomPauseTime(1000, 1500); // sets clueHoldTime between these two numbers
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + randomNum[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, randomNum[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 10; // during the sequence, the time decreases by 10
    countDown = 3 * (progress + 3); //time increases by 3 seconds each round
  }
  timeLeft = setInterval(timer, 1000);
}

function loseGame() {
  stopGame();
  alert("Fatality, you LOSE!");
}

function winGame() {
  stopGame();
  alert("Finish him, you WIN!");
}

function hideHeart() {
  if (mistake == 1) {
    document.getElementById("heart1").classList.add("hidden");
  }
  if (mistake == 2) {
    document.getElementById("heart2").classList.add("hidden");
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (randomNum[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == randomNum.length - 1) {
        //GAME OVER: WIN!                      // last pattern goes to win
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++; // continues pattern if correct
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++; // increases to make sure you're hitting the right
      // button
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!

    if (mistake == 3) {
      //continues from where you left off with the pattern
      clueHoldTime = 1500;
      loseGame();
    } else {
      hideHeart();
      alert(
        "Incorrect choice, you have had " +
          mistake +
          " mistake(s) out of 3, please continue the pattern from where you left off."
      );
      mistake++;
    }
  }
}

