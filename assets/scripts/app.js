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
