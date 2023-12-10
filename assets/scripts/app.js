/* jshint esversion: 11, asi: true */

// ==== DOM elements ====
const sound = document.getElementById("mySound");
const unmuteButton = document.getElementById("unmute-btn");

const mapContainer = document.querySelector(".map-container");
const map = document.querySelectorAll(".map");
const back = document.querySelectorAll(".back");

const preloader = document.querySelector('.preloader');
// preloader
window.addEventListener('load', function () {
  preloader.classList.add('hide-preloader');
});

// When hiding the button:
document.getElementById("unmute-btn").setAttribute("aria-hidden", "true");
document.getElementById("unmute-btn").style.display = "none"; // or .hidden = true

// When showing the button:
document.getElementById("unmute-btn").removeAttribute("aria-hidden");
document.getElementById("unmute-btn").style.display = "block"; // or .hidden = false

// change background
document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/background.webp) center/cover`;

// Iterate over each map and click event
map.forEach(map => {
  map.addEventListener("click", () => {

    // Change background
    let bg = map.dataset.bg;

    document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/map-${bg}.webp) center/cover`;
    // Delete this line
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

// Set the audio to loop
sound.loop = true;

// Play audio when press unmute
unmuteButton.addEventListener("click", () => {
  // Check if the sound is currently paused
  if (sound.paused) {
    sound.play().catch(error => {
      console.error("Error playing the sound:", error);
    });
    unmuteButton.classList.remove("fa-volume-off");
    unmuteButton.classList.add("fa-volume-up");
  } else {
    sound.pause();
    sound.currentTime = 0;
    unmuteButton.classList.remove("fa-volume-up");
    unmuteButton.classList.add("fa-volume-off");
    }
})

// Add click event listener to each back button
back.forEach(button => {
  button.addEventListener("click", () => {
    // Hide the current board
    button.parentElement.classList.add("hidden");
    // Change background
    document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/background.webp) center/cover`;
    // Show the maps container again
    mapContainer.classList.remove("hidden");
  });
});


// ==== Game logic ====
let currentPlayer = "Raze";
const boards = {}; // Stores the state of each tic-tac-toe board
let razeWins = 0;   // Count of wins for Raze
let cypherWins = 0; // Count of wins for Cypher

// Elements for displaying the scores
const razeScoreElement = document.querySelector(".raze-win");
const cypherScoreElement = document.querySelector(".cypher-win");

// Initialize each tic-tac-toe board and set event listeners for cells
document.querySelectorAll(".tic-tac-toe-board").forEach(board => {
  const boardId = board.id;
  boards[boardId] = {
    cells: Array(9).fill(null), // Track the state of each cell (Raze, Cypher, or null)
    winner: null // Winner of the board (null if no winner yet)
  };

  // Add click event listener to each cell
  board.querySelectorAll(".cell").forEach((cell, index) => {
    cell.setAttribute("data-index", index); // Set data attribute for cell index
    cell.addEventListener("click", () => handleCellClick(cell, boardId), { once: true }); // Add click event listener
  });
});

// Function to check for a win on a board
function checkWin(cells, player) {
  // Winning combinations for a tic-tac-toe board
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
      return mapElement && mapElement.getAttribute("data-winner") === player;
    });
  });
}

// Function to check for an overall game win
function checkOverallGameWin() {
  const winCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  // Debug: Check if the function is being called
  console.log("Checking overall game win");

  // Raze win
  const razeWin = winCombinations.some(combination => {
    return combination.every(index => {
      const mapElement = document.querySelector(`.map[data-map="${index}"]`);
      // Debug: Log the mapElement and its data-winner attribute
      console.log(`Map ${index}:`, mapElement, mapElement.getAttribute("data-winner"));
      return mapElement && mapElement.getAttribute("data-winner") === "Raze";
    });
  });

  // Cypher win
  const cypherWin = winCombinations.some(combination => {
    return combination.every(index => {
      const mapElement = document.querySelector(`.map[data-map="${index}"]`);
      // Delete this line
      console.log(`Map ${index}:`, mapElement, mapElement.getAttribute("data-winner"));
      return mapElement && mapElement.getAttribute("data-winner") === "Cypher";
    });
  });

  if (razeWin) {
    // Delete this line
    console.log("Raze wins the overall game");
    return "Raze";
  } else if (cypherWin) {
    // Delete this line
    console.log("Cypher wins the overall game");
    return "Cypher";
  }
  // Delete this line
  console.log("No overall winner yet");
  return null; // No overall winner yet
}

// Handle a cell click event
function handleCellClick(cell, boardId) {
  // Skip if the board already has a winner
  if (boards[boardId].winner) return; 

  // Get the cell index and update the board's state
  const cellIndex = parseInt(cell.getAttribute("data-index"));
  boards[boardId].cells[cellIndex] = currentPlayer; // Update the board's state

  // Set cell content based on current player
  cell.innerHTML = currentPlayer === "Raze" 
    ? '<img class="raze" src="assets/images/ability-paint-shells.webp" alt="Raze">' 
    : '<img class="cypher" src="assets/images/ability-spycam.webp" alt="Cypher">';

  // Check if this move wins the game
  if (checkWin(boards[boardId].cells, currentPlayer)) {
    boards[boardId].winner = currentPlayer; // Set winner for the board
    updateScore(currentPlayer); // Update score for the player
    
    // Get the corresponding map div
    const mapIndex = boardId.replace("board", "");
    const mapDiv = document.querySelector(`.map${mapIndex}`);
    if (currentPlayer === "Raze") {
      mapDiv.classList.add("raze-glow");
      mapDiv.classList.remove("cypher-glow");
    } else {
      mapDiv.classList.add("cypher-glow");
      mapDiv.classList.remove("raze-glow");
    }
    // Set data-winner attribute on the corresponding mini-board
    const mapElement = document.querySelector(`.map[data-map="${boardId.replace("board", "")}"]`);
    if (mapElement) {
        mapElement.setAttribute("data-winner", currentPlayer);
        // Delete this line
        console.log(`Winner set for map ${mapIndex}:`, mapElement.getAttribute("data-winner"));
    }

    // Check for an overall winner across all boards
    const overallWinner = checkOverallGameWin();
    if (overallWinner) {
      alert(`${overallWinner} wins the overall game!`);
      endOverallGame(overallWinner); // Handle end of the overall game
    }
    // Lock the board as it has a winner
    lockBoard(boardId); 
  } else if (checkTie(boards[boardId].cells)) {
    // If it's a tie, make the corresponding map glow
    const mapElement = document.querySelector(`.map[data-map="${boardId.replace('board', '')}"]`);
    if (mapElement) {
      mapElement.classList.add('tie');
      lockBoard(boardId)
    }
  }

  // Switch to the other player
  currentPlayer = currentPlayer === "Raze" ? "Cypher" : "Raze";
}

// Define the checkTie function
function checkTie(cells) {
  return cells.every(cell => cell !== null);
}

// Update the score display for Raze or Cypher
function updateScore(player) {
  if (player === "Raze") {
    razeWins++;
    razeScoreElement.textContent = razeWins;
  } else {
    cypherWins++;
    cypherScoreElement.textContent = cypherWins;
  }
}

// Locks a board after a player wins it
function lockBoard(boardId) {
  const board = document.getElementById(boardId);
  const cells = board.querySelectorAll(".cell");
  // Add "locked-cell" class to each cell
  cells.forEach(cell => {
    cell.classList.add("locked-cell");
  });
}

// Handle end of the overall game
function endOverallGame(player) {
  // Display overall winner
  const overallWinner = document.querySelector(".overall-winner");
  overallWinner.textContent = `${player} is Victorious!`;
  overallWinner.classList.remove("hidden");
  // Hide the title
  const title = document.querySelector(".title");
  title.classList.add("hidden");
  
  // Hide the maps container
  document.querySelectorAll(".map").forEach(map => {
    let agent = currentPlayer === "Raze" ? "raze" : "cypher";
    document.body.style.background = `linear-gradient(rgb(15, 18, 17), rgba(76, 63, 41, 0.664)), url(assets/images/agent-${agent}.webp) center/cover`;
  });
  // Lock all cells
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.add("locked-cell");
  });
  document.querySelectorAll('.map').forEach(map => {
    map.classList.add('locked-map');
  });
}