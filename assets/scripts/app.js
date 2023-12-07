/* jshint esversion: 11, asi: true */

const mapContainer = document.querySelector(".map-container");
const map = document.querySelectorAll(".map");
const back = document.querySelectorAll(".back");

// Iterate over each map and click event
map.forEach(map => {
  map.addEventListener("click", () => {

    // Change background
    let bg = map.dataset.bg;

    document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/map-${bg}.webp) center/cover`;
    // Get correspoding board ID
    console.log("click");
    
    const boardId = "board" + map.id.replace("map", "");
    // Hide all boards
    document.querySelectorAll(".board").forEach(board => {
      board.classList.add("hidden");
    });
    // Show the corresponding board
    const board = document.getElementById(boardId);
    board.classList.remove("hidden");
    mapContainer.classList.add("hidden");
  });
});

// Add click event listener to each back button
back.forEach(button => {
  button.addEventListener("click", () => {
    // Hide the current board
    button.parentElement.classList.add("hidden");
    document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/background.webp) center/cover`;
    // Show the maps container again
    mapContainer.classList.remove("hidden");
  });
});







// Game logic
let currentPlayer = "Raze";
const boards = {}; // Stores the state of each tic-tac-toe board
let razeWins = 0;   // Count of wins for Raze
let cypherWins = 0; // Count of wins for Cypher

// Elements for displaying the scores
const razeScoreElement = document.querySelector('.raze-win');
const cypherScoreElement = document.querySelector('.cypher-win');

// Initialize each tic-tac-toe board and set event listeners for cells
document.querySelectorAll('.tic-tac-toe-board').forEach(board => {
  const boardId = board.id;
  boards[boardId] = {
    cells: Array(9).fill(null), // Track the state of each cell (Raze, Cypher, or null)
    winner: null // Winner of the board (null if no winner yet)
  };

  board.querySelectorAll('.cell').forEach((cell, index) => {
    cell.setAttribute('data-index', index); // Set data attribute for cell index
    cell.addEventListener('click', () => handleCellClick(cell, boardId), { once: true }); // Add click event listener
  });
});

// Function to check for a win on a board
function checkWin(cells, player) {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  // Return true if any winning combination is achieved by the player
  return winCombinations.some(combination => {
    return combination.every(index => cells[index] === player);
  });
}

// Helper function to check if a specific player has won the overall game
function checkPlayerWin(player, winCombinations) {
  return winCombinations.some(combination => {
    return combination.every(index => {
      const mapElement = document.querySelector(`.map[data-map="${index}"]`);
      return mapElement && mapElement.getAttribute('data-winner') === player;
    });
  });
}
  } else {
    cell.innerHTML = '<img class="cypher" src="assets/images/ability-spycam.webp" alt="Cypher">';
    currentPlayer = "Raze";
  }
}

