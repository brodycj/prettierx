const fixtures = {
  dirname: __dirname,
  snippets: [
    "var a = { /* comment */      \nb };", // trailing whitespace after comment
    "var a = { /* comment */\nb };",
  ],
};

run_spec(fixtures, ["babel", "babel-flow", "babel-ts"]);
run_spec(fixtures, ["babel", "babel-flow", "babel-ts"], { semi: false });
