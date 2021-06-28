run_spec(__dirname, ["babel", "babel-flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus: true,
});
run_spec(__dirname, ["babel", "babel-flow", "typescript"], {
  breakLongMethodChains: true,
});
