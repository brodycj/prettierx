// correct for:
// * "generator-star-spacing": [ "error", { "before": true, "after": true } ],
// but *not* for the following standard.js rules:
// * "space-before-function-paren": [ "error", "always" ],
// * "semi": [ "error", "never" ],

function * generator() {}
const anonymous = function * () {};
const shorthand = { * generator() {} };
class Example {
  async * foo() {}
}
