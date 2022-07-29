//import read-only variables
import {ask, ask2, happy, unhappy} from "./variables.js";

//declare reusable read/write variable(s)
var response;

//functions
function run(response) {
    response = prompt(ask);
    check(response);
}

function check(response) {
    if (response == "yes") {
    printHappy();
} else {
    loop(response);
    }
}

function loop(response) { 
    do {  
        response = prompt(ask2);
        printUnHappy();        
    } while (response == "no");
 printHappy();
}

function printHappy() {
      console.log(happy);
      document.getElementById("btn").innerHTML = happy;
}

function printUnHappy() {
      console.log(unhappy);
      document.getElementById("btn").innerHTML = unhappy;
}

//export functions
export {run, check, loop, printHappy, printUnHappy};