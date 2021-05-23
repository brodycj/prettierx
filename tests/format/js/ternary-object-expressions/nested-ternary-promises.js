// check for consistent formatting as discussed in:
// - https://github.com/eslint/eslint/issues/13971
// - https://github.com/standard/standard/issues/1624
// - https://github.com/brodybits/prettierx/issues/41

function test1() {
  return condition1
  ? condition2
    ? new Promise(1)
    : new Promise(2)
  : condition3
    ? new Promise(3)
    : new Promise(4)
}
