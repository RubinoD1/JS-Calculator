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
//Will delete last entry vs. reset which will delete all 
const del = document.querySelector('#button-del');
const equal = document.querySelector('#button-equal'); 
const decimal = document.querySelector('#button-decimal');
const plus = document.querySelector('#button-plus');
const minus = document.querySelector('#button-minus');
const divide = document.querySelector('#button-divide');
const multiply = document.querySelector('#button-multiply');


// MIGHT BE UNNEEDED, button press triggers the value to be added to equation/output
//Assign DOM buttons their values
//let one = 1;
//console.log(one);

//EMPTY ARRAY- set functions to add assigned value to array
let input = []; 
//console.log(input);


//Equation test - Working, print array out and it will automatically solve (cannot be a string)
//let test = 1+2;
//console.log(test);




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