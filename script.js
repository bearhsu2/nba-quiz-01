const questions = [
    {
        question: "What's your playing style?",
        answers: [
            { text: "Aggressive and powerful", score: 1 },
            { text: "Smooth and skillful", score: 2 },
            { text: "Strategic and methodical", score: 3 },
            { text: "Athletic and explosive", score: 4 }
        ]
    },
    {
        question: "What's your preferred position?",
        answers: [
            { text: "Center", score: 1 },
            { text: "Guard", score: 2 },
            { text: "Forward", score: 3 },
            { text: "All positions", score: 4 }
        ]
    },
    {
        question: "What's your leadership style?",
        answers: [
            { text: "Lead by example", score: 1 },
            { text: "Vocal leader", score: 2 },
            { text: "Silent but deadly", score: 3 },
            { text: "Team player", score: 4 }
        ]
    },
    {
        question: "What's your biggest strength?",
        answers: [
            { text: "Scoring ability", score: 1 },
            { text: "Defense", score: 2 },
            { text: "Basketball IQ", score: 3 },
            { text: "Clutch performance", score: 4 }
        ]
    }
];

const nbaLegends = [
    {
        name: "Michael Jordan",
        image: "mj.png"
    },
    {
        name: "LeBron James",
        image: "legbron_james.jpg"
    },
    {
        name: "Kobe Bryant",
        image: "kobe.png"
    },
    {
        name: "Magic Johnson",
        image: "magic_johnson.png"
    },
    {
        name: "Larry Bird",
        image: "larry_bird.png"
    },
    {
        name: "Kareem Abdul-Jabbar",
        image: "abdul_jabbar.png"
    },
    {
        name: "Bill Russell",
        image: "bill_russell.png"
    },
    {
        name: "Wilt Chamberlain",
        image: "wilt_chamberlain.png"
    },
    {
        name: "Tim Duncan",
        image: "tim_duncan.png"
    },
    {
        name: "Shaquille O'Neal",
        image: "shaq.jpg"
    }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const restartButton = document.getElementById('restart-button');
const playerNameElement = document.getElementById('player-name');
const playerImageElement = document.getElementById('player-image');
const createLegendButton = document.getElementById('create-legend-button');
const heroImage = document.querySelector('.hero-image');
const startContainer = document.getElementById('start-container');

function startQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    resultContainer.classList.add('hide');
    questionContainer.style.display = 'block';
    heroImage.style.display = 'block';
    showQuestion(questions[0]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';
    
    // Only show options for the first 4 questions
    if (currentQuestionIndex < 4) {
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectAnswer(answer));
            answerButtonsElement.appendChild(button);
        });
    } else {
        // For questions after the 4th one, automatically show the result
        showResult();
    }
}

function selectAnswer(answer) {
    totalScore += answer.score;
    currentQuestionIndex++;

    if (currentQuestionIndex === 4) {  // After answering the 4th question
        showResult();
    } else if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    heroImage.style.display = 'none';
    resultContainer.classList.remove('hide');

    // Calculate which legend based on total score
    const legendIndex = Math.floor((totalScore / (questions.length * 4)) * nbaLegends.length);
    const legend = nbaLegends[Math.min(legendIndex, nbaLegends.length - 1)];

    playerNameElement.innerText = legend.name;
    playerImageElement.src = legend.image;
    playerImageElement.alt = legend.name;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    resultContainer.classList.add('hide');
    questionContainer.style.display = 'block';
    heroImage.style.display = 'block';
    showQuestion(questions[0]);
}

restartButton.addEventListener('click', restartQuiz);

// Add event listener for the new button
createLegendButton.addEventListener('click', () => {
    window.open('https://lets.playdailyfantasy.com/', '_blank', 'noopener,noreferrer');
});

// Start the quiz when the page loads
startQuiz(); 