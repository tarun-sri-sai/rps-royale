"use strict";

let game;
let constants;
let isPaused = true;
let isOver = false;

function preload() {
  loadConstants();
}

function setup() {
  const canvas = createCanvas(constants.CANVAS_WIDTH, constants.CANVAS_HEIGHT);
  canvas.parent("canvas-container");

  game = new Game();
}

function draw() {
  background(constants.BACKGROUND_GRAYSCALE);
  frameRate(constants.FRAMERATE);

  if (isPaused) {
    game.display();
    return;
  }

  game.update();
  game.display();

  // Check if only 2 entity types remain
  const remainingTypes = game.getRemainingTypes();
  if (remainingTypes.length === 2 && !isOver) {
    noLoop();
    isOver = true;
    getToggleBtn().innerText = "Restart";
    showWinnerModal(remainingTypes);
    return;
  }

  if (game.isOver()) {
    noLoop();
    isOver = true;
  }
}

function toggleSimulation() {
  if (isOver) {
    location.reload();
  }

  isPaused = !isPaused;

  getToggleBtn().innerText = isPaused ? "Resume" : "Pause";
}

function getToggleBtn() {
  return document.getElementById("toggle-btn");
}

function showWinnerModal(remainingTypes) {
  const modal = document.getElementById("winner-modal");
  const winnerText = document.getElementById("winner-text");

  if (remainingTypes.length === 2) {
    const winner = constants.TARGETS[remainingTypes[0]] === remainingTypes[1] ? remainingTypes[0] : remainingTypes[1];
    winnerText.innerText = `${winner} wins!`;
  }

  modal.showModal();
}
