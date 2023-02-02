<<<<<<< HEAD
// [prettierx] test with all Babel parsers
// (babel-ts is normally included with typescript by default)
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  errors: { espree: ["like-regexp.js"] },
});
=======
run_spec(__dirname, ["babel", "flow", "typescript"]);
>>>>>>> 963220fb643a6ffb5614ec38edcecd9988442b57
