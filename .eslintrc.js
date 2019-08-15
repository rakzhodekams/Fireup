module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
		'jest/globals': true,
		'shared-node-browser': true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "experimentalObjectRestSpread": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "spread": true,
      "superInFunctions": false,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "jsx": true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
	'redux-saga',
	'jest',
	'flowtype',
	'prettier',
	'compat',
	'import'
  ],
  rules: {
    'compat/compat': 1,
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				printWidth: 80,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'es6',
				jsxBracketSameLine: false,
				semi: false,
			},
		],
		'no-var': 2,
		'no-const-assign': 'error',
		radix: 'error',
		'prefer-template': 'error',
		'prefer-const': 'error',
		'prefer-spread': 'error',
		eqeqeq: ['error', 'always'],
		semi: [2, 'never'],
		'default-case': 2,
		'template-curly-spacing': 0, // Prettier.
		'arrow-parens': 0, // Does not work with Flow generic types
		'consistent-return': 0, // Flow.
		// Prefer new line before return
		// http://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 'error',
		'no-use-before-define': [
			'error',
			{ functions: false, classes: false, variables: true },
		],
		'import/no-extraneous-dependencies': 0,
		'import/extensions': 0,
		'import/no-unresolved': 0,
		'no-return-await': 0,
		'no-restricted-syntax': 0,
		'no-underscore-dangle': 0,
		'import/first': 0,
		'no-restricted-globals': 1,
		'no-useless-escape': 1,
		//was not working when used with flow prop types
		'no-unused-vars': 1,
		'react/no-unused-prop-types': 1,
		// require or disallow Yoda conditions
		// https://eslint.org/docs/rules/yoda
		yoda: ['error', 'never', { exceptRange: true }],
		// Require modules with a single export to use a default export
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 0,

		// no longer defined
		'jsx-a11y/href-no-hash': 'off',

		'global-require': 0, // Used by webpack isomorphic tools and React Native.
		'no-console': 0, // we are enabling this in the scripts
		'no-debugger': 0, // we are enabling this in the scripts
		'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
		quotes: ['error', 'single', { avoidEscape: true }],
		// React control override.
		'react/display-name': 0,
		'react/forbid-prop-types': 0, // using Flow types.
		'react/jsx-closing-bracket-location': 0, // Prettier.
		'react/jsx-filename-extension': 0, // JSX belongs to .js files.
		'react/jsx-indent': 0, // Prettier.
		'react/jsx-indent-props': 0, // Prettier.
		'react/jsx-wrap-multilines': 0, // Prettier.
		'react/no-danger': 0, // Control freaky.
		'react/no-unescaped-entities': 0, // Prettier.
		'react/no-unused-prop-types': 0, // Flow.
		'react/prop-types': 0, // Flow.
		'react/require-default-props': 0, // Flow.
		'react/jsx-no-bind': 2,
		'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
  },
  settings: {
		polyfills: ['promises'],
		flowtype: {
			onlyFilesWithFlowAnnotation: false,
		}
	}
};
