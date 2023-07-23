//DOM 
//ID output is the HTML display for the calculator 


//three vars to take in user inputs that will make up the equation 
let num1 = undefined;//first number of the equation
let num2 = undefined;//second number of the equation 
let operator = undefined;//operator to set either +, - , *, or / --SEE README EXAMPLE

//checks for clicks in the document that have the class of btn and then passes it to the equation function if the class is present
document.onclick = function(event) {
 if(event.target.classList.contains('btn')){ // check for class="btn"
    var target = event.target;
    //console.log("true");
    equation(target);
  } else {
    //console.log("False");
  } 
};

//target is passed in and then values are sorted
function equation(target) {
  //console.log("Passed to equation function!");
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