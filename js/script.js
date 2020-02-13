/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Where's the Action  - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons by id for event listener assignment - You can ignore these */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');


/* Variable to store NodeList of DOM buttons - You'll use this */
const buttons = document.querySelectorAll('.control-btn');

// Helpful log statement
console.log(buttons);
console.log(`length of buttons: ${buttons.length}`);

// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function called `setAction` and give it a parameter called `event`.  Inside the function's code block:
function setAction(event){
  console.log(`setAction function is called`);
  // 1a. Loop over the `buttons` variable above
  for(let i = 0; i<buttons.length; i++){
    // 1aa. Inside the loop, use `.classList.remove()` to remove the 'active' class name from all buttons
    console.log(`in first loop`);
    console.log(`loop index: ${i}`);
    //For testing purpose
    event.target.style.color = 'red';
    buttons[i].classList.remove('active');
  }
  // 1b. After the loop, create a variable and set it equal to `event.target`
  let buttonTarget = event.target;

  // 1d. Then use `.classList.add()` to add the 'active' class name to the `event.target` variable you just created
  buttonTarget.classList.add('active');
  //For testing purpose to see which button is active
  buttonTarget.style.color= 'green';
}
// 2. Call the `setAction()` function in the callbacks of the event listeners below, being sure pass in the event argument



/**
 * Event listeners for buttons - Invoke your `setAction()` function in the body of the callbacks in the event listeners below
 */

/* btn1 listener */
btn1.addEventListener('click', (event) => {

  // Invoke your `setAction()` function here - Arguments: event

  setAction(event);
  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', (event) => {

  // Invoke your `setAction()` function here - Arguments: event
  setAction(event);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', (event) => {

  // Invoke your `setAction()` function here - Arguments: event
  setAction(event);

  // Helpful log statement to test function
  console.log('Third button is functional!');
});