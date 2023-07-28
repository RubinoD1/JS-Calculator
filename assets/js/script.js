//DOM 
const output = document.querySelector('#output');//ID output is the HTML display for the calculator 

//three vars to take in user inputs that will make up the equation 
let num1 = undefined;//first number of the equation
let num2 = undefined;//second number of the equation 
let operator = undefined;//operator to set either +, - , *, or / 

//checks for clicks in the document that have the class of btn and then passes it to the equation function if the class is present
document.onclick = function(event) {
 if(event.target.classList.contains('btn') && event.target.classList.contains('exception') !== true){ // check for class="btn"
    var target = event.target.innerHTML; 
    equation(target);
  } else if (event.target.id === "button-equal" && num2 !== undefined){ //if equals btn is pressed and num2 is not undefined
    equals();
  } else if (event.target.id === "reset" && num1 !== undefined) {//reset button to clear all equation vars (num1, num2, operator)
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    output.innerHTML = 0;//sets HTML output to 0 after reset
  } else if (event.target.id === "button-del" && num1 !== undefined) { 
    deleteInput ();
  }
};

//function to sort equation values
function equation(target) {
    if (isNaN(target) === false && num1 === undefined){ //taget is a number and num1 is undefined
      num1 = target;
      return output.innerHTML = `${num1}`;//output to HTML
  } else if (isNaN(target) === false && num1 !== undefined && operator === undefined){//target is a number, num1 isn't undefined and operator is undefined
      num1 = num1 + target;
      return output.innerHTML = `${num1}`;//output to HTML
  } else if (target === "." && num1 === undefined){//decimal added to num1
      num1 = 0 + target;
      return output.innerHTML = `${num1}`;//output to HTML
  } else if (target === "." && num1.includes(".") === false && num1 !== undefined && operator === undefined){//decimal added to num1 if no decimal already in string and operator undefined
      num1 = num1 + target;
      return output.innerHTML = `${num1}`;//output to HTML
  } else if (isNaN(target) === true && num1 !== undefined && operator === undefined && target !== "."){//target isNaN, num1 is not undefined, operator is undefined, and target is not a decimal
      operator = target;
      return output.innerHTML = `${num1}` + `${operator}`;//output to HTML
  } else if (isNaN(target) === false && operator !== undefined && num2 === undefined){ //target is a number, operator is not undefined, and num2 is undefined
      num2 = target;
      return output.innerHTML = `${num1}` + `${operator}` + `${num2}`;//output to HTML
  } else if (isNaN(target) === false && num2 !== undefined) { //target is number and num2 is not undefined
      num2 = num2 + target;
      return output.innerHTML = `${num1}` + `${operator}` + `${num2}`;//output to HTML
  } else if (target === "." && operator !== undefined && num2 === undefined) {//target is decimal, operator is not undefined, and num2 is undefined
      num2 = target;
      return output.innerHTML = `${num1}` + `${operator}` + `${num2}`;//output to HTML
  } else if (target === "." && operator !== undefined  &&  num2 !== undefined && num2.includes(".") === false) {//target is decimal, operator is not undefined, num2 is not undefined, and num2 doesn't cointain a decimal
      num2 = num2 + target;
      return output.innerHTML = `${num1}` + `${operator}` + `${num2}`;//output to HTML
  }
}

//function equal button -- only works if num2 has a value 
function equals() {
  let equation = "";
  if (operator === " + ") {
      equation = +num1 + +num2;
  } else if (operator === " - ") {
      equation = +num1 - +num2;
  } else if (operator === " * ") {
      equation = +num1 * +num2;
  } else if (operator === " / ") {
      equation = +num1 / +num2;
  } 
    //console.log(equation);
    output.innerHTML = `${equation}`;//set equation sum to display in HTML
    num1 = output.innerHTML;//display inner.html is set to num1
    operator = undefined; //reset operator
    num2 = undefined;// reset num2
}

//removes last input
function deleteInput() {
  if (num1 !== undefined && operator === undefined && num1.length === 1) {//if num1 has a value, operator is undefined, and num1 has a string length of 1
    num1 = undefined
    return output.innerHTML = 0; //equation empty, output 0 to HTML 
  } else if (num1 !== undefined && operator === undefined && num1.length > 1) {//if num1 has a string.length greater than 1 and operator is undefined
    num1 = num1.slice(0, -1);//using slice to reduce the string length by 1
    return output.innerHTML = `${num1}`; // output to HTML 
  } else if(num2 === undefined && operator !== undefined) {//operator not undefined and num2 is undefined
    operator = undefined; 
    return output.innerHTML = `${num1}`; // output to HTML
  } else if (num2 !== undefined && num2.length === 1){//num2 is not undefined and has a string.length of 1 
    num2 = undefined;
    return output.innerHTML = `${num1}` + `${operator}`;//output to HTML
  } else if (num2 !== undefined && num2.length > 1){//num2 is not undefined and string.length greater than 1
    num2 = num2.slice(0, -1);//using slice to reduce the string length by 1
    return output.innerHTML = `${num1}` + `${operator}` + `${num2}`;//output to HTML
  }
}






/* TO-DO
8) work on HTML/CSS 
- remove unneeded id's from HTML 
- improve layout and check breakpoints
9) README file 
- markdown badges 
- screenshots 
- describe functionality 
10) GitHub repo has about description and proper tags
- MIT liscence
11) clean up JS code comments and double check code is in a clean format
12) make sure notes.js is deleted 
*/