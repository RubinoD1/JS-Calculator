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





//onClick event console.log button to test it is properly linked. 
btnOne.addEventListener('click', () => {
  //add button's value to array - REMEMBER, MDM documentation can help 
    input.push(`${btnOne.value}`); 
    console.log(input);
      //change to after value has been added to array and display the array's values on the front-end.
      //**Showing commas to seperate array items, need to figure out how to show as one string** 
      output.innerHTML = `<h1>${input}<h1>`;
      
}); 


// RESET function 
reset.addEventListener('click', () => {
  output.innerHTML = '<h1><h1>';
  //ADD- delete all from array
}); 

/* Delete function reference code - Delete all and Delete last

// We can call methods such as remove ,this will remove .items (which is linked to ul above) from the HTML.  
//ul.remove();
// to remove the last item, instead of all 
//ul.lastElementChild.remove();
*/

/* looping noters - for array 

// looping through and logging each item 
items.forEach((item) => console.log(item));
*/