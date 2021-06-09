// [prettierx] test script notice:
// This test script runs for test files in parent directory,
// **not** on any files in *this* directory.

const dirpath = `${__dirname}/../typescript/conformance/types/mappedType`;

run_spec(dirpath, ["typescript"], {
  typeCurlySpacing: false,
});
