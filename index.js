module.exports = {
	extends: [
		"eslint:recommended"
	],
	rules: {
		"accessor-pairs": "error",
		"array-bracket-newline": [
			"error",
			"consistent"
		],
		"array-bracket-spacing": "error",
		"array-callback-return": "error",
		"array-element-newline": [
			"error",
			"consistent"
		],
		"arrow-body-style": "off",
		"arrow-parens": [
			"warn",
			"as-needed",
			{
				"requireForBlockBody": true
			}
		],
		"arrow-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"block-scoped-var": "off",
		"block-spacing": [
			"error",
			"always"
		],
		"brace-style": [
			"warn",
			"stroustrup"
		],
		"callback-return": "off",
		"camelcase": "error",
		"capitalized-comments": "off",
		"comma-dangle": "off",
		"comma-spacing": [
			"warn",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"complexity": "off",
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-return": "error",
		"consistent-this": "error",
		"curly": "off",
		"default-case": "off",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		"eol-last": "error",
		"eqeqeq": "off",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		"func-names": [
			"error",
			"never"
		],
		"func-style": "off",
		"function-paren-newline": "off",
		"generator-star-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"global-require": "off",
		"guard-for-in": "off",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": "off",
		"id-match": "error",
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"indent": [
			"error",
			"tab",
			{
				"outerIIFEBody": 0,
				"MemberExpression": "off",
				"SwitchCase": 1
			}
		],
		"init-declarations": "off",
		"jsx-quotes": "error",
		"key-spacing": "warn",
		"keyword-spacing": "warn",
		"line-comment-position": "off",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "error",
		"lines-between-class-members": "error",
		"max-depth": "off",
		"max-len": "off",
		"max-lines": "off",
		"max-nested-callbacks": "error",
		"max-params": "off",
		"max-statements": "off",
		"max-statements-per-line": "off",
		"multiline-comment-style": "off",
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-parens": "off",
		"newline-per-chained-call": [
			"error",
			{
				"ignoreChainWithDepth": 3
			}
		],
		"no-alert": "off",
		"no-array-constructor": "error",
		"no-await-in-loop": "off",
		"no-bitwise": "off",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-confusing-arrow": ["error", {"allowParens": true}],
		"no-constant-condition": [
			"error",
			{
				"checkLoops": false
			}
		],
		"no-control-regex": "off",
		"no-continue": "off",
		"no-div-regex": "off",
		"no-duplicate-imports": "error",
		"no-else-return": "off",
		"no-empty": "off",
		"no-empty-function": "off",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": "off",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "off",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "off",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "warn",
		"no-magic-numbers": "off",
		"no-mixed-operators": "off",
		"no-mixed-requires": "error",
		"no-multi-assign": "off",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": "warn",
		"no-native-reassign": "error",
		"no-negated-condition": "off",
		"no-negated-in-lhs": "error",
		"no-nested-ternary": "off",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-path-concat": "error",
		"no-plusplus": "off",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "off",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "off",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "off",
		"no-shadow-restricted-names": "error",
		"no-spaced-func": "error",
		"no-sync": "off",
		"no-tabs": "off",
		"no-template-curly-in-string": "error",
		"no-ternary": "off",
		"no-throw-literal": "error",
		"no-trailing-spaces": [
			"error",
			{
				"skipBlankLines": true
			}
		],
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-underscore-dangle": "off",
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": [
			"error",
			{
				"defaultAssignment": true
			}
		],
		"no-unused-expressions": [
			"error",
			{
				"allowShortCircuit": true
			}
		],
		"no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_",
				"varsIgnorePattern": "^_"
			}
		],
		"no-use-before-define": "off",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "off",
		"no-void": "error",
		"no-warning-comments": "off",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-shorthand": "off",
		"one-var": "off",
		"one-var-declaration-per-line": "off",
		"operator-assignment": [
			"error",
			"always"
		],
		"operator-linebreak": [
			"error",
			"before"
		],
		"padded-blocks": [
			"error",
			"never"
		],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "directive", next: "*" },
			{ blankLine: "any",    prev: "directive", next: "directive" }
		],
		"prefer-arrow-callback": "off",
		"prefer-const": "off",
		"prefer-destructuring": "off",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-rest-params": "off",
		"prefer-spread": "error",
		"prefer-template": "off",
		"quote-props": [
			"error",
			"as-needed"
		],
		"quotes": "off",
		"radix": [
			"error",
			"as-needed"
		],
		"require-await": "off",
		"require-yield": "off",
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"semi": "error",
		"semi-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"semi-style": [
			"error",
			"last"
		],
		"space-before-blocks": "warn",
		"space-before-function-paren": [
			"warn",
			{
				"anonymous": "always",
				"asyncArrow": "always",
				"named": "never"
			}
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "warn",
		"space-unary-ops": "error",
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": [
			"error",
			"never"
		],
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"vars-on-top": "off",
		"wrap-regex": "off",
		"yield-star-spacing": "error"
	}
};
