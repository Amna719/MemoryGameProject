
console.log("Lets get started!");
//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback

//Global Variables
var pattern = [];
var patternLength = 8;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1500; //how long to hold each clue's light/sound
var strikes = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  pattern = [];
  strikes = 0;
  document.querySelector('.strike').textContent = `Strikes: ${strikes}`;
  for (var i = 0; i < patternLength; i++) {
    pattern.push(RandomNum());
  }
  console.log("The pattern is: " + pattern);
  gamePlaying = true;
  clueHoldTime = 1500;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function RandomNum(){
  return Math.trunc(Math.random() * 6) + 1;
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clueHoldTime = clueHoldTime - 150;
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("❌ 🙁 Uh Oh! You got 3 strikes! Game Over. You lost.");
  document.querySelector('.strike').textContent = `❌ Uh Oh! You lost! Strikes: ${strikes} 🙁  Try again!`;
}

function winGame(){
  stopGame();
  alert("🎉 Yayy!! You won! 🎉");
  document.querySelector('.strike').textContent = `🎉 Yayy!! You won! 🎊 Congratulations! 🥳`;
}

function guess(btn){
  console.log("user guessed: " + btn);
  if (!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn){
    //Correct guess
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) { //pattern.length - 1
        //Game Over: Win!
        winGame();
      } else {
        //Pattern correct, add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //good so far, check the next guess
      guessCounter++;
    }
  } else {
    strikes++;
    if (strikes < 3){
      document.querySelector('.strike').textContent = `❌  Strikes: ${strikes}`;
      playClueSequence();
    } else if (strikes >= 3){
       //Incorrect Guess
      //Game Over: Lose
      //Strikes 3
      document.querySelector('.strike').textContent = `❌ 🙁 Uh Oh! Strikes: ${strikes}`;
      loseGame();
    }
   
  
  }
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// Sound Synthesis Functions
const freqMap = {
  1: 253.4,
  2: 310.8,
  3: 386.2,
  4: 447.5,
  5: 480.3,
  6: 515.6
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}


