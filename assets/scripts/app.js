const mapContainer = document.querySelector(".map-container")
const map = document.querySelectorAll(".map")
const back = document.querySelectorAll(".back")

// Iterate over each map and click event
map.forEach(map => {
  map.addEventListener("click", () => {

    // Get correspoding board ID
    const boardId = "board" + map.id.replace("map", "")
    // Hide all boards
    document.querySelectorAll(".board").forEach(board => {
      board.classList.add("hidden")
    })
    // Show the corresponding board
    const board = document.getElementById(boardId)
    board.classList.remove("hidden")
    mapContainer.classList.add("hidden")
  })
})

// Add click event listener to each back button
back.forEach(button => {
  button.addEventListener("click", () => {
    // Hide the current board
    button.parentElement.classList.add("hidden")
    // Show the maps container again
    mapContainer.classList.remove("hidden")
  })
})

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

