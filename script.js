// Question bank

var questionBank = [{
        question: 'The largest barley (جو) producer of the world is___________ ?',
        option: ['Russia', 'Canada', 'Ukraine', 'East Timore'],
        answer: 'Russia'
    },
    {
        question: 'How many rings are there in the Olympic Flag?',
        option: ['3', '9', '5', '8'],
        answer: '5'
    },
    {
        question: '__________ is called the ‘low country’ of the earth?',
        option: ['Spain', 'Italy', 'Holland', 'None of These'],
        answer: 'Holland'
    },
    {
        question: 'How many members are considered as Non permanent members of UN General Assembly?',
        option: ['10', '12', '8', 'None of These'],
        answer: '10'
    },
    {
        question: 'Meldan is the seaport of_________?',
        option: ['USA', 'Spain', 'Russia', 'France'],
        answer: 'Spain'
    },
    {
        question: 'The Third Largest Ocean in the World is __________ ?',
        option: ['Pacific Ocean', 'Indian Ocean', 'Arctic Ocean', 'Atlantic'],
        answer: 'Indian Ocean'
    },
    {
        question: 'Lisbon is the seaport of____________?',
        option: ['Chile', 'Portugal', 'UK', 'Belgium'],
        answer: 'Portugal'
    },
    {
        question: 'Who is the current Director of CIA (Central Intelligence Agency)?',
        option: ['Mike Pompeo', 'None of These', 'David S. Cohen', 'William J. Burns'],
        answer: 'William J. Burns'
    },
    {
        question: 'Ujjain state located in__________?',
        option: ['Punjab', 'India', 'Nepal', 'Sindh'],
        answer: 'India'
    },
    {
        question: 'The South Pole of the Earth is located in?',
        option: ['Arctic Ocean', 'Norway', 'Antarctica', 'None of these'],
        answer: 'Antarctica'
    },
    {
        question: 'Pakistan Played First Twenty20 International (T20I) match against which country?',
        option: ['Australia', 'England', 'India', 'West-Indies'],
        answer: 'England'
    },
    {
        question: 'The Siwa Oasis is located in__________?',
        option: ['Iran', 'Iraq', 'Egypt', 'UAE'],
        answer: 'Egypt'
    },
    {
        question: 'HRCP stands for?',
        option: ['Human Rights Commission of Pakistan', 'Human Rights Conference of Pakistan', 'Human Rights Committee of Pakistan', 'None of these'],
        answer: 'Human Rights Commission of Pakistan'
    },
    {
        question: 'NCOC stands for?',
        option: ['National Control and Operation Centre', 'National Command and Operation Centre', 'National Centre for Operation and Coordination', 'National Control and Operation Centre'],
        answer: 'National Command and Operation Centre'
    },
    {
        question: 'How many Islamic Republics are there in the world?',
        option: ['3', '5', '4', '2'],
        answer: '4'
    },
    {
        question: 'SIA is the airline of which country__________?',
        option: ['Singapore', 'UK', 'USA', 'China'],
        answer: 'Singapore'
    },
    {
        question: 'Shaheen Air Line is the airline of ______?',
        option: ['Pakistan', 'India', 'Brunei', 'Iran'],
        answer: 'Pakistan'
    },
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    } else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();