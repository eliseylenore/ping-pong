//back-end




//front-end

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var result = pingPongCount(userInput);
    $("#result").text(result);
  })
});
