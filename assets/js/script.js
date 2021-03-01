var questions = [ 
    { q: "What is the correct HTML element for inserting a line break?", a: "<br>", c:[ "<br>", "<p>", "<break", "<brk>"] },
    { q: "Which character is used to indicate an end tag?", a: "/", c: ["*", "/", ">", "}"]},
    { q: "How can you make a numbered list?", a: "<ol>", c: ["<ul>", "<list>", "<order>", "<ol>"]},
    { q: "Where in an HTML document is the correct place to refer to an external style sheet?", a: "In the <head> section", c:["In the <head> section", "At the end of the document", "In the <body> section", "In the <footer> section"]},
    { q: "How do yo call a function named 'myFunction'?", a: "myFunction()", c: ["Call.myFunction", "call function = myFunction()", ".myFunction", ]}
];


var score = 0;
var timeLeft = 60;
var questionIndex = 0;


var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var startScreenEl = document.querySelector(".startScreen");
var questionsEl = document.querySelector(".questions");

function countdown() {
   
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds

    startScreenEl.setAttribute("style", "display:none");

    questionsEl.removeAttribute("style");

    var timeInterval = setInterval(function() {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
          // Set the `textContent` of `timerEl` to show the remaining seconds
          timerEl.textContent = timeLeft + ' seconds remaining';
          // Decrement `timeLeft` by 1
          timeLeft--;
        } else if (timeLeft === 1) {
          // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          // Once `timeLeft` gets to 0, set `timerEl` to an empty string
          timerEl.textContent = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
      }, 1000);
    
    

    displayQuestion ();
}

startBtn.onclick = countdown;


function displayQuestion () {

    var questionTitleEl = document.querySelector(".questionTitle");
    var questionChoicesEl = document.querySelector(".questionChoices");

    questionTitleEl.textContent = questions[questionIndex].q;

    for (var i = 0; i < 4; i++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[questionIndex].c[i];
        // loop for ans here 
        questionChoicesEl.appendChild(buttonEl);


}
}

// add fucnrion for check ans , if goes in here 

//questionindex + 1 

//then call displayQuestion function 