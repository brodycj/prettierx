run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  // bogus option to help preserve snapshot order
  bogus: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  tabWidth: 4,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  useTabs: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  useTabs: true,
  tabWidth: 4,
});
