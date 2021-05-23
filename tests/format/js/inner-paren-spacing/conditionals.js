if (someVeryLongFunc(someVeryLongArgA, someVeryLongArgB, someVeryLongArgC, someVeryLongArgD)) { }

const radioSelectedAttr =
  (isAnyValueSelected &&
    node.getAttribute(radioAttr.toLowerCase()) === radioValue) ||
  ((!isAnyValueSelected && values[a].default === true) || a === 0);

function f() {
  if (position)
    {return { name: pair };}
  return {
      name: pair.slice(0, Math.max(0, position)),
      value: pair.slice(Math.max(0, position + 1))
    };
}


(foo || bar) || baz;
foo || (bar || baz);
foo || ((bar || baz) || qux);
foo || (bar || (baz || qux));
foo || (bar || ((baz || qux) || xyz));
foo || (bar || (baz || (qux || xyz)));
