    // makes sure document is ready before running script
    $(document).ready(function() {

    // create an array of words 
    var words = ["mango", "banana", "cheese", "pistachio", "shrimp", 
                "lemon", "broccoli", "squash", "avocado", "popsicle", 
                "kiwi", "pancake", "cauliflower", "strawberry", "coconut", 
                "cucumber", "carrot", "oatmeal", "almond", "kale"];
    
    //variables for wins, losses, guesses remanining and user options
    var win = 0;
    var loss = 0;
    
    //creates variables that reference html in order to display things
    var userChoiceText = $("#userchoice-text");
    var computerChoiceText = $("#computerchoice-text");
    var winsText = $("#wins-text");                                                                                                                                                                                                                                                
    var lossesText = $("#losses-text");
    var remainingText = $("#remaining-text");

    // pick a random word from array
    var chosenWord = words[Math.floor(Math.random() * words.length)];
    var guessesLeft = chosenWord.length + 5;
    var splitChosenWord = chosenWord.split('');

    console.log(chosenWord);

    // Show how many letters there are in the word
    var answerArray = [];
    for (var i = 0; i < chosenWord.length; i++) {
        answerArray[i] = "_";
        computerChoiceText.append("<span class=" + chosenWord[i] + ">" + answerArray[i] + "</span>");
    }

    // begins function to recognize users letter choice
    document.onkeyup = function(event) { 
        var userGuess = event.key;
        $("#userchoice-text").append(" " + userGuess);
        $("#remining-text").append(guessesLeft);
        console.log(guessesLeft);

    //if userGuess is within the word array, split character & reaveal within word
        splitChosenWord.forEach(function(letter) {
            if (userGuess === letter) {
                $('.' + letter).html(letter);
            }
              
            // define else statement to subtract from number of guesses remaining if letter guessed is not within array
            //  if (userGuess !== letter) {
            //     guessesLeft = --1;
            // }    
      
        });

    // if/else statement to track wins & losses
    // if word is guessed before guessesLeft = 0 add a win
    // else word is not guessed before guessesLeft = 0 add loss

        //  if (complete === true && guessesLeft > 0) {
        //     wins++;
        // }
        // else {
        //     losess++;
        // } 


    //on button click, generate new word, but keep win and loss data intact 
    $(".reset").on("click", function() {
        $("#computerchoice-text").empty();
        $("reamining-text").empty();
         $("userchoice-text").empty();
        })


    }    

});