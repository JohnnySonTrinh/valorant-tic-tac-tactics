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

let currentPlayer = "Raze";  // Start with Raze

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", handleCellClick, { once: true });
});

function handleCellClick(event) {
  const cell = event.target;
  
  // Add the Raze or Cypher icon
  if (currentPlayer === "Raze") {
    cell.innerHTML = '<img class="raze" src="assets/images/ability-paint-shells.webp" alt="Raze">';
    currentPlayer = "Cypher";
  } else {
    cell.innerHTML = '<img class="cypher" src="assets/images/ability-spycam.webp" alt="Cypher">';
    currentPlayer = "Raze";
  }
}

