# Testing

Return back to the [README.md](README.md) file.

## Bug Report

### Issue:

The "Previous" and "Next" navigation buttons were moving to the center when one of them was hidden, causing an inconsistent user interface experience.

### Impact:

This issue caused confusion for users as the expected navigation layout changed between steps, affecting the overall usability of the application.

### Steps to Reproduce:

1. Load the "How to Play" section of the game.
2. Navigate to the first page of instructions where the "Previous" button should not be visible.
3. Observe the position of the "Next" button shifting to the center.

### Resolution:

Implemented a CSS solution using `opacity` and `pointer-events` to hide the buttons instead of `display: none`. This approach ensures the buttons retain their space in the layout even when they are not visible, maintaining the expected layout.

### Status:

