var target;            
var guess_input_text;   
var guess_input;      
var finished = false;   
var guesses = 0;
 colors=["aqua","black","cyan","green", "blue", "yellow", "red","purple"];
 
function do_game() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer;

    while (!finished) {
        guess_input = prompt("I am thinking of one of these colors: \n\n "+
                                  colors.toString()+"\n\n"+
                                  "What color am I thinking of?");
        
        guesses += 1;   
        finished = check_guess();
    }
}

function check_guess() {
   
    if (colors.indexOf(guess_input) == -1) {
        alert("Please enter an color in the list.");
        return false;
    }
    if (guess_input > colors[target]) {
        alert("Your color is higher!");
        return false;
    }
    if (guess_input < colors[target]) {
        alert("YYour color is lower!");
        return false;
    }
    alert("YCongratulations! "  + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the number!");
    return true;   
}