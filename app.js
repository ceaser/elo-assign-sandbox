// Tiny app for exercising elo's /assign loop. Pure functions only, so the
// same file runs in the browser (index.html) and under `node --test`.

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

if (typeof module !== "undefined") {
  module.exports = { add, multiply };
}
