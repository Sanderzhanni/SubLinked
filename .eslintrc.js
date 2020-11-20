const defaultRules = [
  'react-app',
  // any other plugins or custom configuration you'd like to extend from.
];

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb-typescript'],
  plugins: ["react-hooks"],
  rules: {
    'array-callback-return': 'warn',
    'consistent-return': 'off',
    'default-case': 'warn',
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-vars": "warn",
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        ...defaultRules,
        'plugin:@typescript-eslint/recommended',
        // any other TypeScript specific config (from a plugin, or custom)
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        "no-unused-vars": "off",
        '@typescript-eslint/no-unused-vars': 'off',
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/comma-dangle": "error",
        "@typescript-eslint/no-unused-expressions": "off",
        // etc.
      },
    },
  ],
  settings: {
    react: {
      // React version. "detect" automatically picks the version you have installed.
      version: 'detect',
    },
  },
};
