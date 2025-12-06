function loadConstants() {
  const FRAMERATE = 30;

  let CANVAS_WIDTH, CANVAS_HEIGHT;

  if (window.screen.width <= 600) {
    CANVAS_WIDTH = 360;
    CANVAS_HEIGHT = 640;
  } else {
    CANVAS_WIDTH = 640;
    CANVAS_HEIGHT = 360;
  }

  const PARTICLE_RADIUS = 30;

  const POPULATION = 20;

  const URL_PREFIX =
    "https://raw.githubusercontent.com/Tarun-Sri-Sai/RPS-Royale/main/assets";

  constants = {
    PARTICLE_RADIUS,
    VISIBILITY_RADIUS: PARTICLE_RADIUS * 3,
    PROXIMITY_RADIUS: PARTICLE_RADIUS,

    VELOCITY: 3,

    CANVAS_WIDTH,
    CANVAS_HEIGHT,

    IMAGES: {
      Rock: loadImage(`${URL_PREFIX}/Rock.png`),
      Paper: loadImage(`${URL_PREFIX}/Paper.png`),
      Scissors: loadImage(`${URL_PREFIX}/Scissors.png`),
    },
    BACKGROUND_GRAYSCALE: 220,

    POPULATION,

    FRAMERATE,

    TARGETS: {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    },

    ORIENTATIONS: {
      Rock: 3 * HALF_PI,
      Scissors: 0,
      Paper: 0,
    },
  };
}
