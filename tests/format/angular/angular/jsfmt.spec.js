run_spec(__dirname, ["angular"], { trailingComma: "none" });
run_spec(__dirname, ["angular"]);
run_spec(__dirname, ["angular"], { printWidth: 1 });
run_spec(__dirname, ["angular"], { htmlWhitespaceSensitivity: "ignore" });
// [prettierx]: broken-out bracket spacing options
run_spec(__dirname, ["angular"], { objectCurlySpacing: false });
