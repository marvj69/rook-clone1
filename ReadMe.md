# Rook Score Taking

Rook Score Taking is a web-based score tracking application designed for the popular card game Rook. It provides an intuitive interface for entering bids, tracking round scores, managing game state (saving, freezing, and resuming games), and viewing team-based statistics. The application also features customizable themes and dark mode for an enhanced user experience.

## Features

- **Score Input & Tracking**: 
  - Tap a team ("Us" or "Dem") to initiate a bid.
  - Select preset bid values or enter a custom bid.
  - Input round points and submit to update cumulative scores.
  - Automatic calculation of running totals for each team.

- **Game Management**:
  - **Undo Last Round**: Easily revert the previous round if a mistake is made.
  - **Save Game**: Save completed games locally using the browser's localStorage.
  - **Freeze Game**: Freeze a game in progress so you can resume it later.

- **Team & Statistics Management**:
  - Track individual team statistics (wins, losses, games played, average bid, bid success rate, and hands won percentage).
  - View a detailed history of completed games and round-by-round scores.
  - Delete teams and associated data if needed.

- **User Interface Enhancements**:
  - Responsive design optimized for both mobile and desktop.
  - Smooth animations and modals for a modern look and feel.
  - Confetti celebration effect when a game concludes.

- **Customization Options**:
  - **Dark Mode**: Toggle between light and dark themes.
  - **Themes**: Choose from multiple color themes to personalize the app's appearance.
  - Change team names for a more personalized gaming experience.

- **Data Migration**:
  - Automatic migration of saved game data to new formats when updating the app.

- **Progressive Web App (PWA)**:
  - Service worker support for offline capabilities.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.) with support for HTML5, CSS3, and JavaScript.
- An internet connection to load external libraries (Tailwind CSS and canvas-confetti) or host them locally if preferred.

### Installation

1. **Clone the Repository** (or download the code):
   ```bash
   git clone https://github.com/your-username/rook-score-taking.git

	2.	Open the Application:
	•	Simply open the index.html file in your preferred web browser.
	•	No server setup is required as the app runs entirely in the browser using localStorage for data persistence.

Usage
	1.	Starting a Game:
	•	Tap on one of the team cards (labeled “Us” or “Dem”) to begin a bid.
	2.	Entering a Bid & Round Score:
	•	Choose a preset bid (e.g., 120, 125, 130, etc.) or select “Other” to enter a custom bid.
	•	Input the round points for the bidding and non-bidding teams.
	•	Press “Submit” to record the round; running totals for both teams are updated automatically.
	3.	Undo & Game Over:
	•	Use the Undo button to remove the last recorded round.
	•	The game will end automatically based on predefined winning conditions (e.g., 1000 point spread, reaching 500 points, etc.), and a confetti animation will celebrate the win.
	4.	Saving and Freezing Games:
	•	Save Game: When a game is completed, save it to view later in the Saved Games modal.
	•	Freeze Game: Freeze an in-progress game to resume it at a later time.
	5.	Managing Teams & Statistics:
	•	Access team-based statistics from the menu.
	•	View overall performance, average bid, win percentages, and more.
	•	Delete teams and remove associated game data if needed.
	6.	Customization:
	•	Toggle Dark Mode using the slider in the menu.
	•	Change the app’s color theme from the Themes option in the menu.
	•	Edit team names as needed via the Team Selection modal.

Code Structure
	•	HTML: The index.html file contains the application’s structure, including the main app container, various modals (e.g., Saved Games, Confirmation, Team Selection, Theme Selection), and version display.
	•	CSS: Styling is managed via:
	•	Tailwind CSS (loaded from a CDN) for rapid, responsive design.
	•	Custom CSS for animations (e.g., fade-in effects), modal transitions, and unique UI elements.
	•	JavaScript:
	•	Game Logic & State Management: Functions to handle bidding, score calculation, round submission, undo functionality, and game over detection.
	•	Local Storage Integration: Saving, freezing, and migrating game data using localStorage.
	•	Modals & UI Controls: Functions to open/close modals (e.g., Saved Games, About, Confirmation), toggle dark mode, apply themes, and handle team selection.
	•	Data Migration: A migration function ensures that saved game data from older versions is updated to the new format.
	•	Service Worker Registration: Enables PWA features for offline usage.

Customization & Extensibility
	•	Themes & Dark Mode:
	•	Modify or add new themes by editing the CSS variables and theme classes.
	•	Dark mode can be toggled via the slider, which updates both the UI and meta theme color.
	•	Game Logic:
	•	Adjust scoring logic, bid validation, and win conditions directly within the JavaScript code.
	•	Local Storage:
	•	The app uses localStorage to persist game state and statistics. Developers can modify storage keys and migration logic as needed.

Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or wish to improve the code, please feel free to open an issue or submit a pull request.

License

This project is licensed under the MIT License.

Acknowledgments
	•	Tailwind CSS: For rapid and responsive UI design.
	•	Canvas-Confetti: For the celebratory confetti animations.
	•	Special thanks to the developers and the community who inspired this score-taking application for the Rook card game.

This README provides an overview of the project, explains its features, and offers guidance on how to install, run, and customize the application. Enjoy tracking your Rook game scores!
