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
// Each symbol appears twice to create matching pairs
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
// This function sets up the initial game state
function initGame() {
    // Create pairs of cards from the symbols array
    // We need to duplicate each symbol to create pairs
    cards = [];

    // Loop through each symbol and add it twice to create pairs
    cardSymbols.forEach(symbol => {
        cards.push(symbol);
        cards.push(symbol);
    });

    // TODO: Shuffle the cards array
    // Hint: You need to randomize the order of cards in the array
    // Think about how you can loop through the array and swap elements
    // Research: Look up "Fisher-Yates shuffle algorithm" or use Math.random()
    // Example approach:
    // 1. Loop through the array from the end to the beginning
    // 2. For each position, pick a random index before it
    // 3. Swap the current element with the randomly selected one

    // After shuffling, render the cards on the board
    renderCards();

    // Reset game state
    selectedCards = [];
    lockBoard = false;
    movesCount = 0;
    matchedPairs = 0;
    updateDisplay();
}

// ============================================
// Card Rendering Function
// ============================================

// This function creates and displays all cards on the game board
// It's fully implemented - you don't need to modify this
function renderCards() {
    // Clear any existing cards from the board
    gameBoard.innerHTML = '';

    // Loop through each card in the cards array
    cards.forEach((symbol, index) => {
        // Create a new div element for the card
        const cardElement = document.createElement('div');

        // Add the 'card' class for styling
        cardElement.classList.add('card');

        // Set a data attribute to store the card's index
        // This helps us identify which card was clicked
        cardElement.setAttribute('data-index', index);

        // Create a span to hold the card's symbol
        const cardContent = document.createElement('span');
        cardContent.classList.add('card-content');
        cardContent.textContent = symbol;

        // Add the symbol to the card
        cardElement.appendChild(cardContent);

        // Add click event listener to the card
        // When the card is clicked, call handleCardClick with the card element and its index
        cardElement.addEventListener('click', function () {
            handleCardClick(cardElement, index);
        });

        // Add the card to the game board
        gameBoard.appendChild(cardElement);
    });
}

// ============================================
// Card Click Handler
// ============================================

// This function handles what happens when a card is clicked
// TODO: Implement the card click logic
// Hint: This function should:
// 1. Check if the board is locked (if so, return early)
// 2. Check if the card is already flipped or matched (if so, return early)
// 3. Check if we already have 2 cards selected (if so, return early)
// 4. Flip the card (add 'flipped' class)
// 5. Add the card to selectedCards array
// 6. If 2 cards are now selected, check if they match
function handleCardClick(cardElement, cardIndex) {
    // Prevent clicking if the board is locked (e.g., while checking for matches)
    if (lockBoard) {
        return;
    }

    // Prevent clicking if the card is already flipped or matched
    // We check if the card has the 'flipped' or 'matched' class
    if (cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) {
        return;
    }

    // Prevent selecting more than 2 cards at once
    if (selectedCards.length >= 2) {
        return;
    }

    // Flip the card by adding the 'flipped' class
    // This will reveal the card's symbol (CSS shows content when flipped)
    cardElement.classList.add('flipped');

    // Store the card information in the selectedCards array
    // We store both the element and index so we can reference them later
    selectedCards.push({
        element: cardElement,
        index: cardIndex
    });

    // If we now have 2 cards selected, check if they match
    if (selectedCards.length === 2) {
        // Increment the moves counter since we've made a move
        movesCount++;

        // Update the display to show the new move count
        updateDisplay();

        // Check if the two selected cards match
        checkForMatch();
    }
}

// ============================================
// Match Checking Function
// ============================================

// This function checks if the two selected cards match
// TODO: Implement the matching logic
// Hint: This function should:
// 1. Lock the board to prevent more clicks
// 2. Get the symbols from both selected cards
// 3. Compare the symbols
// 4. If they match:
//    - Mark both cards as matched (add 'matched' class)
//    - Clear selectedCards array
//    - Increment matchedPairs counter
//    - Check if game is complete
//    - Unlock the board
// 5. If they don't match:
//    - Wait a short delay (use setTimeout)
//    - Remove 'flipped' class from both cards
//    - Clear selectedCards array
//    - Unlock the board

function checkForMatch() {
    // Lock the board to prevent clicking more cards while checking
    lockBoard = true;

    // Get references to both selected cards
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];

    // Get the symbols from both cards using their indices
    // The symbol is stored in the cards array at the card's index position
    const firstSymbol = cards[firstCard.index];
    const secondSymbol = cards[secondCard.index];

    // Compare the symbols to see if they match
    if (firstSymbol === secondSymbol) {
        // Cards match! Mark them as matched
        firstCard.element.classList.add('matched');
        secondCard.element.classList.add('matched');

        // Clear the selected cards array since we're done with these
        selectedCards = [];

        // Increment the matched pairs counter
        matchedPairs++;

        // Check if the game is complete (all pairs matched)
        checkGameComplete();

        // Unlock the board so player can continue
        lockBoard = false;
    } else {
        // Cards don't match - flip them back after a short delay
        // This gives the player time to see both cards before they flip back
        setTimeout(() => {
            // Remove the 'flipped' class to hide the cards again
            firstCard.element.classList.remove('flipped');
            secondCard.element.classList.remove('flipped');

            // Clear the selected cards array
            selectedCards = [];

            // Unlock the board so player can try again
            lockBoard = false;
        }, 1000); // Wait 1 second (1000 milliseconds) before flipping back
    }
}

// ============================================
// Game Completion Check
// ============================================

// This function checks if all pairs have been matched
// It's fully implemented - you don't need to modify this
function checkGameComplete() {
    // Calculate total number of pairs
    const totalPairs = cardSymbols.length;

    // If all pairs are matched, show completion message
    if (matchedPairs === totalPairs) {
        gameMessage.textContent = `🎉 Congratulations! You completed the game in ${movesCount} moves!`;
        gameMessage.style.color = '#38a169';
    }
}

// ============================================
// Display Update Function
// ============================================

// This function updates the UI to reflect current game state
// It's fully implemented - you don't need to modify this
function updateDisplay() {
    // Update the moves counter
    movesDisplay.textContent = movesCount;

    // Update game message based on state
    if (matchedPairs === 0 && movesCount === 0) {
        gameMessage.textContent = 'Click a card to start!';
        gameMessage.style.color = '#333';
    } else if (matchedPairs < cardSymbols.length) {
        gameMessage.textContent = `Keep going! ${matchedPairs} pair(s) matched.`;
        gameMessage.style.color = '#333';
    }
}

// ============================================
// Reset Game Function
// ============================================

// This function resets the game to its initial state
// TODO: Implement the reset logic
// Hint: This function should:
// 1. Reset all game state variables
// 2. Clear the selectedCards array
// 3. Reset the moves counter
// 4. Reset the matched pairs counter
// 5. Clear the game message
// 6. Reinitialize the game (call initGame())
function resetGame() {
    // TODO: Add your logic here
    // Remember to reset:
    // - selectedCards
    // - lockBoard
    // - movesCount
    // - matchedPairs
    // - gameMessage text
    // Then call initGame() to start fresh
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

