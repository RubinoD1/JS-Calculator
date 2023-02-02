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


//sample decimal
//decimal, even though this is a decimal, there is no float or data type in JavaScript; this is just a number. 
//const rating = 4.5;

//Assign DOM buttons their values
btnOne.value = 1;
//will need to convert the string for arithmetic
plus.value = "+"; 
//check type of value (is #?)
//console.log(plus.value);

//EMPTY ARRAY- set functions to add assigned value to array
let input = []; 
//console.log(input);


//Equation test - Working, print array out and it will automatically solve (cannot be a string)
//let test = 1+2;
//console.log(test);


//IF statement testeting - num combine, odd num interger even or equation wont work
//MAKE second function to check even odd is proper input, or let user hang themselves and give error message at end. 
/*
var inputFilter = () {
  if input.lastChild is NUM && input is NUM 
  then combine, deletelastchild, and push new value 
}



*/


//onClick event console.log button to test it is properly linked. 
btnOne.addEventListener('click', () => {
  //add button's value to array - REMEMBER, MDM documentation can help 
    input.push(`${btnOne.value}`); 
    console.log(input);
      //change to after value has been added to array and display the array's values on the front-end.
      //**Showing commas to seperate array items, need to figure out how to show as one string** 
      output.innerHTML = `<h1>${input}<h1>`;
      //trigger if statement below? 
      //inputFilter(input.lastChild)???, or dont push until it goes through filter. FILTER FIRST, THEN OUPTPUT?
}); 


// RESET function 
reset.addEventListener('click', () => {
  // reset array to empty 
  input = [];
  console.log(input);
}); 

//Delete function reference code - Delete all and Delete last- USE ARROW FUNCTION CHECK JS REPO
del.addEventListener('click', () => {
  input.pop();
  //**comment out console.log once calculator is fully functional** 
  console.log(input);
  // DISPLAY UPDATED EQUATION  
  output.innerHTML = `<h1>${input}<h1>`; 
}); 


/* looping noters - for array 

// looping through and logging each item 
items.forEach((item) => console.log(item));
*/

/* console.log type of value

// If we want to test these types, we can use console.log and typeof and the name of the variable, as shown below. 
console.log(typeof age);

*/