run_spec(__dirname, ["typescript"], {
  disableBabelTS: [
    "decrementAndIncrementOperators.ts",
    "downlevelLetConst1.ts",
    "errorOnInitializerInInterfaceProperty.ts",
    "modifiersOnInterfaceIndexSignature1.ts"
  ]
});
