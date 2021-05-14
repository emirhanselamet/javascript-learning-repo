function Question(text,choices,answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
//question prototype
Question.prototype.checkAnswer = function (answer) {
    return this.answer === answer;
}

//quiz constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

//quiz prototype
Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}
//quiz isFinish
Quiz.prototype.isFinish = function () {
    return this.question.length === this.questionIndex;
}

//quiz guess

Quiz.prototype.guess = function (answer) {
    var question = this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;

}

//start quiz
var quiz = new Quiz(questions);
loadQuestion();
function loadQuestion() {
    if(quiz.isFinish()){
        showScore();
    }
    else{
        var question = quiz.getQuestion();
        var choices = question.choices;
        document.querySelector('#question').textContent = questions.text;

        for (let i = 0; i < choices.length; i++) {
            const element = document.querySelector('#choice'+i);
            element.innerHTML = choices[i];
            
            guess('btn'+i),choices[i];
        }
        showProgress();
    }
}
function guess(id,guess) {
    var btn = document.getElementById(id);
    btn.onclick = function () {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body'.innerHTML = html);
}


function showProgress() {
    var totalQuestion = quiz.question.length;
    var questionNumber = quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML = 'Question ' + questionNumber + '/' + totalQuestion;
}



var q1 = new Question('en küçük pozitif sayı',['10','1','11','2'],'1');
var q2 = new Question('en büyük 3 basamaklı pozitif sayı',['100','990','999','929'],'999');
var q3 = new Question('en büyük 4 basamaklı pozitif sayı',['100','990','999','929'],'999');

var questions = [q1,q2,q3];
