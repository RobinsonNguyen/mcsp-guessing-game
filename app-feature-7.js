let secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

let games = {}

while(playGame(games)){}

function playGame(games){
    let solved = false;
    let guesses = 0;
    var literaluser = prompt('Enter name');
    let user = literaluser.toLowerCase()
    let playingAgain = alreadyPlayed(user, games);
    while(!solved){
        let guess = parseInt(prompt('Enter number between 1-10'));
        guesses++;
        if(guess === secretNumber){
            solved = true;
            if(playingAgain && guesses < games[user]){
                var attempt = games[user] - guesses
                alert(`That's correct ${literaluser}! And you beat your previous attempt by ${attempt}`);
            }else{
                alert(`Thats right, ${literaluser}, you got it in ${guesses}`);
                games[user] = guesses;
            }
        }else if(guess < secretNumber){
            alert(`Sorry ${literaluser}, guess higher`)
        }else {
            alert(`Sorry ${literaluser}, guess lower`)
        }   
    }
    var again = prompt('Do you wanna play again?')
    if(again.toLowerCase() === 'yes')
        return true
    return false
}
function alreadyPlayed(user, games){
    if(typeof games[user] === undefined){
        games[user] = 0;
        return false;
    }
    return true;
}

