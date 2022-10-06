//variables for moment.js
var currentDate = document.querySelector('.current-date');
var currentTime = document.querySelector('.current-time');

//variables for each time block/box
const saveButton1 = document.querySelector('#submit-btn-1');
const userInput1 = document.querySelector('#event-input-1');
const saveButton2 = document.querySelector('#submit-btn-2');
const userInput2 = document.querySelector('#event-input-2');
const saveButton3 = document.querySelector('#submit-btn-3');
const userInput3 = document.querySelector('#event-input-3');
const saveButton4 = document.querySelector('#submit-btn-4');
const userInput4 = document.querySelector('#event-input-4');
const saveButton5 = document.querySelector('#submit-btn-5');
const userInput5 = document.querySelector('#event-input-5');
const saveButton6 = document.querySelector('#submit-btn-6');
const userInput6 = document.querySelector('#event-input-6');
const saveButton7 = document.querySelector('#submit-btn-7');
const userInput7 = document.querySelector('#event-input-7');
const saveButton8 = document.querySelector('#submit-btn-8');
const userInput8 = document.querySelector('#event-input-8');
const saveButton9 = document.querySelector('#submit-btn-9');
const userInput9 = document.querySelector('#event-input-9');
const saveButton10 = document.querySelector('#submit-btn-10');
const userInput10 = document.querySelector('#event-input-10');


//functionality for displaying current date & time
var currentDate = moment().format("ddd MMM Do, YYYY")
$('.current-date').text(currentDate);

var currentTime = moment().format("hh:mm a")
$('.current-time').text(currentTime);


//functionality for save button & local storage per each time block
//8:00am time block
saveButton1.addEventListener('click', function() {
    localStorage.setItem('userInput1', userInput1.value);
});
userInput1.value = localStorage.getItem('userInput1');

//9:00am time block 
saveButton2.addEventListener('click', function() {
    localStorage.setItem('userInput2', userInput2.value);
});
userInput2.value = localStorage.getItem('userInput2');

//10:00am time block 
saveButton3.addEventListener('click', function() {
    localStorage.setItem('userInput3', userInput3.value);
});
userInput3.value = localStorage.getItem('userInput3');

//11:00am time block 
saveButton4.addEventListener('click', function() {
    localStorage.setItem('userInput4', userInput4.value);
});
userInput4.value = localStorage.getItem('userInput4');

//12:00pm time block
saveButton5.addEventListener('click', function() {
    localStorage.setItem('userInput5', userInput5.value);
});
userInput5.value = localStorage.getItem('userInput5');

//1:00pm time block
saveButton6.addEventListener('click', function() {
    localStorage.setItem('userInput6', userInput6.value);
});
userInput6.value = localStorage.getItem('userInput6');

//2:00pm time block 
saveButton7.addEventListener('click', function() {
    localStorage.setItem('userInput7', userInput7.value);
});
userInput7.value = localStorage.getItem('userInput7');

//3:00pm time block
saveButton8.addEventListener('click', function() {
    localStorage.setItem('userInput8', userInput8.value);
});
userInput8.value = localStorage.getItem('userInput8');

//4:00pm time block 
saveButton9.addEventListener('click', function() {
    localStorage.setItem('userInput9', userInput9.value);
});
userInput9.value = localStorage.getItem('userInput9');

//5:00pm time block
saveButton10.addEventListener('click', function() {
    localStorage.setItem('userInput10', userInput10.value);
});
userInput10.value = localStorage.getItem('userInput10');


//functionality for color coding each time block based on the current time (to be added)
