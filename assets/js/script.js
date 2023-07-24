//DOM 
//ID output is the HTML display for the calculator 


//three vars to take in user inputs that will make up the equation 
let num1 = undefined;//first number of the equation
let num2 = undefined;//second number of the equation 
let operator = undefined;//operator to set either +, - , *, or / --SEE README EXAMPLE

//checks for clicks in the document that have the class of btn and then passes it to the equation function if the class is present
document.onclick = function(event) {
 if(event.target.classList.contains('btn')){ // check for class="btn"
    var target = event.target.innerHTML; 
    //console.log(target);
    equation(target);
  } else { //ADD BASE CASE? or leave as is? 
    //console.log("False");
  } 
};

/*target is passed in and then values are sorted
function equation(target) {
  //console.log(Number(target));
  if (isNaN(target) === false){
    console.log("A Number");
  } else if (isNaN(target) === true){
    console.log("is NaN");
  }
}
*/

function equation(target) {
  //console.log(Number(target));
  if (isNaN(target) === false && num1 === undefined){ //taget is a number and num1 is undefined
    //console.log("A Number");
    num1 = target;
    console.log(num1);
    return; //or got to display function || set display here for the HTML
  } else if (isNaN(target) === false && num1 !== undefined && operator === undefined){//target is a number, num1 isn't undefined and operator is undefined
    console.log("adding onto num1");
    num1 = num1 + target;
    console.log(num1);
    return; //or got to display function || set display here for the HTML
  } else if (isNaN(target) === true && num1 !== undefined && operator === undefined){//target isNaN, num1 is not undefined, and operator is undefined
    console.log("is NaN");
    operator = target;
    console.log(operator);
    return; //or got to display function || set display here for the HTML
  } else if (isNaN(target) === false && operator !== undefined && num2 === undefined){ //target is a number, operator is not undefined, and num2 is undefined
    num2 = target;
    console.log(num2 + " is number 2");
    return; //or got to display function || set display here for the HTML
  } else if (isNaN(target) === false && num2 !== undefined) { //target is number and num2 is not undefined
    console.log("adding onto num2");
    num2 = num2 + target;
    console.log(num2);
    return; //or got to display function || set display here for the HTML
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