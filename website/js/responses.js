function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

    if (input == "delivery") {
        return "Sorry but we dont sell any products yet!";
    } else if (input == "appointments") {
        return "Click on the Disease Detector button above and it will take you to our disease detector portal where you can use the disease detector";
    } else {
        return "Try asking something else!";
    }





}