# Dice Clash

**Dice Clash** is an engaging two-player dice game built using **HTML**, **CSS**, and **JavaScript**. The goal is simple—players take turns rolling a dice to accumulate points, aiming to be the first to reach 100 points. This project was developed to strengthen skills in web development, particularly in dynamic DOM manipulation and interactive UIs.

## Features

- **Two-Player Turn-Based Gameplay**: The game consists of two players. In each turn, a player rolls the dice. The rolled number is added to the current score of that player unless they roll a 1. When a 1 is rolled, their turn ends, and no points are added. Players can strategically "hold" their score to accumulate points and pass the turn to the opponent.
  
- **Interactive Dice Rolling Mechanism**: Players can roll the dice by clicking the "Roll Dice" button, which dynamically displays the dice result. The game logic prevents players from continuing after they roll a 1 or once the game has been won.

- **Score Holding Feature**: Players can click the "Hold" button to save their accumulated points to their total score, preventing the risk of losing those points by rolling a 1.

- **Winning Condition**: The game ends when one of the players reaches or exceeds 100 points. The winner is displayed with a highlight, and the game can be restarted at any time using the "New Game" button.

- **Smooth UI Transitions**: The user interface features smooth transitions for active players, clear score updates, and dynamic feedback when the game is won or lost.

## User Interface (UI)

- **Modern, Minimalistic Design**: The UI is kept simple and clean to ensure the focus remains on the gameplay. It uses a combination of minimalist design principles with vibrant colors and smooth animations to provide an engaging user experience.

- **Player Panels**: Each player has a dedicated panel showing their current score and their accumulated score. The active player’s panel is visually highlighted to indicate whose turn it is.

- **Dice Visuals**: The dice image updates based on the result of each roll, adding a visual dynamic to the gameplay.

- **Responsive Layout**: The layout of the game automatically adjusts to different screen sizes, offering an equally enjoyable experience on both mobile devices and desktop screens.

## Getting Started

Follow these steps to run **Dice Clash** locally on your machine:

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/dice-clash.git
