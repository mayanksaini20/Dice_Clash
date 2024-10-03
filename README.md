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

### 2. Navigate to the Project Directory

Move into the project folder:

```bash
cd dice-clash

### 3. Open in Browser
Open the index.html file in your preferred web browser to start playing the game:

- You can simply double-click on index.html or right-click and select "Open with" to choose your browser.


## Technologies Used
- **HTML5**: Provides the structure of the game and player panels.
- **CSS3 (with Google Fonts)**: Creates a clean, attractive layout and responsive design, including animations for player turns and score updates.
- **JavaScript (ES6)**: Powers the game’s logic, including dice rolls, score updates, player switching, and the win condition.
- **Git/GitHub**: Used for version control and code collaboration.

## Contributing

We welcome contributions from developers who want to improve the game! Here's how you can contribute:

1. **Fork the repository**: Click on the "Fork" button at the top-right corner of this page to create a copy of the repository in your GitHub account.

2. **Create a new branch for your feature or bug fix**: In your forked repository, create a new branch to isolate your changes:
   ```bash
   git checkout -b feature-name

3. **Make your changes and commit them**: After making the necessary changes, commit them with a descriptive message:
    ```bash
    git commit -m "Add some feature"

4. **Push the changes to your branch**: Push your committed changes to the branch in your forked repository:
    ```bash
    git push origin feature-name

5. **Open a pull request**: Go back to the original repository, click on the "Pull Requests" tab, and then click "New Pull Request." Select your branch, describe the changes you’ve made, and submit your pull request.

Feel free to submit pull requests, suggest new features, or report bugs. All contributions are appreciated!
