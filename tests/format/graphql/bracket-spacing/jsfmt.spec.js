// [prettierx merge update from prettier@2.3.1 ...]
// using bogus option to keep snapshot more consistent with Prettier 2.3.1
run_spec(__dirname, ["graphql"], { bogus2: null });
run_spec(__dirname, ["graphql"], { bogus1: null, graphqlCurlySpacing: false });
