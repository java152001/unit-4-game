var randomTotal
var playerTotal;
var crystalOne;
var crystalTwo;
var crystalThree;
var crystalFour;

var wins = 0;
var losses = 0;

reset();

$("#record").html("<h2>Wins: 0 Losses: 0</h2>");

$("#crystal1").on("click", function() {
    playerTotal = playerTotal + crystalOne;
    $("#playerNumber").html("<h2>Your current number: " + playerTotal + "</h2>");
    $("#resultDeclare").html("");
    scoreCheck();
});

$("#crystal2").on("click", function() {
    playerTotal = playerTotal + crystalTwo;
    $("#playerNumber").html("<h2>Your current number: " + playerTotal + "</h2>");
    $("#resultDeclare").html("");
    scoreCheck();
});

$("#crystal3").on("click", function() {
    playerTotal = playerTotal + crystalThree;
    $("#playerNumber").html("<h2>Your current number: " + playerTotal + "</h2>");
    $("#resultDeclare").html("");
    scoreCheck();
});

$("#crystal4").on("click", function() {
    playerTotal = playerTotal + crystalFour;
    $("#playerNumber").html("<h2>Your current number: " + playerTotal + "</h2>");
    $("#resultDeclare").html("");
    scoreCheck();
});

function scoreCheck() {
    if (playerTotal === randomTotal) {
        reset();
        wins++;
        $("#resultDeclare").html("<h1>Winner!</h1>");
        $("#record").html("<h2>Wins: " + wins + " Losses: " + losses + "</h2>");
    }
    else if (playerTotal > randomTotal) {
        reset();
        losses++;
        $("#resultDeclare").html("<h1>Winner!</h1>");
        $("#record").html("<h2>Wins: " + wins + " Losses: " + losses + "</h2>");
    }
}

function reset() {
    randomTotal = Math.floor(Math.random() * 102) + 19;
    playerTotal = 0;
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    $("#randomNumber").html("<h2>Number to Guess: " + randomTotal + "</h2>");
    $("#playerNumber").html("<h2>Your current number: 0</h2>");
}





