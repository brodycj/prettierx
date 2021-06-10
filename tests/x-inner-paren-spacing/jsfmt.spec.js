// [prettierx merge update(s) from prettier@2.3.1 ...]
// XXX TBD issue with ohter Babel parsers - ??
run_spec(__dirname, ["babel-ts"], {
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  spaceUnaryOps: true,
  templateCurlySpacing: true,
});
