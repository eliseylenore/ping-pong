//back-end

var pingPongCount = function(userInput) {
  var userNumber = parseInt(userInput);
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //function to count from 1-userNumber
  var countUp = function(userInput) {
    var outputNumber = '';
    for (i = 1; i < userNumber ; i++) {
      console.log(i);
      if (i % 15 === 0) {
        outputNumber += "ping-pong" + " ";
      } else if (i % 5 === 0) {
        outputNumber += "pong" + " ";
      } else if (i % 3 === 0) {
        outputNumber += "ping" + " ";
      } else {
        outputNumber += i +  " ";
      }
      console.log(outputNumber);
    }
    return outputNumber;
  }
  //determines if input can be counted to
  if (userInput.search(/^[0-9]+$/)|| userNumber < 1) {
    return "I'm sorry, we weren't able to count up to that number. Please make sure that you are entering a number and it is more than zero. Also, please type the digit (3) instead of the word (three)."
  } else {
    return countUp(userInput);
  }

}




//front-end

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = pingPongCount(userInput);
    $("#result").text(result);
  })
});
