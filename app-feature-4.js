let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

let guessHistory = []

while(playGame(guessHistory)){}

function playGame(games){
    let solved = false;
    let guesses = 0;
    var user = prompt('Enter name');
    while(!solved){
        let guess = parseInt(prompt('Enter number between 1-10'));
        guessHistory.push(guess);
        guesses++;
        if(guess === secretNumber){
            solved = true;
            alert(`That's correct ${user}! And you beat your previous guesses were ${guessHistory}`);
        }else if(guess < secretNumber){
            alert(`Guess higher`)
        }else{
            alert(`Guess lower`)
        }
    }
    return false
}

