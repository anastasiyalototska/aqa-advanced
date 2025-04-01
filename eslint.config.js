import js from '@eslint/js';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'constructor-super': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
