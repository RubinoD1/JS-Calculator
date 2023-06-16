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

//EMPTY ARRAY- set functions to add assigned value to array
let input = []; 







//onClick event console.log button to test it is properly linked. 
btnOne.addEventListener('click', () => {
  //add button's value to array - REMEMBER, MDM documentation can help 
    input.push(`${btnOne.innerHTML}`); 
    console.log(input);
      //change to after value has been added to array and display the array's values on the front-end.
      //**Showing commas to seperate array items, need to figure out how to show as one string** 
      output.innerHTML = `<h1>${input}<h1>`;
      //trigger if statement below? 
      //inputFilter(input.lastChild)???, or dont push until it goes through filter. FILTER FIRST, THEN OUPTPUT?
     
}); 

//onClick event console.log button to test it is properly linked. 
plus.addEventListener('click', () => {
  //add button's value to array - REMEMBER, MDM documentation can help 
    input.push(`${plus.innerHTML}`); 
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
  output.innerHTML = '<h1>All clear<h1>';
}); 

//Delete function reference code - Delete all and Delete last- USE ARROW FUNCTION CHECK JS REPO
del.addEventListener('click', () => {
  input.pop();
  //**comment out console.log once calculator is fully functional** 
  console.log(input);
  // DISPLAY UPDATED EQUATION  
  output.innerHTML = `<h1>${input}<h1>`; 
}); 



//equal function 
equal.addEventListener('click', () => {
 // input will cointain full equation 
 console.log(input);
  // DISPLAY UPDATED EQUATION  
  output.innerHTML = `<h1>${input}<h1>`; 
}); 



