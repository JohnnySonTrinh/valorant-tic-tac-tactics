// Select items
const infoDisplay = document.getElementById("info")

const startContainer = document.querySelector(".start-container")
const mapsContainer = document.querySelector(".maps-container")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const playBtn = document.querySelector(".play-btn")

// Local data
const howToPlayTexts = [
  {
    id: 1,
    text: "Gather a companion and embark on a strategic duel where the vibrant streets of Brazil clash with the cunning shadows of Morocco.",
  },
  {
    id: 2,
    text: "Your mission: to dominate and claim the map as your territory. But be warned the ultimate victory isn't just about winning a single map. True triumph lies in mastering three maps in a row. Outsmart, outmaneuver, and outplay your opponent to emerge as the supreme strategist.",
  },
  {
    id: 3,
    text: "Player one assumes the role of Raze, Brazil's explosive agent, launching an onslaught with her notorious Paint Shells. Player two channels Cypher, the Moroccan sentinel, fortifying defenses with his tactical Spycam.",
  },
  {
    id: 4,
    text: "Initiate the challenge by selecting one of the diverse maps as your battleground. Ready your wits, and let the conquest begin!",
  },
]

// Set starting item
let currentText = 0

// Load initial item
window.addEventListener("DOMContentLoaded", () => {
  const item = howToPlayTexts[currentText]
  infoDisplay.textContent = item.text
})

// Show index based on item
function showText(index) {
  const item = howToPlayTexts[index]
  infoDisplay.textContent = item.text
}

// Show next text
nextBtn.addEventListener("click", () => {
  currentText = (currentText + 1) % howToPlayTexts.length
  showText(currentText)
  updateButtons()
})

// Show previous text
prevBtn.addEventListener("click", () => {
  currentText =
    (currentText - 1 + howToPlayTexts.length) % howToPlayTexts.length
  showText(currentText)
  updateButtons()
})

// Update the visibility of next/prev buttons
function updateButtons() {
  // Toggle button visibility using opacity and pointer-events
  prevBtn.style.opacity = currentText === 0 ? "0" : "1"
  prevBtn.style.pointerEvents = currentText === 0 ? "none" : "auto"

  nextBtn.style.opacity = currentText === howToPlayTexts.length - 1 ? "0" : "1"
  nextBtn.style.pointerEvents =
    currentText === howToPlayTexts.length - 1 ? "none" : "auto"
}

// Load initial item
window.addEventListener("DOMContentLoaded", () => {
  showText(currentText)
  updateButtons()
})

// Show text based on index
function showText(index) {
  const { text } = howToPlayTexts[index]
  infoDisplay.textContent = text
}

playBtn.addEventListener("click", () => {})

// Event listener for the play button
playBtn.addEventListener("click", () => {
  // Hide the start container and show the maps container
  startContainer.classList.add("hidden")
  mapsContainer.classList.remove("hidden")
})

