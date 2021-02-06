


var youLose = 0;
var youWin = 0;
var noWinner = 0;
var choices = ['R', 'P', 'S']

function rpsGame() {

var humUser = window.prompt('Enter P, R, or S');
console.log(humUser);
var index = Math.floor(Math.random()*3);

var compUser = choices[index];

if(humUser === compUser) {
    noWinner++
    alert('It is a tie!');
}else if ((humUser == 'R' && compUser == 'S') || 
(humUser == 'S' && compUser == 'P') || 
(humUser == 'P' && compUser == 'R')) {
    youWin++
    alert('You win!');
} else {
    youLose++
    alert('You lost!');
}

alert("Wins: " + youWin + " Looses: " +youLose + " ties: " + noWinner);

var playAgain = window.confirm("Do you want to play again");
if(playAgain)
rpsGame();
}


rpsGame();
