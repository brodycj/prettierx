run_spec(__dirname, ["typescript"], {
  // "Standard JS":
  arrowParens: "avoid", // added to preserve snapshot order
  spaceBeforeFunctionParen: true,
  trailingComma: "none",
});

run_spec(__dirname, ["typescript"], {
  // "Standard JS":
  arrowParens: "avoid", // added to preserve snapshot order
  trailingComma: "none",
});

run_spec(__dirname, ["typescript"], {
  parenSpacing: true,
  // "Standard JS":
  spaceBeforeFunctionParen: true,
  trailingComma: "none",
});

run_spec(__dirname, ["typescript"], {
  parenSpacing: true,
  // "Standard JS":
  trailingComma: "none",
});
