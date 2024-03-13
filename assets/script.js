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

let questionNum = 0;
let seconds = 50;
let score = 0; 
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

const checkAnswerOption1 = () => {
  quizAnswer.hidden = false
  option2.setAttribute('disabled', 'true');
  option3.setAttribute('disabled', 'true');
  option4.setAttribute('disabled', 'true');
  if(option1.textContent === answer){
    quizAnswer.textContent = 'Correct'
  } else {
    quizAnswer.textContent = 'Incorrect'
  }
  scoreSheet();
}
const checkAnswerOption2 = () => {
  quizAnswer.hidden = false;
  option1.setAttribute('disabled', 'true');
  option3.setAttribute('disabled', 'true');
  option4.setAttribute('disabled', 'true');
  if(option2.textContent === answer){
    quizAnswer.textContent = 'Correct'
  } else {
    quizAnswer.textContent = 'Incorrect'
  }
  scoreSheet();
}
const checkAnswerOption3 = () => {
  quizAnswer.hidden = false;
  option1.setAttribute('disabled', 'true');
  option2.setAttribute('disabled', 'true');
  option4.setAttribute('disabled', 'true');
  if(option3.textContent === answer){
    quizAnswer.textContent = 'Correct'
  } else {
    quizAnswer.textContent = 'Incorrect'
  }
  scoreSheet();
}
const checkAnswerOption4 = () => {
  quizAnswer.hidden = false;
  option1.setAttribute('disabled', 'true');
  option2.setAttribute('disabled', 'true');
  option3.setAttribute('disabled', 'true');
  if(option4.textContent === answer){
    quizAnswer.textContent = 'Correct'
  } else {
    quizAnswer.textContent = 'Incorrect'
  }
  scoreSheet();
}
option1.addEventListener('click', checkAnswerOption1);
option2.addEventListener('click', checkAnswerOption2)
option3.addEventListener('click', checkAnswerOption3)
option4.addEventListener('click', checkAnswerOption4)
};


nextQuestion.addEventListener('click', changeQuestion)