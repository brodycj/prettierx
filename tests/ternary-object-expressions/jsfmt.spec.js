run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  alignTernaryLines: true,
  arrowParens: "avoid", // added to help preserve snapshot order
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  alignTernaryLines: true,
  tabWidth: 4,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  alignTernaryLines: true,
  useTabs: true,
});
run_spec(__dirname, ["babel", "babel-flow", "flow", "typescript"], {
  alignTernaryLines: true,
  useTabs: true,
  tabWidth: 4,
});
