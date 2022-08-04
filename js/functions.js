//import read-only variables
import {ask, ask2, happy, unhappy} from "./variables.js";

//declare reusable read/write variable(s)
var response, answer;

//functions
function run(response) {
    response = prompt(ask);
    answer = response.toLowerCase();
    check(answer);
}

function check(answer) {
    if (answer == "yes") {
    printHappy();
} else {
    loop(answer);
    }
}

function loop(answer) { 
    do {  
        response = prompt(ask2);
        answer = response.toLowerCase();
        printUnHappy();        
    } while (answer != "yes");
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