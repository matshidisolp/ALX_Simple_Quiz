1. Implement a Simple Interactive Quiz

Requirement
Create a Github Repo with a name ALX_Simple_Quiz
Make sure to start the repo with files index.html and styles.css on the same directory
Your task is to implement the JavaScript functionality for a quiz application

You will be working with the provided HTML and CSS template, which structures and styles the quiz. Your goal is to bring this quiz to life, making it interactive and functional.
HTML and CSS code structure provided. 

Given the final expected JavaScript output for the Simple Interactive Quiz task, let’s create a set of explicit instructions. These will guide the learners to produce the exact code, ensuring uniform submissions suitable for automated checking.

Your Task:
Create a JavaScript function named checkAnswer for a quiz application that checks if the user’s selected answer is correct and displays appropriate feedback. You will also add an event listener to the “Submit Answer” button to invoke this function when clicked.

Detailed Instructions:
Start with the Function Declaration:
Define a function named checkAnswer. This function will be called when the user submits their answer.
function checkAnswer() {
    // Function body
}
Identify the Correct Answer:

Inside the checkAnswer function, declare a variable named correctAnswer and assign it the string value "4". This represents the correct answer to your quiz question.
Retrieve the User’s Answer:

Use document.querySelector to select the checked radio button by its name attribute name="quiz". Since radio inputs are used for the answers, this will effectively capture the user’s selection.
Access the value property of the selected radio button to get the user’s answer. Store this value in a variable named userAnswer.
Compare the User’s Answer with the Correct Answer:

Implement an if statement to compare userAnswer with correctAnswer.
If the values match, indicating the user’s answer is correct, change the textContent of the element with the ID feedback to "Correct! Well done.".
If the values do not match, indicating the user’s answer is incorrect, update the textContent of the feedback element to "That's incorrect. Try again!".
Add an Event Listener to the Submit Button:

Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
Add a click event listener to this button, passing in the checkAnswer function as the callback to be executed when the button is clicked. Ensure you are not calling the checkAnswer function directly in the event listener (i.e., do not add () after the function name in the addEventListener call).

2. Build a Simple Calculator
For this task, let’s structure a simple calculator application. This application will perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

This task will help you apply fundamental JavaScript concepts to create an interactive web application.
HTML and CSS code structure provided. 

JavaScript Task Instructions
Objective: Implement the JavaScript to make the calculator operational. Each button should perform its respective arithmetic operation on the two input numbers and display the result.

JavaScript Implementation:

Implement Arithmetic Functions: Each arithmetic operation (add, subtract, multiply, divide) should have its own function. For example:
function add(number1, number2) {
    return number1 + number2;
}
Implement similar functions for subtraction, multiplication, and division.

Attach Event Listeners: For each operation button, add an event listener that calls the corresponding arithmetic function when clicked. Use the input values from the number fields as arguments for these functions. Display the result in the #calculation-result span.
Example for the addition button:

document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
Repeat similar steps to attach event listeners for the subtract, multiply, and divide buttons.

Ensure Input Validation: Convert input values to numbers (using parseFloat) to ensure the calculations are correct. Provide default values to handle empty inputs.
