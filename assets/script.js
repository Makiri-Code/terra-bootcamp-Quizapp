const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];
const body = document.getElementById('body')
const startContainer = document.getElementById('start-container')
const startBtn = document.getElementById('start-button');
const timer = document.getElementById('timer'); 
const questionContainer = document.getElementById('question-container');
const questionHeading = document.getElementById('question-heading');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const quizAnswer = document.getElementById('answer');
const nextQuestion = document.getElementById('next');
const result = document.getElementById('result');
const scoreContainer = document.getElementById('score');
const initialInput = document.getElementById('input');
const submitResult = document.getElementById('Submit-result')
const highScoresContainer = document.getElementById('Highscores-container');
const scoreList = document.getElementById('score-list');
const goBackBtn = document.getElementById('go-back');
const clearHighScores = document.getElementById('clear-highscores');
const noHighScore = document.getElementById('no-highscore');
const highscoreLink = document.getElementById('leaderboard');

let questionNum = 0;
let seconds = 50;
let score = 0; 

const setInitialsOfPlayers = () => {
 initials = initialInput.value
}
initialInput.addEventListener('change', setInitialsOfPlayers);

const displayHighScore = () => {
  if(initialInput.value.length === 0){
    noHighScore.textContent = 'No Highscores yet, go back to quiz'
  } else{
    noHighScore.hidden= 'true';
  }
  startContainer.style.display = 'none';
  scoreContainer.style.display = 'none';
  highScoresContainer.style.display = 'block'
}

highscoreLink.addEventListener('click', displayHighScore);

const goBackBtnHandler = () => {
  startContainer.style.display = 'block';
  highScoresContainer.style.display = 'none'
}
goBackBtn.addEventListener('click', goBackBtnHandler);

const submitInitialsHandler = () => { 
  const newPlayers = {
    initials: initials,
    scores: score
  }
  const highScoreList = document.createElement('li');
  highScoreList.textContent = `${newPlayers.initials} - ${newPlayers.scores}`;
  scoreList.appendChild(highScoreList);
  displayHighScore()
}

submitResult.addEventListener('click', submitInitialsHandler)
// Countdown timer 
const startCountDown = (seconds) => {
  const interval = setInterval(() => {
    seconds --
    timer.textContent = seconds
    if (seconds <= 0 ){
      clearInterval(interval);
      displayScoreSheet()
    } 
  }, 1000)
};

// To start quiz
const startQuizHandler = () => {
  startCountDown(seconds)
  displayQuestion()
  startContainer.style.display = 'none';
  questionContainer.style.display = 'flex';
}

// Start quiz button
startBtn.addEventListener('click', startQuizHandler);

const changeQuestion = () => {
  questionNum ++;
  if(questionNum === 5){
    result.textContent = score
    displayScoreSheet();
  }else {
    option1.removeAttribute('disabled');
    option2.removeAttribute('disabled');
    option3.removeAttribute('disabled');
    option4.removeAttribute('disabled');
    displayQuestion();
  }
  quizAnswer.hidden = true
}

// hide quiz-container and scoresheet div onLoad
const hideQuestion = () => {
  questionContainer.style.display = 'none';
  scoreContainer.style.display = 'none';
  highScoresContainer.style.display = 'none'
}

hideQuestion()

//  score sheet result calculation
const scoreSheet = () => {

  if( quizAnswer.textContent === 'Correct'){
    score += 20;
    result.textContent = score
  }
}
const displayScoreSheet = () => {
  scoreContainer.style.display = 'block';
  questionContainer.style.display = 'none';
}
// Display quiz questions and options.
const displayQuestion = () => {

  let getQuestion = questions[questionNum]
  const {questionText, options, answer} = getQuestion;
  questionHeading.textContent = questionText;
  option1.textContent = options[0];
  option2.textContent = options[1];
  option3.textContent = options[2];
  option4.textContent = options[3];

console.log(getQuestion);
// Set other buttons disabled upon click
const setDisabledAttributes = (a, b, c) => {
  quizAnswer.hidden = false;
  a.setAttribute('disabled', 'true');
  b.setAttribute('disabled', 'true');
  c.setAttribute('disabled', 'true');
  scoreSheet();
}
// Check if answer is correct or incorrect
const checkAnswerOption = (option) => {
  if(option.textContent === answer){
    quizAnswer.textContent = 'Correct'
    setTimeout(changeQuestion, 2000)
  } else {
    quizAnswer.textContent = 'Incorrect'
  }
}
// make other option buttons disabled after click event and display answer
const checkAnswerOption1 = () => {
  setDisabledAttributes(option2, option3, option4)
  checkAnswerOption(option1);
}
const checkAnswerOption2 = () => {
  setDisabledAttributes(option1, option3, option4)
  checkAnswerOption(option2)
}
const checkAnswerOption3 = () => {
  setDisabledAttributes(option1, option2, option4)
  checkAnswerOption(option3);
}
const checkAnswerOption4 = () => {
  setDisabledAttributes(option1, option2, option3)
  checkAnswerOption(option4);
}

option1.addEventListener('click', checkAnswerOption1)
option2.addEventListener('click', checkAnswerOption2)
option3.addEventListener('click', checkAnswerOption3)
option4.addEventListener('click', checkAnswerOption4)
};







nextQuestion.addEventListener('click', changeQuestion);