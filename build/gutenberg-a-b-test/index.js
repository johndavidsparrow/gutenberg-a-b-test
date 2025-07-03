/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gutenberg-a-b-test/ab-container/block.json":
/*!********************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-container/block.json ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":"A/B Test Container","category":"widgets","icon":"randomize","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false}}');

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-container/edit.js":
/*!*****************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-container/edit.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
      template: [['create-block/ab-variant', {
        label: 'A'
      }], ['create-block/ab-variant', {
        label: 'B'
      }]],
      allowedBlocks: ['create-block/ab-variant'],
      templateLock: "all",
      orientation: "horizontal"
    })
  });
}

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-container/index.js":
/*!******************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-container/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/gutenberg-a-b-test/ab-container/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/gutenberg-a-b-test/ab-container/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/gutenberg-a-b-test/ab-container/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  parent: ['create-block/gutenberg-a-b-test']
});

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-container/save.js":
/*!*****************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-container/save.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-variant/block.json":
/*!******************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-variant/block.json ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"title":"A/B Test Variant","category":"widgets","icon":"randomize","description":"Example block scaffolded with Create Block tool.","example":{},"supports":{"html":false}}');

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-variant/edit.js":
/*!***************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-variant/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gutenberg A B Test – hello from the editor!', 'gutenberg-a-b-test')
  });
}

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-variant/index.js":
/*!****************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-variant/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/gutenberg-a-b-test/ab-variant/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/gutenberg-a-b-test/ab-variant/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/gutenberg-a-b-test/ab-variant/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/gutenberg-a-b-test/ab-variant/save.js":
/*!***************************************************!*\
  !*** ./src/gutenberg-a-b-test/ab-variant/save.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Gutenberg A B Test – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/gutenberg-a-b-test/block.json":
/*!*******************************************!*\
  !*** ./src/gutenberg-a-b-test/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/gutenberg-a-b-test","version":"0.1.0","title":"Gutenberg A B Test","category":"widgets","icon":"randomize","description":"Example block scaffolded with Create Block tool.","attributes":{"id":{"type":"string","label":"Tester"}},"example":{},"supports":{"html":false},"textdomain":"gutenberg-a-b-test","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ }),

/***/ "./src/gutenberg-a-b-test/edit.js":
/*!****************************************!*\
  !*** ./src/gutenberg-a-b-test/edit.js ***!
  \****************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/src/gutenberg-a-b-test/edit.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (39:2)\n\n\u001b[0m \u001b[90m 37 |\u001b[39m \t\t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mPanelBody\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 38 |\u001b[39m \t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mInspectorControls\u001b[39m\u001b[33m>\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 |\u001b[39m \t\t\u001b[33m<\u001b[39m\u001b[33mp\u001b[39m { \u001b[33m...\u001b[39museBlockProps() }\u001b[33m>\u001b[39m\n \u001b[90m    |\u001b[39m \t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 40 |\u001b[39m \t\t\t{ __(\n \u001b[90m 41 |\u001b[39m \t\t\t\t\u001b[32m'Gutenberg A B Test – hello from the editor!'\u001b[39m\u001b[33m,\u001b[39m\n \u001b[90m 42 |\u001b[39m \t\t\t\t\u001b[32m'gutenberg-a-b-test'\u001b[39m\u001b[0m\n    at constructor (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:367:19)\n    at JSXParserMixin.raise (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:6627:19)\n    at JSXParserMixin.jsxParseElementAt (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:4772:18)\n    at JSXParserMixin.jsxParseElement (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:4779:17)\n    at JSXParserMixin.parseExprAtom (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:4789:19)\n    at JSXParserMixin.parseExprSubscripts (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11076:23)\n    at JSXParserMixin.parseUpdate (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11061:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11041:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10894:61)\n    at JSXParserMixin.parseExprOps (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10899:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10876:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10826:21)\n    at /Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10795:39\n    at JSXParserMixin.allowInAnd (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12427:12)\n    at JSXParserMixin.parseMaybeAssignAllowIn (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10795:17)\n    at JSXParserMixin.parseMaybeAssignAllowInOrVoidPattern (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12494:17)\n    at JSXParserMixin.parseParenAndDistinguishExpression (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11674:28)\n    at JSXParserMixin.parseExprAtom (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11326:23)\n    at JSXParserMixin.parseExprAtom (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:4794:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11076:23)\n    at JSXParserMixin.parseUpdate (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11061:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:11041:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10894:61)\n    at JSXParserMixin.parseExprOps (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10899:23)\n    at JSXParserMixin.parseMaybeConditional (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10876:23)\n    at JSXParserMixin.parseMaybeAssign (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10826:21)\n    at JSXParserMixin.parseExpressionBase (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10779:23)\n    at /Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10775:39\n    at JSXParserMixin.allowInAnd (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12422:16)\n    at JSXParserMixin.parseExpression (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:10775:17)\n    at JSXParserMixin.parseReturnStatement (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13142:28)\n    at JSXParserMixin.parseStatementContent (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12798:21)\n    at JSXParserMixin.parseStatementLike (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12767:17)\n    at JSXParserMixin.parseStatementListItem (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12747:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13316:61)\n    at JSXParserMixin.parseBlockBody (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13309:10)\n    at JSXParserMixin.parseBlock (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13297:10)\n    at JSXParserMixin.parseFunctionBody (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12101:24)\n    at JSXParserMixin.parseFunctionBodyAndFinish (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12087:10)\n    at /Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13445:12\n    at JSXParserMixin.withSmartMixTopicForbiddingContext (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12404:14)\n    at JSXParserMixin.parseFunction (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13444:10)\n    at JSXParserMixin.parseExportDefaultExpression (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13907:19)\n    at JSXParserMixin.parseExport (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13828:25)\n    at JSXParserMixin.parseStatementContent (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12878:27)\n    at JSXParserMixin.parseStatementLike (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12767:17)\n    at JSXParserMixin.parseModuleItem (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12744:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13316:36)\n    at JSXParserMixin.parseBlockBody (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:13309:10)\n    at JSXParserMixin.parseProgram (/Users/johnsparrow/Sites/Learning/WP-Sandbox/wp-content/plugins/gutenberg-a-b-test/node_modules/@babel/parser/lib/index.js:12625:10)");

/***/ }),

/***/ "./src/gutenberg-a-b-test/index.js":
/*!*****************************************!*\
  !*** ./src/gutenberg-a-b-test/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/gutenberg-a-b-test/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/gutenberg-a-b-test/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/gutenberg-a-b-test/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/gutenberg-a-b-test/block.json");
/* harmony import */ var _ab_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ab-container */ "./src/gutenberg-a-b-test/ab-container/index.js");
/* harmony import */ var _ab_variant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ab-variant */ "./src/gutenberg-a-b-test/ab-variant/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/gutenberg-a-b-test/save.js":
/*!****************************************!*\
  !*** ./src/gutenberg-a-b-test/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Gutenberg A B Test – hello from the saved content!'
  });
}

/***/ }),

/***/ "./src/gutenberg-a-b-test/style.scss":
/*!*******************************************!*\
  !*** ./src/gutenberg-a-b-test/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gutenberg-a-b-test/index": 0,
/******/ 			"gutenberg-a-b-test/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgutenberg_a_b_test"] = globalThis["webpackChunkgutenberg_a_b_test"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["gutenberg-a-b-test/style-index"], () => (__webpack_require__("./src/gutenberg-a-b-test/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map