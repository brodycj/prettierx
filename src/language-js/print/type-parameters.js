"use strict";

const { printDanglingComments } = require("../../main/comments");
const {
  builders: { join, line, hardline, softline, group, indent, ifBreak },
} = require("../../document");
const {
  isTestCall,
  hasComment,
  CommentCheckFlags,
  isTSXFile,
  shouldPrintComma,
  getFunctionParameters,
} = require("../utils");
const { createGroupIdMapper } = require("../../common/util");
const { shouldHugType } = require("./type-annotation");

const getTypeParametersGroupId = createGroupIdMapper("typeParameters");

function printTypeParameters(path, options, print, paramsKey) {
  const node = path.getValue();

  // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
  const typeAngleBracketSpace = options.typeAngleBracketSpacing ? " " : "";
  const typeAngleBracketLine = options.typeAngleBracketSpacing
    ? line
    : softline;

  if (!node[paramsKey]) {
    return "";
  }

  // for TypeParameterDeclaration typeParameters is a single node
  if (!Array.isArray(node[paramsKey])) {
    return print(paramsKey);
  }

  const grandparent = path.getNode(2);
  const isParameterInTestCall = grandparent && isTestCall(grandparent);

  const shouldInline =
    isParameterInTestCall ||
    node[paramsKey].length === 0 ||
    (node[paramsKey].length === 1 &&
      (shouldHugType(node[paramsKey][0]) ||
        node[paramsKey][0].type === "NullableTypeAnnotation"));

  if (shouldInline) {
    // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
    return [
      "<",
      // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
      typeAngleBracketSpace,
      join(", ", path.map(print, paramsKey)),
      // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
      typeAngleBracketSpace,
      printDanglingCommentsForInline(path, options),
      ">",
    ];
  }

  // Keep comma if the file extension is .tsx and
  // has one type parameter that isn't extend with any types.
  // Because, otherwise formatted result will be invalid as tsx.
  const trailingComma =
    node.type === "TSTypeParameterInstantiation" // https://github.com/microsoft/TypeScript/issues/21984
      ? ""
      : getFunctionParameters(node).length === 1 &&
        isTSXFile(options) &&
        !node[paramsKey][0].constraint &&
        path.getParentNode().type === "ArrowFunctionExpression"
      ? ","
      : shouldPrintComma(options, "all")
      ? ifBreak(",")
      : "";

  return group(
    // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
    [
      "<",
      // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
      indent([
        // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
        typeAngleBracketLine,
        // [prettierx merge update(s) from prettier@2.3.1 ...] keep break after comma here,
        // regardless of typeAngleBracketSpacing option (...)
        join([",", line], path.map(print, paramsKey)),
      ]),
      trailingComma,
      // [prettierx merge update(s) from prettier@2.3.1 ...] typeAngleBracketSpacing option support (...)
      typeAngleBracketLine,
      ">",
    ],
    { id: getTypeParametersGroupId(node) }
  );
}

function printDanglingCommentsForInline(path, options) {
  const node = path.getValue();
  if (!hasComment(node, CommentCheckFlags.Dangling)) {
    return "";
  }
  const hasOnlyBlockComments = !hasComment(node, CommentCheckFlags.Line);
  const printed = printDanglingComments(
    path,
    options,
    /* sameIndent */ hasOnlyBlockComments
  );
  if (hasOnlyBlockComments) {
    return printed;
  }
  return [printed, hardline];
}

function printTypeParameter(path, options, print) {
  const node = path.getValue();
  const parts = [];
  const parent = path.getParentNode();
  if (parent.type === "TSMappedType") {
    // [prettierx merge update(s) from prettier@2.3.1 ...] typeBracketSpacing option support (...)
    const typeBracketSpace = options.typeBracketSpacing ? " " : "";

    // [prettierx merge update(s) from prettier@2.3.1 ...] typeBracketSpacing option support (...)
    parts.push("[", typeBracketSpace, print("name"));
    if (node.constraint) {
      parts.push(" in ", print("constraint"));
    }
    if (parent.nameType) {
      parts.push(
        " as ",
        path.callParent(() => print("nameType"))
      );
    }
    // [prettierx merge update(s) from prettier@2.3.1 ...] typeBracketSpacing option support (...)
    parts.push(typeBracketSpace, "]");
    return parts;
  }

  if (node.variance) {
    parts.push(print("variance"));
  }

  parts.push(print("name"));

  if (node.bound) {
    parts.push(": ", print("bound"));
  }

  if (node.constraint) {
    parts.push(" extends ", print("constraint"));
  }

  if (node.default) {
    parts.push(" = ", print("default"));
  }

  return parts;
}

module.exports = {
  printTypeParameter,
  printTypeParameters,
  getTypeParametersGroupId,
};
