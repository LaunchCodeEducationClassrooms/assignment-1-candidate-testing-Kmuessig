const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ['Who was the first American woman in space?', 'True or false: 5000 meters = 5 kilometers.', '(5 + 3)/2 * 10 = ?', 'Given the array [8, Orbit, Trajectory, 45], what entry is at index 2?', 'What is the minimum crew size for the ISS?'];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question('Hello, what is your name: ');
  
} 


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  for ( let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //let grade = candidateAnswers
  let total = questions.length
  let correct = 0
  let status = '';

  //Percentage = (correct / total) * 100

for (let i = 0; i < questions.length; i++) {
  if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()) {
    console.log(`${i+1}) ${questions[i]} \n   Your answer: ${candidateAnswers[i]} \n   Correct anwser: ${correctAnswers[i]}\n`);
    correct ++
  } else {
    console.log(`${i+1}) ${questions[i]} \n   Your answer: ${candidateAnswers[i]} \n   Correct answer: ${correctAnswers[i]}\n`);
  }
}
  if (correct >= 4) {
    status = "PASSED"
  } else {
    status = "FAILED"
  }
  console.log(`>>>Overall Grade: ${correct / total * 100}% (${correct} of 5 responses correct) \n>>>STATUS: ${status}`)

}
// if (grade == correctAnswers) {
//   console.log('CORRECT');
// } else {
//   console.log('SORRY! that is INCORRECT. ');
//}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Hi ' + (candidateName) + '! Thank you for applying to the astronaut training program.\n');
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};