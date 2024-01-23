const card1 = {
    question: 'To access an HTML element from JavaScript, you can use this method:',
    ans1: 'getElementById',
    ans2: 'selectElement',
    ans3: 'getElement',
    ans4: 'selectElementById',
    correct: 1
};

const card2 = {
    question:'Separates javascript statements. Added at the end of each executable statement. makes it possible to write many statements on one line.',
    ans1: ',',
    ans2: ':',
    ans3: ';',
    ans4: '/',
    correct: 3
};

const card3 = {
    question:'Javascript elements are executed in what order?',
    ans1: 'In the sequence they are written',
    ans2: 'In the order called',
    ans3: 'From the bottom of the script',
    ans4: 'All of the Above',
    correct: 1
};

const card4= {
    question:'Groups of javascript statements',
    ans1: 'Groups',
    ans2: 'Blocks',
    ans3: 'Items',
    ans4: 'Sections',
    correct: 2
};

const card5= {
    question:'Single line comments stat with this',
    ans1: '/',
    ans2: '/*',
    ans3: '<--',
    ans4: '//',
    correct: 4
};

const card6= {
    question:'Inside which HTML element do we put the JavaScript?',
    ans1: '<js>',
    ans2: '<javascript>',
    ans3: '<script>',
    ans4: '<scripting>',
    correct: 3
};

const card7= {
    question:'How do you change the content of the following HTML element? <p id="demo">This is a demonstration.</p>',
    ans1: 'document.getElement("p").innerHTML = "Hello World!";',
    ans2: 'document.getElementById("demo").innerHTML = "Hello World!";',
    ans3: 'getElementByName("p").innerHTML = "Hello World!";',
    ans4: '#demo.HTML = "Hello World!";',
    correct: 2
};

const card8= {
    question:'Where is the correct place to insert a JavaScript?',
    ans1: 'The <body> section',
    ans2: 'Both the <head> section and the <body> section are correct',
    ans3: 'The <head> section',
    ans4: 'Neither the <head> nor the <body> section are correct',
    correct: 2
};

const card9= {
    question:'What is the correct syntax for referring to an external script called "script.js"?',
    ans1: '<script name="script.js">',
    ans2: '<script src="script.js">',
    ans3: '<script href="script.js">',
    ans4: '<script link="script.js">',
    correct: 2
};

const card10= {
    question:'How do you write "Hello World" in an alert box?',
    ans1: 'msg("Hello World");',
    ans2: 'msgBox("Hello World:);',
    ans3: 'alertBox("Hello World");',
    ans4: 'alert("Hello World");',
    correct: 4
};

const card11= {
    question:'How do you create a function in JavaScript?',
    ans1: 'function = myFunction()',
    ans2: 'function:myFunction()',
    ans3: 'function myFunction()',
    ans4: 'function.myFunction()',
    correct: 3
};

const card12= {
    question:'How do you call a function named "myFunction"?',
    ans1: 'call myFunction()',
    ans2: 'myFunction()',
    ans3: 'call function myFunction()',
    ans4: 'function myFunction()',
    correct: 2
};

const card13= {
    question:'How to write an IF statement in JavaScript?',
    ans1: 'if i === 5 then',
    ans2: 'if (i === 5)',
    ans3: 'if i = 5',
    ans4: 'if i = 5 then',
    correct: 2
};

const card14= {
    question:'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    ans1: 'if (i <> 5)',
    ans2: 'if i =! 5 then',
    ans3: 'if (i != 5)',
    ans4: 'if i <> 5',
    correct: 3
};

const card15= {
    question:'How does a WHILE loop start?',
    ans1: 'while i = 1 to 10',
    ans2: 'while (i <= 10; i++)',
    ans3: 'while (i <= 10)',
    ans4: 'while i <= 10',
    correct: 3
};

const card16= {
    question:'How does a FOR loop start?',
    ans1: 'for (i <= 5; i++)',
    ans2: 'for i = 1 to 5',
    ans3: 'for (i = 0; i <= 5; i++)',
    ans4: 'for (i = 0; i <= 5)',
    correct: 3
};

const card17= {
    question:'What is the correct way to write a JavaScript array?',
    ans1: 'var colors = ["red", "green", "blue"]',
    ans2: 'var colors = (1:"red", 2:"green", 3:"blue")',
    ans3: 'var colors = "red", "green", "blue"',
    ans4: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
    correct: 1
};

const card18= {
    question:'How do you round the number 7.25, to the nearest integer?',
    ans1: 'Math.round(7.25)',
    ans2: 'round(7.25)',
    ans3: 'Math.rnd(7.25)',
    ans4: 'rnd(7.25)',
    correct: 1
};

const card19= {
    question:'How do you find the number with the highest value of x and y?',
    ans1: 'Math.max(x,y)',
    ans2: 'top(x,y)',
    ans3: 'Math.ceil(x,y)',
    ans4: 'ceil(x,y)',
    correct: 1
};

const card20= {
    question:'What is the correct JavaScript syntax for opening a new window called "w2" ?',
    ans1: 'w2 = window.new("http://www.site.com");',
    ans2: 'w2 = window.open("http://www.site.com");',
    ans3: 'w2 = window.openNew("http://www.site.com");',
    ans4: 'w2 = window.newWindow("http://www.site.com");',
    correct: 2
};

const card21= {
    question:"How can you detect the client's browser name?",
    ans1: 'browser.name',
    ans2: 'navigator.appName',
    ans3: 'client.navName',
    ans4: 'window.browserName',
    correct: 2
};

const card22= {
    question:'Which event occurs when the user clicks on an HTML element?',
    ans1: 'onchange',
    ans2: 'onmouseover',
    ans3: 'onmouseclick',
    ans4: 'onclick',
    correct: 4
};

const card23= {
    question:'What will the following code return: Boolean(10 > 9)',
    ans1: 'false',
    ans2: 'NaN',
    ans3: 'true',
    ans4: 'error',
    correct: 3
};

const card24= {
    question:'What will the following code return: Boolean(10 > 9)',
    ans1: 'false',
    ans2: 'NaN',
    ans3: 'true',
    ans4: 'error',
    correct: 3
};

//let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24];
let cards = [card1, card2, card3, card4];

const card = document.getElementById('card');

let header = document.querySelector('header');
let mainArea = document.querySelector('main');
let fail = document.createElement('p');

fail.textContent = 'FAILURE';
fail.id = 'fail';

let win = document.createElement('p')

win.textContent = 'SUCCESS';
win.id = 'win';

let intro = document.getElementById('intro');
let instructions = document.getElementById('instructions');
let startBtn = document.getElementById('start');

startBtn.addEventListener('click', startGame)

var time = 300;

function timer(){

    let timer = setInterval(function(){
  
        time--;
        let minute = Math.floor(time/60);
        let sec = time%60;
        
        if (document.getElementById('timer') == null) {
            clearInterval(timer);
        }

        if (index === cards.length) {
            clearInterval(timer);
            return
        }

        if (sec >= 0 && sec < 10) {
            document.getElementById('timer').textContent=minute+':0'+sec;
        } else {
            document.getElementById('timer').textContent=minute+':'+sec;
        }



        if (time <= 0) {
            card.remove();
            document.getElementById('timer').remove();
            clearInterval(timer);
            mainArea.appendChild(fail);
        }
    }, 1000);
}
let score = 300000;

function scoreTimer() {
    let scoreTimer = setInterval(function(){
        score--;
    }, 1)
}

let question = document.createElement('h2');
let answers = document.createElement('ol');
    let ans1 = document.createElement('li');
    let ans2 = document.createElement('li');
    let ans3 = document.createElement('li')
    let ans4 = document.createElement('li');
let nextBtn = document.createElement('button');
let timeSubtraction = document.createElement('p');

    
let index = 0

function startGame() {
    displayCard();
    timer();
    scoreTimer();
}



function displayCard() {

    intro.remove();
    instructions.remove();
    startBtn.remove();
    
    question.textContent = cards[index].question;
    ans1.textContent = cards[index].ans1;
    ans1.id = 'ans1';
    ans2.textContent = cards[index].ans2;
    ans2.id = 'ans2';
    ans3.textContent = cards[index].ans3;
    ans3.id = 'ans3';
    ans4.textContent = cards[index].ans4;
    ans4.id = 'ans4';

    question.style.color = 'blue';
    card.style.backgroundColor = 'white';

    card.appendChild(question);
    card.appendChild(answers);
    answers.appendChild(ans1);
    answers.appendChild(ans2);
    answers.appendChild(ans3);
    answers.appendChild(ans4);

    let input = 0;

}

function checkanswer() {
    
    if (input === cards[index].correct) {
        question.style.color = 'darkgreen';
        card.style.backgroundColor = 'lightgreen'
    } else {
        question.style.color = 'darkred';
        card.style.backgroundColor = 'pink';
        timeSubtraction.textContent = '-10';

        let timer = document.getElementById('timer');
        timer.appendChild(timeSubtraction);

        timeSubtraction.style.position = 'absolute';
        timeSubtraction.style.top = '0px';
        timeSubtraction.style.right = '5%';
        timeSubtraction.style.color = 'red';

        cards.push(cards[index])

        subtractTime();

    }


    card.appendChild(nextBtn);
    nextBtn.textContent = 'NEXT'
    nextBtn.style.zIndex = '5';
    nextBtn.addEventListener('click', nextCard)

}

function subtractTime() {
    return time -= 10;
}

let highscore1 = localStorage.getItem('highscore1');
let highscore2 = localStorage.getItem('highscore2');
let highscore3 = localStorage.getItem('highscore3');
let highscore4 = localStorage.getItem('highscore4');
let highscore5 = localStorage.getItem('highscore5');

let initials1 = localStorage.getItem('initials1');
let initials2 = localStorage.getItem('initials2');
let initials3 = localStorage.getItem('initials3');
let initials4 = localStorage.getItem('initials4');
let initials5 = localStorage.getItem('initials5');

let scoreCard = document.createElement('div');

let scoreHead = document.createElement('h2');
let scores = document.createElement('ol');
let score1 = document.createElement('li');
let score2 = document.createElement('li');
let score3 = document.createElement('li');
let score4 = document.createElement('li');
let score5 = document.createElement('li');

score1.id = 'blank';
score2.id = 'blank';
score3.id = 'blank';
score4.id = 'blank';
score5.id = 'blank';

let yourHead = document.createElement('h2');
let yourScore = document.createElement('p');

yourHead.id = 'scoreSection';

function logScore() {

    if (!highscore1) {
        highscore1 = 0;
    }

    if (!highscore2) {
        highscore2 = 0;
    }

    if (!highscore3) {
        highscore3 = 0;
    }

    if (!highscore4) {
        highscore4 = 0;
    }

    if (!highscore5) {
        highscore5 = 0;
    }

    if (!initials1) {
        initials1 = '';
    }

    if (!initials2) {
        initials2 = '';
    }

    if (!initials3) {
        initials3 = '';
    }

    if (!initials4) {
        initials4 = '';
    }

    if (!initials5) {
        initials5 = '';
    }

    if (score > localStorage.getItem('highscore1')) {
        localStorage.setItem('highscore5', highscore4);
        localStorage.setItem('initials5', initials4);
        localStorage.setItem('highscore4', highscore3);
        localStorage.setItem('initials4', initials3);
        localStorage.setItem('highscore3', highscore2);
        localStorage.setItem('initials3', initials2);
        localStorage.setItem('highscore2', highscore1);
        localStorage.setItem('initials2', initials1);
        localStorage.setItem('highscore1', score);
        localStorage.setItem('initials1', initInput.value);
    } else if (score > localStorage.getItem('highscore2')) {
        localStorage.setItem('highscore5', highscore4);
        localStorage.setItem('initials5', initials4);
        localStorage.setItem('highscore4', highscore3);
        localStorage.setItem('initials4', initials3);
        localStorage.setItem('highscore3', highscore2);
        localStorage.setItem('initials3', initials2);
        localStorage.setItem('highscore2', score);
        localStorage.setItem('initials2', initInput.value);
    } else if (score > localStorage.getItem('highscore3')) {
        localStorage.setItem('highscore5', highscore4);
        localStorage.setItem('initials5', initials4);
        localStorage.setItem('highscore4', highscore3);
        localStorage.setItem('initials4', initials3);
        localStorage.setItem('highscore3', score);
        localStorage.setItem('initials3', initInput.value);
    } else if (score > localStorage.getItem('highscore4')) {
        localStorage.setItem('highscore5', highscore4);
        localStorage.setItem('initials5', initials4);
        localStorage.setItem('highscore4', score);
        localStorage.setItem('initials4', initInput.value);
    } else if (score > localStorage.getItem('highscore5')) {
        localStorage.setItem('highscore5', score);
        localStorage.setItem('initials5', initInput.value);
    }

}

function nextCard() {
    index++;
    nextBtn.remove();

    if (index === cards.length) {
        card.remove();
        document.getElementById('timer').remove();
        clearInterval(timer);
        // score = time;
        // logScore();
        scorecard();
    } else {
        displayCard();
    }
}

let highscoreMsg = document.createElement('p');
highscoreMsg.id = 'highscoreMsg';
highscoreMsg.textContent = 'NEW HIGH SCORE';

let initMsg = document.createElement('p');
initMsg.id = 'initMsg';
initMsg.textContent = 'Input Your Initials';

let initInput = document.createElement('input');
initInput.type = 'text';
initInput.id = 'initInput'

let initSubmit = document.createElement('input');
initSubmit.type = 'submit';
initSubmit.id = 'initSubmit';

let initials = '';

//Returning NaN 
// let scoreSave = parseInt(yourScore.textContent);

function scorecard() {
    scoreCard.style.display = 'flex';
    scoreCard.style.justifyContent = 'space-evenly';

    logScore();

    scoreHead.textContent = 'HIGH SCORES'
    score1.textContent = highscore1 + '  ' + initials1;
    score2.textContent = highscore2 + '  ' + initials2;
    score3.textContent = highscore3 + '  ' + initials3;
    score4.textContent = highscore4 + '  ' + initials4;
    score5.textContent = highscore5 + '  ' + initials5;
    
    yourHead.textContent = 'YOUR SCORE';
    yourScore.textContent = score;

    mainArea.appendChild(win);
    mainArea.appendChild(scoreCard);
    scoreCard.appendChild(scoreHead);
    scoreHead.appendChild(scores);
    scores.appendChild(score1);
    scores.appendChild(score2);
    scores.appendChild(score3);
    scores.appendChild(score4);
    scores.appendChild(score5);

    scoreCard.appendChild(yourHead);
    yourHead.appendChild(yourScore);

    if (score > highscore5) {
        yourHead.appendChild(highscoreMsg);
        highscoreMsg.appendChild(initMsg);
        highscoreMsg.appendChild(initInput);
        highscoreMsg.appendChild(initSubmit);
    }

    console.log(typeof yourScore)
    
    let scoreSave = parseInt(yourScore.textContent);
    
    console.log(scoreSave);

    console.log(parseInt(yourScore.textContent));



 

    initSubmit.addEventListener('click', function(event) {
        event.preventDefault();

        console.log(score);

        //parse integer

        if(scoreSave > parseInt(highscore1)) {
            localStorage.setItem('initials1', initInput.value);
        } else if (scoreSave > parseInt(highscore2)) {
            localStorage.setItem('initials2', initInput.value);
        } else if (scoreSave > parseInt(highscore3)) {
            localStorage.setItem('initials3', initInput.value);
        } else if (scoreSave > parseInt(highscore4)) {
            localStorage.setItem('initials4', initInput.value);
        } else {
            localStorage.setItem('initials5', initInput.value);
        }
        
        console.log(scoreSave);
        console.log(highscore1);
        console.log(highscore2);
        console.log(highscore3);
        console.log(highscore4);
        console.log(highscore5);

        console.log(parseInt(highscore1));
        console.log(parseInt(highscore2));
        console.log(parseInt(highscore3));
        console.log(parseInt(highscore4));
        console.log(parseInt(highscore5));
    })
}

// initSubmit.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(score);
//     console.log(scoreSave);

//     if(scoreSave == parseInt(highscore1)) {
//         localStorage.setItem('initials1', initInput.value);
//     } else if (scoreSave == parseInt(highscore2)) {
//         localStorage.setItem('initials2', initInput.value);
//     } else if (scoreSave == parseInt(highscore3)) {
//         localStorage.setItem('initials3', initInput.value);
//     } else if (scoreSave == parseInt(highscore4)) {
//         localStorage.setItem('initials4', initInput.value);
//     } else if (scoreSave == parseInt(highscore5)) {
//         localStorage.setItem('initials5', initInput.value);
//     } else {
//         alert('this isnt working');
//     }
    
//     console.log(scoreSave);
//     console.log(highscore1);
//     console.log(highscore2);
//     console.log(highscore3);
//     console.log(highscore4);
//     console.log(highscore5);
// })

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