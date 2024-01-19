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
    question:'What is the correct JavaScript syntax to change the content of the following HTML element? <p id="demo">This is a demonstration.</p>',
    ans1: 'document.getElement("p").innerHTML = "Hello World!";',
    ans2: 'document.getElementById("demo").innerHTML = "Hello World!";',
    ans3: 'document.getElementByName("p").innerHTML = "Hello World!";',
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

let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24];

const card = document.getElementById('card');

function timer(){

  let time = 300;

    let timer = setInterval(function(){
  
        time--;
        let minute = Math.floor(time/60);
        let sec = time%60;

        if (sec >= 0 && sec < 10) {
            document.getElementById('timer').textContent=minute+':0'+sec;
        } else {
            document.getElementById('timer').textContent=minute+':'+sec;
        }

        if (time < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

timer();

let question = document.createElement('h2');
let answers = document.createElement('ol');
    let ans1 = document.createElement('li');
    let ans2 = document.createElement('li');
    let ans3 = document.createElement('li')
    let ans4 = document.createElement('li');
    
let index = 0


function displayCard() {



    question.textContent = cards[index].question;
    ans1.textContent = cards[index].ans1;
    ans1.id = 'ans1';
    ans2.textContent = cards[index].ans2;
    ans2.id = 'ans2';
    ans3.textContent = cards[index].ans3;
    ans3.id = 'ans3';
    ans4.textContent = cards[index].ans4;
    ans4.id = 'ans4';

    question.style.color = 'blue'


    card.appendChild(question);
    card.appendChild(answers);
    answers.appendChild(ans1);
    answers.appendChild(ans2);
    answers.appendChild(ans3);
    answers.appendChild(ans4);

    let input = 0;

}

function checkanswer() {
    
    if (input === cards[0].correct) {
        question.style.color = 'green';
    } else {
        question.style.color = 'red';
    }

    let nextBtn = document.createElement('button');
    card.appendChild(nextBtn);
    nextBtn.textContent = 'NEXT'
    
    nextBtn.addEventListener('click', nextCard)

}

function nextCard() {
    console.log('this is working');
    index++;
    displayCard();
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

displayCard();