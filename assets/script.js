const card1 = {
    question: 'To access an HTML element from JavaScript, you can use this method:',
    ans1: 'getElementById',
    ans2: 'selectElement',
    ans3: 'getElement',
    ans4: 'selectElementById',
    correct: 1
};

const card2 = {
    question:'separates javascript statements. added at the end of each executable statement. makes it possible to write many statements on one line.',
    ans1: ',',
    ans2: ':',
    ans3: ':',
    ans4: '/',
    correct: 3
};

let cards = [card1, card2];

console.log(card1);
console.log(card2);
console.log(cards);

const card = document.getElementById('card');

let question = document.createElement('h2');
let answers = document.createElement('ol');
    let ans1 = document.createElement('li');
    let ans2 = document.createElement('li');
    let ans3 = document.createElement('li')
    let ans4 = document.createElement('li');

question.textContent = cards[0].question;
ans1.textContent = cards[0].ans1;
ans1.id = 'ans1';
ans2.textContent = cards[0].ans2;
ans2.id = 'ans2';
ans3.textContent = cards[0].ans3;
ans3.id = 'ans3';
ans4.textContent = cards[0].ans4;
ans4.id = 'ans4';

question.style.color = 'blue'


card.appendChild(question);
card.appendChild(answers);
answers.appendChild(ans1);
answers.appendChild(ans2);
answers.appendChild(ans3);
answers.appendChild(ans4);

let input = 0;

function checkanswer() {
    
    if (input === cards[0].correct) {
        question.style.color = 'green';
    } else {
        question.style.color = 'red';
    }

    let nextBtn = document.createElement('button');
    card.appendChild(nextBtn);
}

ans1.addEventListener('click', function() {
    input = 1;
    checkanswer()
})

ans2.addEventListener('click', function() {
    input = 2;
    checkanswer()
})

ans3.addEventListener('click', function() {
    input = 3;
    checkanswer()
})

ans4.addEventListener('click', function() {
    input = 4;
    checkanswer()
})