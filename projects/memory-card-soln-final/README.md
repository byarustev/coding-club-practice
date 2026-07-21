# Memory Card Game Practice 🎮

This version of the project is a **guided JavaScript exercise**.  
The HTML and CSS are ready, and students complete the game logic in `script.js`.

## What Students Will Build

Students will implement the full game flow:
- Set up cards and shuffle them
- Render cards to the board
- Handle card clicks
- Check for matches
- Track moves and progress text
- Detect win state
- Reset and restart the game

## Files in This Folder

- `index.html` - game layout and elements
- `style.css` - card styles, board layout, and visual states
- `script.js` - function scaffolds with TODO instructions
- `README.md` - assignment instructions

## Student Instructions

1. Open `script.js`.
2. Find each function with TODO steps.
3. Implement one function at a time.
4. Save and refresh the browser after each function.
5. Test behavior before moving to the next function.

## Implementation Order (Recommended)

Implement in this order to avoid confusion:

1. `initGame()`
2. `renderCards()`
3. `handleCardClick()`
4. `checkForMatch()`
5. `updateDisplay()`
6. `checkGameComplete()`
7. `resetGame()`

## Function-by-Function Checklist

### 1) `initGame()`
- Reset `cards` to an empty array
- Duplicate each symbol so every symbol appears twice
- Shuffle the cards array (Fisher-Yates recommended)
- Reset game state variables
- Call `renderCards()`
- Call `updateDisplay()`

### 2) `renderCards()`
- Clear the game board
- Loop over `cards`
- Create a card element for each symbol
- Store its index in a data attribute
- Add card content element for the symbol
- Attach click handler to call `handleCardClick(cardElement, index)`
- Append cards to the board

### 3) `handleCardClick(cardElement, cardIndex)`
- Stop early if board is locked
- Stop early if card is already flipped/matched
- Stop early if two cards are already selected
- Flip the clicked card
- Add card info to `selectedCards`
- If two cards are selected:
  - increment `movesCount`
  - call `updateDisplay()`
  - call `checkForMatch()`

### 4) `checkForMatch()`
- Lock the board
- Get both selected cards
- Compare symbols from the `cards` array
- If match:
  - mark both cards as matched
  - clear `selectedCards`
  - increment `matchedPairs`
  - call `checkGameComplete()`
  - unlock board
- If no match:
  - wait 1 second
  - unflip both cards
  - clear `selectedCards`
  - unlock board

### 5) `updateDisplay()`
- Update moves counter text
- Show start message when game just begins
- Show progress message while game is in progress
- Keep normal message styling for non-win state

### 6) `checkGameComplete()`
- Compute total pairs from `cardSymbols.length`
- If all pairs are matched, show win message
- Style win message differently (example: green)

### 7) `resetGame()`
- Reset key state variables
- Reset/clear game message
- Call `initGame()` for a fresh board

## Success Criteria

The assignment is complete when:
- Cards appear in random order each new game
- Clicking flips cards correctly
- Only two cards can be active at once
- Matches stay visible
- Non-matches flip back after a short delay
- Move counter updates correctly
- Win message appears after all pairs are matched
- Reset button starts a new game

## Debugging Tips

- Use `console.log()` to inspect `selectedCards`, `movesCount`, and `matchedPairs`
- Check class names carefully: `flipped` and `matched`
- If input seems ignored, check `lockBoard` logic
- Test each function as soon as you implement it

## Helpful References

- [MDN: addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN: Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

Good luck and have fun building it.

