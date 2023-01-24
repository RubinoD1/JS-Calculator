//DOM linked to each button and one for display output 
const output = document.querySelector('#output');

const btnOne = document.querySelector('#button-one');
const btnTwo = document.querySelector('#button-two');
const btnThree = document.querySelector('#button-three');
const btnFour = document.querySelector('#button-four');
const btnFive = document.querySelector('#button-five');
const btnSix = document.querySelector('#button-six');
const btnSeven = document.querySelector('#button-seven');
const btnEight = document.querySelector('#button-eight');
const btnNine = document.querySelector('#button-nine');
const btnZero = document.querySelector('#button-zero');

const reset = document.querySelector('#reset');


//Assign DOM pair to a its buttons value 


// Output is undefined 



//onClick event console.log button to test it is properly linked. 
btnTwo.addEventListener('click', () => {
    //the default behavior is that we are submitting on click (which flashes click for a sec in the console.log). 
    // To prevent the default behavior of the submit btn we take the event paramter and use preventDefault and call that method ()
    //e.preventDefault();
    output.innerHTML = '<h1>Click<h1>';
}); 


// RESET function 
reset.addEventListener('click', () => {
  output.innerHTML = '<h1><h1>';
}); 