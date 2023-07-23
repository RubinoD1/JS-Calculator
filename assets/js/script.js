//DOM 
//ID output is the HTML display for the calculator 


//three vars to take in user inputs that will make up the equation 
let num1 = undefined;//first number of the equation
let num2 = undefined;//second number of the equation 
let operator = undefined;//operator to set either +, - , *, or / --SEE README EXAMPLE

//create check if click has type=button and then pass target into equation function 
document.onclick = function(event) {
  var target = event.target;
  console.log(typeof target.innerHTML);
};

document.onclick = function(event) {
  //if event has type of button make target the value of event and pass into equation function
  if(target)
  var target = event.target;
  console.log(typeof target.innerHTML);
};

function equation(target) {
  
}



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