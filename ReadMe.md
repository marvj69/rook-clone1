# Rook Game Scoring Screen

## Overview
This is a web-based scoring screen for the card game Rook. It allows players to track scores, manage bids, and view game history. The application is designed to be user-friendly and responsive, with support for both light and dark modes.

## Features
- **Score Tracking**: Easily track scores for two teams (Us and Dem).
- **Bid Management**: Manage bids with preset values or custom inputs.
- **Game History**: View the history of rounds and scores.
- **Statistics**: View statistics from completed games, including total games, wins, and average bids.
- **Dark Mode**: Toggle between light and dark themes.
- **Save and Load Games**: Save current game progress and load saved or frozen games.
- **Confetti Animation**: Celebrate game victories with a confetti animation.

## Installation
1. Clone the repository or download the source code.
2. Open the `index.html` file in your web browser.

## Usage
1. **Start a New Game**: Click on the "New Game" option in the menu to start a new game.
2. **Select a Team**: Tap on the team (Us or Dem) to start a bid.
3. **Enter Bid**: Choose a bid amount from the preset values or enter a custom bid.
4. **Enter Points**: Input the points scored by the bidding or non-bidding team.
5. **Submit**: Submit the points to update the scores and move to the next round.
6. **View History**: Check the history section to see the details of each round.
7. **Save Game**: Save the current game progress to continue later.
8. **Load Game**: Load a previously saved or frozen game.
9. **View Statistics**: View statistics from completed games, including total games, wins, and average bids.

## Functions
Here’s a brief explanation of the key functions in the application:

### **Game Logic Functions**
- **`handleTeamClick(team)`**: Handles the selection of a team (Us or Dem) for bidding.
- **`handleBidSelect(bid)`**: Processes the selection of a bid amount, including custom bids.
- **`handleCustomBidChange(e)`**: Updates the state when a custom bid value is entered.
- **`handleBiddingPointsToggle(enterBidderPoints)`**: Toggles between entering points for the bidding or non-bidding team.
- **`handleFormSubmit(e)`**: Submits the points and updates the game state, including checking for game-over conditions.
- **`handleUndo()`**: Undoes the last round and reverts the game state.

### **Game Management Functions**
- **`handleNewGame()`**: Resets the game state to start a new game, with an option to save the current game.
- **`handleManualSaveGame()`**: Opens the modal to save the current game manually.
- **`handleFreezerGame()`**: Opens the modal to freeze the current game.
- **`handleSaveGameFormSubmit(e)`**: Saves the current game with player names and final scores.
- **`handleFreezeGameFormSubmit(e)`**: Freezes the current game with a custom name for later retrieval.

### **Modal and UI Functions**
- **`toggleMenu(e)`**: Toggles the visibility of the side menu.
- **`closeMenuOverlay()`**: Closes the side menu and its overlay.
- **`openConfirmationModal(message, yesCallback, noCb, cancelCb)`**: Opens a confirmation modal with custom messages and callbacks.
- **`closeConfirmationModal()`**: Closes the confirmation modal.
- **`openSavedGamesModal()`**: Opens the modal to view saved and frozen games.
- **`closeSavedGamesModal()`**: Closes the saved games modal.
- **`openSaveGameModal()`**: Opens the modal to save the current game.
- **`closeSaveGameModal()`**: Closes the save game modal.
- **`openFreezeGameModal()`**: Opens the modal to freeze the current game.
- **`closeFreezeGameModal()`**: Closes the freeze game modal.
- **`openViewSavedGameModal()`**: Opens the modal to view details of a saved game.
- **`closeViewSavedGameModal()`**: Closes the view saved game modal.

### **Rendering Functions**
- **`renderApp()`**: Main function to render the entire application UI.
- **`renderTeamCard(team, points, color)`**: Renders the card for a team with its current score.
- **`renderRoundCard(roundNumber, lastBidMarkup)`**: Renders the card displaying the current round number and last bid.
- **`renderErrorAlert(errorText)`**: Renders an error alert message.
- **`renderPointsInput()`**: Renders the input fields for entering points.
- **`renderScoreInputCard()`**: Renders the card for entering bids and points.
- **`renderHistoryCard()`**: Renders the card displaying the game history.
- **`renderStatisticsCard()`**: Renders the card displaying game statistics.
- **`renderGameOverOverlay()`**: Renders the game-over overlay with confetti animation.

### **Utility Functions**
- **`toggleDarkMode(e)`**: Toggles between light and dark modes.
- **`updateDarkModeButton(isDark)`**: Updates the dark mode toggle button based on the current theme.
- **`initializeDarkMode()`**: Initializes the dark mode based on user preference.
- **`updateMetaThemeColor(isDark)`**: Updates the theme color meta tag based on the current mode.
- **`getLocalStorage(key)`**: Retrieves data from local storage.
- **`setLocalStorage(key, data)`**: Saves data to local storage.
- **`showSaveIndicator()`**: Displays a "Saved" indicator briefly.
- **`validateBid(value)`**: Validates the bid amount entered by the user.
- **`validatePoints(value)`**: Validates the points entered by the user.
- **`showEasterEgg()`**: Displays an easter egg message with version updates.

### **Event Listeners**
- **`DOMContentLoaded`**: Initializes the application when the DOM is fully loaded.
- **`Service Worker Registration`**: Registers the service worker for offline functionality.

## Dependencies
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling.
- [Canvas Confetti](https://www.kirilv.com/canvas-confetti/): A JavaScript library for confetti animations.

## Version
Current Version: **1.2.1**

## License
This project is open-source and available under the MIT License.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## Issues
If you encounter any issues, please open an issue on the GitHub repository.

## Acknowledgements
- [Tailwind CSS](https://tailwindcss.com/) for the CSS framework.
- [Canvas Confetti](https://www.kirilv.com/canvas-confetti/) for the confetti animation.
