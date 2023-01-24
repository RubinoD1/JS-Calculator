//DOM linked to each button and one for display output 
const output = document.querySelector('#output');

const btnOne = document.querySelector('#button-one');




//Assign DOM pair to a its buttons value 


// Output is undefined 



//onClick event console.log button to test it is properly linked. 
btnOne.addEventListener('click', () => {
    //the default behavior is that we are submitting on click (which flashes click for a sec in the console.log). 
    // To prevent the default behavior of the submit btn we take the event paramter and use preventDefault and call that method ()
    //e.preventDefault();
    output.innerHTML = '<h1>Click<h1>';

}); 