/* ============================================
   Memory Card Game - JavaScript
   ============================================
   
   This script handles all game logic including:
   - Card rendering
   - Card interactions
   - Match detection
   - Game state management
*/

// ============================================
// Game Configuration & Data
// ============================================

// Array of symbols to use for card pairs
const cardSymbols = ['🎮', '🎯', '🎨', '🎵', '🎪', '🎭'];

// ============================================
// Game State Variables
// ============================================

// Array to hold all cards (will contain pairs of symbols)
let cards = [];

// Array to track currently selected/flipped cards (max 2)
let selectedCards = [];

// Boolean to prevent clicking cards while checking for matches
let lockBoard = false;

// Counter for number of moves the player has made
let movesCount = 0;

// Counter for number of matched pairs
let matchedPairs = 0;

// ============================================
// DOM Element References
// ============================================

// Get reference to the game board container
const gameBoard = document.getElementById('game-board');

// Get reference to the moves counter display
const movesDisplay = document.getElementById('moves-count');

// Get reference to the game message display
const gameMessage = document.getElementById('game-message');

// Get reference to the reset button
const resetButton = document.getElementById('reset-btn');

// ============================================
// Initialize Game
// ============================================

// Start the game when page loads
// Student task: build the full setup flow for a new game
function initGame() {
    // TODO 1: Reset `cards` to an empty array.
    // TODO 2: Duplicate each value from `cardSymbols` so each symbol appears twice.
    // TODO 3: Shuffle the `cards` array (Fisher-Yates recommended).
    // TODO 4: Reset gameplay state (`selectedCards`, `lockBoard`, `movesCount`, `matchedPairs`).
    // TODO 5: Call `renderCards()` so the board is drawn.
    // TODO 6: Call `updateDisplay()` so UI text and counters match state.
}

// ============================================
// Card Rendering Function
// ============================================

// Student task: create card elements based on the shuffled `cards` array
function renderCards() {
    // TODO 1: Clear the current board (`gameBoard.innerHTML = ''`).
    // TODO 2: Loop through `cards` with both symbol and index.
    // TODO 3: For each card, create a `.card` element and store its index (data attribute).
    // TODO 4: Create a child element for the symbol (for example `.card-content`) and append it.
    // TODO 5: Add a click listener that calls `handleCardClick(cardElement, index)`.
    // TODO 6: Append each card element to `gameBoard`.
}

// ============================================
// Card Click Handler
// ============================================

// Student task: control what happens when one card is clicked
function handleCardClick(cardElement, cardIndex) {
    // TODO 1: Guard clauses:
    //   - If `lockBoard` is true, return.
    //   - If card already has `.flipped` or `.matched`, return.
    //   - If `selectedCards.length` is already 2, return.
    // TODO 2: Flip this card by adding `.flipped`.
    // TODO 3: Push an object into `selectedCards` containing:
    //   - the card DOM element
    //   - the card index
    // TODO 4: If exactly 2 cards are selected:
    //   - increment `movesCount`
    //   - call `updateDisplay()`
    //   - call `checkForMatch()`
}

// ============================================
// Match Checking Function
// ============================================

// Student task: compare the 2 selected cards and update state
function checkForMatch() {
    // TODO 1: Set `lockBoard = true` to prevent extra clicks.
    // TODO 2: Read the two selected card objects from `selectedCards`.
    // TODO 3: Get each card's symbol from `cards` using stored indexes.
    // TODO 4: If symbols match:
    //   - add `.matched` to both card elements
    //   - clear `selectedCards`
    //   - increment `matchedPairs`
    //   - call `checkGameComplete()`
    //   - unlock board (`lockBoard = false`)
    // TODO 5: If symbols do not match:
    //   - use `setTimeout` (about 1 second)
    //   - remove `.flipped` from both cards
    //   - clear `selectedCards`
    //   - unlock board
}

// ============================================
// Game Completion Check
// ============================================

// Student task: decide when the game is won and show success message
function checkGameComplete() {
    // TODO 1: Create `totalPairs` using `cardSymbols.length`.
    // TODO 2: If `matchedPairs === totalPairs`, update `gameMessage` with a win message.
    // TODO 3: Style the message as success (for example a green color).
}

// ============================================
// Display Update Function
// ============================================

// Student task: keep moves + status message in sync with state
function updateDisplay() {
    // TODO 1: Update the moves UI (`movesDisplay.textContent = movesCount`).
    // TODO 2: If game just started (0 moves, 0 pairs), show a start prompt.
    // TODO 3: If game is in progress, show encouragement and matched pair count.
    // TODO 4: Keep non-win messages in a neutral color.
}

// ============================================
// Reset Game Function
// ============================================

// Student task: fully reset game state and start a fresh round
function resetGame() {
    // TODO 1: Reset `selectedCards`, `lockBoard`, `movesCount`, and `matchedPairs`.
    // TODO 2: Clear or reset `gameMessage` text and style.
    // TODO 3: Call `initGame()` to rebuild and restart the board.
}

// ============================================
// Event Listeners
// ============================================

// Add click event listener to reset button
// This is fully implemented - you don't need to modify this
resetButton.addEventListener('click', resetGame);

// ============================================
// Start the Game
// ============================================

// Initialize the game when the page loads
// This is fully implemented - you don't need to modify this
initGame();

