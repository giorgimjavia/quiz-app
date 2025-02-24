const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest by surface area?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Kangchenjunga", correct: false },
      { text: "Makalu", correct: false }
    ]
  },
  {
    question: "Which animal is the 'King of the Jungle'?",
    answers: [
      { text: "Tiger", correct: false },
      { text: "Lion", correct: true },
      { text: "Elephant", correct: false },
      { text: "Cheetah", correct: false }
    ]
  },
  {
    question: "Which country is famous for inventing pizza?",
    answers: [
      { text: "France", correct: false },
      { text: "Italy", correct: true },
      { text: "Greece", correct: false },
      { text: "United States", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "N2", correct: false }
    ]
  },
  {
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Which is the fastest land animal?",
    answers: [
      { text: "Leopard", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Kangaroo", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;


  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer)

  }) 
}

function resetState() {
  nextButton.style.display = "none";
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', ()=> {
  if(currentQuestionIndex < questions.length) {
    handleNextButton()
  } else {
    startQuiz();
  }
});

startQuiz();








