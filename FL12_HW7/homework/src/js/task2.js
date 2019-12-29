let startGame;
let newGame = true;
let attempts = 0;
let attemptsQuantity = 3;
let randomNumber;
let userGuessNumber;
let range = 9;
let totalAmount = 0;
let divider = 2;
let four = 4;
let three = 3;
let two = 2;
let i;
let prize = {
    3: 100,
    2: 50,
    1: 25
}

startGame = confirm('Do you want to play a game?');
while (newGame === true) {
    if (startGame) {
        randomNumber = Math.floor(Math.random() * range);
        console.log('random ' + randomNumber);
        for (let i = 3; i > 0; i--) {
            userGuessNumber = parseInt(prompt(`Choose a roulette pocket number from 0 to ${range - 1} 
                                            \nAttempts left: ${attemptsQuantity}
                                            \nTotal prize: ${totalAmount}
                                            \nPossible prize on current attempt: ${prize[i]}$`));
            console.log('user ' + userGuessNumber);
            console.log('attemptsQuantity ' + attemptsQuantity);
            if (randomNumber === userGuessNumber && attemptsQuantity === three) {
                totalAmount += prize[i];
                break;
            } else if (randomNumber === userGuessNumber && attemptsQuantity === two) {
                totalAmount += prize[i];
                break;
            } else if (randomNumber === userGuessNumber && attemptsQuantity === 1) {
                totalAmount += prize[i];
                break;
            }
            attemptsQuantity--;
        }

        if (randomNumber !== userGuessNumber) {
            alert(`Thank you for your participation. Your prize is: ${totalAmount} $`);
            newGame = confirm('Play again?');
        } else if (randomNumber === userGuessNumber) {
            newGame = confirm(`Congratulation, you won!   Your prize is: ${totalAmount} $. \nDo you want to continue?`);
        }
        if (!newGame) {
            alert(`Thank you for your participation. Your prize is: ${totalAmount} $`);
        } else {
            for (let i = 3; i > 0; i--) {
                prize[i] = prize[i] * two;
                console.log(prize[i]);
            }
            range = range + four;
            attemptsQuantity = three;
        }
    } else {
        alert('You did not become a billionaire, but can.');
        newGame = false;
    }
}
