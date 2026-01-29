# Memory Card Game 🎮

A beginner-friendly Memory Card Game built with HTML, CSS, and Vanilla JavaScript. This project is designed to help you practice your JavaScript skills while building a fun, interactive game.

## Project Overview

This is a classic memory card matching game where players flip cards to find matching pairs. The goal is to match all pairs using the fewest number of moves possible.

## 🎯 Learning Objectives

By completing this project, you will practice:
- DOM manipulation
- Event handling
- Array methods
- Conditional logic
- State management
- Algorithm implementation (shuffling)

## 🎮 How the Game Works

1. **Game Setup**: A grid of cards is displayed, each hiding a symbol
2. **Gameplay**: 
   - Click a card to flip it and reveal its symbol
   - Click another card to flip it
   - If the two cards match, they stay flipped
   - If they don't match, they flip back after a short delay
3. **Win Condition**: Match all pairs to complete the game
4. **Reset**: Use the reset button to start a new game

## 📁 Project Structure

```
memory-card-game/
├── index.html      # HTML structure and layout
├── style.css       # Styling and layout (Flexbox)
├── script.js       # Game logic and interactivity
└── README.md       # This file
```

## ✅ What's Already Implemented

The following features are **fully implemented** and you don't need to modify them:

### HTML (`index.html`)
- ✅ Complete semantic HTML structure
- ✅ Game board container
- ✅ Status display area (moves counter, messages)
- ✅ Reset button
- ✅ Proper file linking

### CSS (`style.css`)
- ✅ Complete styling with Flexbox layout
- ✅ Card styles (normal, flipped, matched states)
- ✅ Smooth transitions and animations
- ✅ Responsive design
- ✅ Hover and active states

### JavaScript (`script.js`)
- ✅ Game data structure (card symbols)
- ✅ State variables setup
- ✅ DOM element references
- ✅ Card rendering function (`renderCards()`)
- ✅ Card click event listeners (attached to each card)
- ✅ Card click handler (`handleCardClick()`)
- ✅ Match checking logic (`checkForMatch()`)
- ✅ Display update function (`updateDisplay()`)
- ✅ Game completion check (`checkGameComplete()`)
- ✅ Event listener for reset button

## 🚧 What You Need to Complete

You will find **TODO sections** in `script.js` that you need to implement. Each TODO includes hints and explanations.

### 📊 Progress Summary

**Completed (3/5):**
- ✅ Card Click Event Listener
- ✅ Card Click Handler
- ✅ Match Checking Logic

**Remaining (2/5):**
- ⚠️ Card Shuffling Logic
- ⚠️ Game Reset Logic

### 1. Card Shuffling Logic
**Location**: `initGame()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Implement the Fisher-Yates shuffle algorithm to randomize the card order.

**Hints**:
- Loop through the array from the end to the beginning
- For each position, pick a random index before it
- Swap the current element with the randomly selected one
- Use `Math.random()` and `Math.floor()` to generate random indices

**Why**: Without shuffling, cards will always appear in the same order, making the game too easy!

### 2. Card Click Event Listener
**Location**: `renderCards()` function

**Status**: ✅ **COMPLETED** - Already implemented

**Task**: ~~Add a click event listener to each card that calls `handleCardClick()`.~~

**Implementation**: Event listeners are now attached to each card in the `renderCards()` function.

### 3. Card Click Handler
**Location**: `handleCardClick()` function

**Status**: ✅ **COMPLETED** - Already implemented

**Task**: ~~Implement the logic for when a card is clicked.~~

**Implementation**: The function now handles all card click logic including:
- Preventing clicks when board is locked
- Preventing clicks on already flipped/matched cards
- Limiting selection to 2 cards
- Flipping cards and tracking selections
- Calling match checking when 2 cards are selected

### 4. Match Checking Logic
**Location**: `checkForMatch()` function

**Status**: ✅ **COMPLETED** - Already implemented

**Task**: ~~Compare two selected cards and handle match/no-match scenarios.~~

**Implementation**: The function now:
- Locks the board during checking
- Compares card symbols
- Handles matches (marks as matched, increments counter)
- Handles mismatches (flips back after delay)
- Manages board lock state properly

### 5. Game Reset Logic
**Location**: `resetGame()` function

**Status**: ⚠️ **TODO - Not yet implemented**

**Task**: Reset all game state and restart the game.

**Requirements**:
- Reset all state variables to initial values
- Clear the `selectedCards` array
- Reset `movesCount` to 0
- Reset `matchedPairs` to 0
- Clear the game message
- Call `initGame()` to restart

**Why**: Allows players to start a fresh game without reloading the page.

## 🎓 Learning Tips

1. **Read the Comments**: Every function and major code block has explanatory comments. Read them carefully!

2. **Test Incrementally**: After implementing each TODO, test your code to make sure it works before moving on.

3. **Use Console.log**: Add `console.log()` statements to debug and understand what's happening.

4. **Understand the State**: Pay attention to how `selectedCards`, `lockBoard`, and `matchedPairs` change throughout the game.

5. **Study the CSS Classes**: Notice how adding/removing classes like 'flipped' and 'matched' changes the card appearance.

## 🛠️ Development Setup

1. **Open the Project**: 
   - Open `index.html` in your web browser

2. **Edit the Code**:
   - Open `script.js` in your code editor
   - Find the TODO sections
   - Implement the missing logic
   - Save and refresh your browser to test

## 🐛 Debugging Tips

- **Cards not flipping?** Check if you're adding the 'flipped' class correctly
- **Can't click cards?** Verify the event listener is attached
- **Cards not matching?** Check how you're comparing the symbols
- **Game not resetting?** Make sure you're resetting all state variables

## 📚 Resources

- [MDN Web Docs - Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs - Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Fisher-Yates Shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

## 🎉 Success Criteria

Your game is complete when:
- ⚠️ Cards shuffle randomly on each game start (TODO)
- ✅ Clicking a card flips it to show its symbol (COMPLETED)
- ✅ Only 2 cards can be flipped at a time (COMPLETED)
- ✅ Matching cards stay flipped (COMPLETED)
- ✅ Non-matching cards flip back after a delay (COMPLETED)
- ✅ Game shows completion message when all pairs are matched (COMPLETED)
- ⚠️ Reset button starts a new game (TODO)
- ✅ Move counter updates correctly (COMPLETED)


## 🚀 Bonus Challenges (For The Heros)

Once you've completed the basic game, try these enhancements:

1. **Difficulty Levels**: Add easy (4 pairs), medium (8 pairs), hard (12 pairs)
2. **Timer**: Add a countdown timer or elapsed time display
3. **Best Score**: Track and display the best score (lowest moves)
5. **Sound Effects**: Add sounds for matches, mismatches, and win
6. **Card Themes**: Allow users to choose different symbol sets

## 💡 Questions to Consider

As you work through this project, think about:
- Why do we need to lock the board during match checking?
- How does the `selectedCards` array help us track game state?
- What happens if a user clicks a card multiple times quickly?
- How could you make the game more challenging?

## 📞 Getting Help

If you get stuck:
1. Re-read the comments in the code
2. Check the hints in each TODO section
3. Use `console.log()` to inspect variable values
4. Test each function independently
5. Review the success criteria to see what's missing

Good luck, and have fun building your memory card game! 🎮✨

