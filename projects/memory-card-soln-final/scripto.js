// Reference to the board where all cards are rendered dynamically.
const board = document.getElementById("game-board");
// Reference to the element that displays total move count.
const movesDisplay = document.getElementById("moves-count");
// Reference to the status message shown to the player.
const gameMessage = document.getElementById("game-message");
// Reference to the reset button.
const resetBtn = document.getElementById("reset-btn");

// Base list of unique symbols. Each symbol will be duplicated to form a pair.
const cardSymbols = ["🎮", "🎯", "🎨", "🎵", "🎪", "🎭"];

// The shuffled deck currently in play.
let cards = [];
// The currently opened cards (max 2 at a time).
let selectedCards = [];
// Stores indices of cards that were matched.
let matchedCards = [];
// Prevents clicks while we are waiting to hide unmatched cards.
let lockBoard = false;
// Number of turns taken (1 turn = opening 2 cards).
let movesCount = 0;
// Number of successful symbol pairs found.
let matchedPairs = 0;

// Initializes a new game round.
function initGame() {
    // Clear old deck.
    cards = [];

    // Duplicate symbols so each one appears twice (pairing logic).
    cards = [...cardSymbols, ...cardSymbols];

    // Shuffle deck with Fisher-Yates so every game has random positions.
    for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    // Reset all runtime state for a clean start.
    selectedCards = [];
    matchedCards = [];
    lockBoard = false;
    movesCount = 0;
    matchedPairs = 0;

    renderCards();
    updateDisplay();
}

// Renders all cards into the board based on shuffled deck.
function renderCards() {
    // Remove existing card DOM before rendering new set.
    board.innerHTML = "";

    cards.forEach((symbol, index) => {
        // Create one card wrapper.
        const card = document.createElement("div");
        card.classList.add("card");

        // Store index so we can map clicked card back to deck symbol.
        card.dataset.index = index;

        // Each card has:
        // - front: hidden side (default visible)
        // - back: symbol side (shown only when card has .flip class)
        card.innerHTML = `
            <div class="card-face front"></div>
            <div class="card-face back">${symbol}</div>
        `;

        // Clicking a card triggers reveal/match logic.
        card.addEventListener("click", () => handleCardClick(card, index));

        board.appendChild(card);
    });
}

// Handles click on a single card.
function handleCardClick(cardElement, cardIndex) {
    // Ignore clicks while board is temporarily locked.
    if (lockBoard) return;
    // Ignore if this card is already revealed.
    if (cardElement.classList.contains("flip")) return;
    // Ignore if we already opened two cards and haven't resolved them yet.
    if (selectedCards.length === 2) return;

    // Reveal clicked card (CSS shows .back and hides .front).
    cardElement.classList.add("flip");

    // Track revealed card for pair comparison.
    selectedCards.push({ element: cardElement, index: cardIndex });

    // After two cards are selected, that completes one move.
    if (selectedCards.length === 2) {
        movesCount++;
        updateDisplay();
        checkForMatch();
    }
}


// Compares the two selected cards and applies match/mismatch behavior.
function checkForMatch() {
    // Temporarily stop further clicks while checking.
    lockBoard = true;

    const [first, second] = selectedCards;

    const firstSymbol = cards[first.index];
    const secondSymbol = cards[second.index];

    if (firstSymbol === secondSymbol) {
        // Match found: keep both cards revealed.
        matchedCards.push(first.index, second.index);

        selectedCards = [];
        matchedPairs++;

        checkGameComplete();
        lockBoard = false;

    } else {
        // No match: wait briefly so user can see, then hide both cards.
        setTimeout(() => {
            first.element.classList.remove("flip");
            second.element.classList.remove("flip");

            selectedCards = [];
            lockBoard = false;
        }, 1000);
    }
}

// Updates move count and guide message text.
function updateDisplay() {
    movesDisplay.textContent = movesCount;

    if (movesCount === 0) {
        gameMessage.textContent = "Please click any card to start!";
        gameMessage.style.color = "#333";
    } else {
        gameMessage.textContent = "Keep going!";
        gameMessage.style.color = "#333";
    }
}

// Checks whether all pairs are found and shows win message.
function checkGameComplete() {
    const totalPairs = cardSymbols.length;

    if (matchedPairs === totalPairs) {
        gameMessage.textContent = "🎉 You Win!";
        gameMessage.style.color = "green";
    }
}

// Resets current game and starts a fresh shuffled round.
function resetGame() {
    selectedCards = [];
    matchedCards = [];
    lockBoard = false;
    movesCount = 0;
    matchedPairs = 0;

    gameMessage.textContent = "Game reset! Start again!";
    gameMessage.style.color = "#333";

    initGame();
}

// Attach reset button click event.
resetBtn.addEventListener("click", resetGame);

// Start game immediately when script loads.
initGame();