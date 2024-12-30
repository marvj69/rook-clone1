# Rook Game Scoring App

![Rook Game](https://example.com/rook-game-image.png)

**Rook Game Scoring App** is a web-based application designed to help players track and manage their scores effortlessly during a game of Rook. Whether you're playing casually with friends or engaging in competitive matches, this app provides a seamless and intuitive interface to ensure accurate scorekeeping and game management.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Starting a New Game](#starting-a-new-game)
  - [Entering Bids and Points](#entering-bids-and-points)
  - [Win Conditions](#win-conditions)
  - [Saving and Freezing Games](#saving-and-freezing-games)
  - [Viewing History](#viewing-history)
- [Code Structure](#code-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Team Selection:** Choose between "Us" and "Dem" teams to track scores individually.
- **Bid Management:** Select preset bids or enter custom bid amounts divisible by 5.
- **Points Entry:** Input points earned by the bidding team and the opposing team with validations.
- **Win Conditions:** Automatically determine the winner based on bids, points thresholds, and point spreads.
- **History Tracking:** View a comprehensive history of all rounds, including bids and score changes.
- **Saved Games:** Save completed games for future reference.
- **Freezer Games:** Freeze ongoing games to pause and resume later without losing progress.
- **Undo Functionality:** Revert the last round in case of input errors.
- **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
- **Accessibility:** Designed with accessibility in mind, including keyboard navigation and ARIA attributes.

## Demo

![App Screenshot](https://example.com/app-screenshot.png)

*Note: Replace the image URLs with actual screenshots of your application.*

## Technologies Used

- **HTML5 & CSS3:** Structure and styling of the application.
- **JavaScript (ES6):** Core functionality and interactivity.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Web App Manifest:** Enables the app to be installable on supported devices.
- **Service Workers:** Facilitates offline capabilities and caching for a better user experience.

## Getting Started

Follow these instructions to set up and run the Rook Game Scoring App on your local machine.

### Prerequisites

- **Web Browser:** Latest versions of Chrome, Firefox, Safari, or Edge.
- **Local Server (Optional):** For full functionality, especially with service workers, it's recommended to run the app on a local server.

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/rook-game-scoring-app.git
Navigate to the Project Directory:
cd rook-game-scoring-app
Install Dependencies:
Since the app uses Tailwind CSS via CDN, there are no additional dependencies to install. However, if you plan to modify the styles or extend the functionality, consider setting up a build process with Tailwind.
Running the Application
You can run the application locally by opening the index.html file in your preferred web browser.

Using a Local Server:

For full functionality (e.g., service workers), it's recommended to use a local server.

Using VS Code Live Server Extension:
Install the Live Server extension.
Open the project in VS Code.
Right-click on index.html and select Open with Live Server.
Using Python's SimpleHTTPServer:
# For Python 3.x
python -m http.server 8000
Then, navigate to http://localhost:8000 in your web browser.
Usage

Starting a New Game
Open the App:
Launch the application in your web browser.
View Saved Games:
Click on the View Saved Games button to access previously saved or frozen games.
Start a New Game:
If no game is in progress, the app initializes a new game automatically.
To manually start a new game, click on the New Game button (visible after a game concludes).
Entering Bids and Points
Select Bidding Team:
Click on either the Us or Dem team card to designate the bidding team for the round.
Select Bid Amount:
Choose a preset bid from the available options or select Other to enter a custom bid.
Validation: The bid must be a number divisible by 5 and either ≤180 or exactly 360.
Enter Points:
After selecting the bid, input the points earned by the bidding team and the opposing team.
Validation: Points must be numbers divisible by 5, within the range of 0-180 or exactly 360, and cannot be negative.
Submit:
Click the Submit button to record the round. The app will automatically update the scores and check for win conditions.
Win Conditions
The app automatically determines the winner based on the following conditions:

Reaching 500 Points:
If the bidding team reaches or exceeds 500 points and either meets their bid or the opposing team fails to meet their bid, the bidding team wins.
Opposing Team Reaches 500 Points:
If the bidding team fails to meet their bid and the opposing team reaches or exceeds 500 points, the opposing team wins.
Point Spread:
If the point difference between the two teams reaches or exceeds 1000 points, the team with the higher score wins.
Upon meeting any win condition, an alert notifies the players, and the game concludes.

Saving and Freezing Games
Save a Game:
After completing a game, you can save it by entering player names. The game will appear in the Saved Games section for future reference.
Freeze a Game:
Click on the Freeze Game button to pause the current game. Provide a name for the frozen game, which will be stored in the Freezer Games section. You can later load and resume the frozen game.
Viewing History
The History card displays a chronological list of all rounds, showing the bids and the running totals for both teams. This provides a clear overview of the game's progression.
Code Structure

The application is built using a single HTML file with embedded JavaScript. Below is an overview of the main components:

HTML Structure:
<head>: Contains metadata, links to the Web App Manifest, favicon, Tailwind CSS via CDN, and custom styles.
<body>: Comprises the main app container, modals for saved games, and embedded JavaScript.
JavaScript Functionality:
State Management:
Utilizes a state object to keep track of the game's current status, including rounds, bids, points, and game over conditions.
Utility Functions:
Local Storage Management: Functions to get, set, and delete games from localStorage.
Validation Functions: validateBid and validatePoints ensure input integrity.
State Update Function: updateState manages state changes and triggers re-rendering.
Event Handlers:
Handle user interactions such as selecting teams, bids, entering points, submitting forms, undoing rounds, and managing saved/freezer games.
Rendering Functions:
Dynamically generate and update the UI based on the current state, including team cards, round information, score inputs, history, and game over overlays.
Accessibility Features:
Includes keyboard navigation support, ARIA attributes, and focus management for modals.
Styling:
Leveraging Tailwind CSS for rapid and responsive UI development.
Custom animations and transitions enhance the user experience.
Contributing

Contributions are welcome! If you'd like to improve the Rook Game Scoring App, please follow these steps:

Fork the Repository:
Click the Fork button at the top right of this page.
Clone Your Fork:
git clone https://github.com/yourusername/rook-game-scoring-app.git
Create a New Branch:
git checkout -b feature/YourFeatureName
Make Your Changes:
Implement your feature or fix bugs.
Commit Your Changes:
git commit -m "Add feature: Your Feature Description"
Push to Your Fork:
git push origin feature/YourFeatureName
Open a Pull Request:
Navigate to the original repository and click New Pull Request.
Please ensure your code follows the existing style and passes any existing tests.

License

This project is licensed under the MIT License.

Acknowledgements

Tailwind CSS: A utility-first CSS framework for rapid UI development.
Rook Game: The classic trick-taking card game that inspired this scoring app.
SVG Icons: For providing the icons used within the application.
