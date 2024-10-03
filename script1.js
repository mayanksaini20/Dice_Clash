'use strict';
//selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
let currentScore, activePlayer, score, playing;

const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");

    player0El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player1El.classList.remove('player--winner');

    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    playing = true;
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1.generate random no
        const dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. check for rolled 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch the player
            switchPlayer();
        }
    }
})

//hold functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        //1. add curent score to active player
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        //2.check if player's score is >=100
        //finish the game
        if (score[`${activePlayer}`] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //3 switch the player
            switchPlayer();
        }
    }
})

//reset functionality
btnNew.addEventListener('click', init)