"use strict";

const {
  builders: { ifBreak, line, softline, hardline, join },
} = require("../../document");
const { isEmptyNode, getLast, hasComments, hasEndComments, isNode } = require("../utils");
const { printNextEmptyLine, alignWithSpaces } = require("./misc");

function printFlowMapping(path, print, options) {
  const node = path.getValue();
  const isMapping = node.type === "flowMapping";
  const openMarker = isMapping ? "{" : "[";
  const closeMarker = isMapping ? "}" : "]";

  /** @type {softline | line} */
  let bracketSpacing = softline;
  // [prettierx merge update from prettier@2.3.2] yamlBracketSpacing option
  if (isMapping && node.children.length > 0 && options.yamlBracketSpacing) {
    bracketSpacing = !hasCommentOnAnyChildren(node) ? line : hardline;
  }
  const lastItem = getLast(node.children);
  const isLastItemEmptyMappingItem =
    lastItem &&
    lastItem.type === "flowMappingItem" &&
    isEmptyNode(lastItem.key) &&
    isEmptyNode(lastItem.value);

  return [
    openMarker,
    alignWithSpaces(options.tabWidth, [
      bracketSpacing,
      printChildren(path, print, options),
      options.trailingComma === "none" ? "" : ifBreak(","),
      hasEndComments(node)
        ? [hardline, join(hardline, path.map(print, "endComments"))]
        : "",
    ]),
    isLastItemEmptyMappingItem ? "" : bracketSpacing,
    closeMarker,
  ];
}

function hasCommentOnAnyChildren(node) {
  let hasComment = false;
  node.children.each(child => {
    if (isNode(child, ["flowMappingItem"])) {
      const { value } = child;
      const isEmptyMappingValue = isEmptyNode(value);
      if (!isEmptyMappingValue && hasComments(value.content)) {
        hasComment = true;
      }
    }
  });
  return hasComment;
}

function printChildren(path, print, options) {
  const node = path.getValue();
  const parts = path.map(
    (childPath, index) => [
      print(),
      index === node.children.length - 1
        ? ""
        : [
          ",",
          line,
          node.children[index].position.start.line !==
            node.children[index + 1].position.start.line
            ? printNextEmptyLine(childPath, options.originalText)
            : "",
        ],
    ],
    "children"
  );
  return parts;
}

module.exports = {
  printFlowMapping,
  // Alias
  printFlowSequence: printFlowMapping,
};
