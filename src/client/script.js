const $ = (x) => document.querySelector(x);

const questionSelectorField = $('#question-selector-field');
const topicSelectorField = $('#topic-selector-field');

const questionName = $('#question-name');
const question = $('#question');
const questionInfo = $('#question-info');

const answerField = $('#answer-field');
const answerButton = $('#answer-button');
const answerInfo = $('#answer-info');

const correctCounter = $('#correct-counter');
const incorrectCounter = $('#incorrect-counter');

let canUseHTML5Storage = false;

let currentQuestionName = '';
let currentTopicName = '';

let currentQuestion = {};

let shouldCheck = true;

function changeQuestion() {
    currentQuestionName = questionSelectorField.value;
    newQuestion();
}

function changeTopic() {
    currentTopicName = topicSelectorField.value;
    questionSelectorField.disabled = false;
    disableAnswer(true);
    loadQuestions();
}

function next() {
    if (shouldCheck) {
        checkQuestion();
    } else {
        newQuestion();
    }
}

function checkQuestion() {

    if (answerField.value === '') {
        answerInfo.innerHTML = 'Enter a value.';
        answerField.focus();
        return;
    }

    disableAnswer();

    if (answerField.value === currentQuestion.answer) {
        correctCounter.innerHTML = incrementStorage('correct');
    } else {
        incorrectCounter.innerHTML = incrementStorage('incorrect');
    }

    answerInfo.innerHTML = `${answerField.value === currentQuestion.answer ? 'C' : 'Inc'}orrect. ${currentQuestion.answer} is the correct answer.`;    
    
    shouldCheck = false;
}

async function newQuestion() {
    enableAnswer();
    const fetchResponse = await fetch('../question?topic=' + currentTopicName + '&name=' + currentQuestionName);

    answerInfo.innerHTML = '';

    const jsonResponse = await fetchResponse.json();

    currentQuestion = jsonResponse;

    questionName.innerHTML = currentQuestion.template.name;
    question.innerHTML = currentQuestion.questionText;    
    questionInfo.innerHTML = currentQuestion.template.answerFormatDescription || '';
    shouldCheck = true;

    MathJax.typeset();
}

function disableAnswer(disableButton = false) {

    if (disableButton) {
        answerButton.disabled = true;
        answerField.placeholder = 'Select a question first...';
    }

    answerButton.innerHTML = 'Next';

    answerField.disabled = true;
    answerField.blur();
}

function enableAnswer() {
    answerField.value = '';
    answerField.placeholder = 'Enter answer...';
    answerField.disabled = false;
    answerButton.disabled = false;
    answerButton.innerHTML = 'Check';
    answerField.focus();
}

function loadQuestions() {
    populateSelectField('../list?topic=' + currentTopicName, questionSelectorField);
}

function loadTopics() {
    populateSelectField('../list', topicSelectorField);
}

async function populateSelectField(url, field) {
    const fetchResponse = await fetch(url);

    const jsonResponse = await fetchResponse.json();

    field.options = [];

    field.options[0] = new Option();

    field.options[0].disabled = true;
    field.options[0].value = '';
    field.options[0].innerHTML = 'Select...';

    for (let i = 0; i < jsonResponse.length; i++) {
        
        field.options[i + 1] = new Option(jsonResponse[i]);

    }

    field.selectedIndex = 0;
}



function incrementStorage(key, amount = 1) {
    if (typeof(Storage) !== "undefined") {

        if (localStorage.getItem(key) === null)
            localStorage.setItem(key, 0);

        localStorage.setItem(key, Number(localStorage.getItem(key)) + amount);

        return localStorage.getItem(key);
    }

    return 'Upgrade your browser';
}

correctCounter.innerHTML = incrementStorage('correct', 0);
incorrectCounter.innerHTML = incrementStorage('incorrect', 0);

loadTopics();


