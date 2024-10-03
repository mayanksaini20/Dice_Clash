'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();



const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}



//rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1.generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //2.display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3.check for rolled 1 :
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;

            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            //switch  to  next player
            // switchPlayers();

            switchPlayer();
        }

    }
})


//Hold Functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        //1 adding currentscore to the activeplayer score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }

    }
});

//  Resetting the Game
btnNew.addEventListener('click', init);

// resetting the game
// btnNew.addEventListener('click', function () {

//     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//     document.querySelector(`#score--${activePlayer}`).textContent = 0;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;

//     const pl = activePlayer === 0 ? 1 : 0;

//     document.querySelector(`#score--${pl}`).textContent = 0;
//     document.getElementById(`current--${pl}`).textContent = 0;

//     activePlayer = 0;
//     document.querySelector(`.player--0`).classList.add('player--active');
//     playing = true;
//     scores[0] = scores[1] = 0;
//     currentScore = 0;

// });
