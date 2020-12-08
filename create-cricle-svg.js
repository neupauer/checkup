const MAX_X = 500;
const MAX_Y = 1000;

const RADIUS = 5;

const SPACE = 5;

const DIAMETER = 2 * RADIUS;

for (y = 0; y <= 30; y = y + DIAMETER + SPACE) {
  for (x = 0; x <= MAX_X; x = x + DIAMETER + SPACE) {
    console.log(`<circle cx="${x}" cy="${y}" r="${RADIUS}" />`)
  }
}
