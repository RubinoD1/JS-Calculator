//DOM 
const output = document.querySelector('#output');//ID output is the HTML display for the calculator 

//three vars to take in user inputs that will make up the equation 
let num1 = undefined;//first number of the equation
let num2 = undefined;//second number of the equation 
let operator = undefined;//operator to set either +, - , *, or / --SEE README EXAMPLE

//checks for clicks in the document that have the class of btn and then passes it to the equation function if the class is present
document.onclick = function(event) {
 if(event.target.classList.contains('btn') && event.target.classList.contains('exception') !== true){ // check for class="btn"
    var target = event.target.innerHTML; 
    //console.log(target);
    equation(target);
  } else if (event.target.id === "button-equal" && num2 !== undefined){ //if equals btn is pressed and num2 is not undefined
    //console.log(num1 + operator + num2);
    equals();
  } 
};

//sort equation inputs
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
  if (operator === " + ") {
    let equation = +num1 + +num2;
    //console.log(equation);
    output.innerHTML = `${equation}`;//set equation sum to display in HTML
    num1 = output.innerHTML;//display inner.html is set to num1
    operator = undefined; //reset operator
    num2 = undefined;// reset num2
    //console.log(num1);
  } else if (operator === " - ") {
    let equation = +num1 - +num2;
    //console.log(equation);
    output.innerHTML = `${equation}`;//set equation sum to display in HTML
    num1 = output.innerHTML;//display inner.html is set to num1
    operator = undefined; //reset operator
    num2 = undefined;// reset num2
    //console.log(num1);
  } else if (operator === " * ") {
    let equation = +num1 * +num2;
    //console.log(equation);
    output.innerHTML = `${equation}`;//set equation sum to display in HTML
    num1 = output.innerHTML;//display inner.html is set to num1
    operator = undefined; //reset operator
    num2 = undefined;// reset num2
    //console.log(num1);
  } else if (operator === " / ") {
    let equation = +num1 / +num2;
    //console.log(equation);
    output.innerHTML = `${equation}`;//set equation sum to display in HTML
    num1 = output.innerHTML;//display inner.html is set to num1
    operator = undefined; //reset operator
    num2 = undefined;// reset num2
    //console.log(num1);
  } 
}








//console.log(+"1" + +"2"); equation with strings for two numbers



/* NOTES
//have numbers properly being added on to the end of the number vars
//equal triggers the equals function tot total up the three vars --cannot be used without values in all three vars
//delete is pop to remove last 
//reset clears all three vars 
*/

/* TO-DO
1) take in button press for all numbers and confirm in the console.log that it is being viewed as a number. 
2) combine two numbers 
3) successfully set operator 
4) get total of three vars 
5) display equation in proper format in HTML 
6) del button working 
7) reset button working
8) work on HTML/CSS 
9) README file 
*/