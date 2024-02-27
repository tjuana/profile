module.exports = {
  // Use @typescript-eslint/parser to parse TypeScript code
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // ECMAScript versions in use
    ecmaVersion: 2021,
    // Module type: 'module' for ES6 modules
    sourceType: 'module',
    ecmaFeatures: {
      // Allow JSX syntax
      jsx: true,
    },
  },
  // Include necessary plugins
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
  // Extend ESLint configurations
  extends: [
    // Basic ESLint recommended configuration
    'eslint:recommended',
    // TypeScript recommendations from @typescript-eslint
    'plugin:@typescript-eslint/recommended',
    // React recommendations from eslint-plugin-react
    'plugin:react/recommended',
    // Accessibility recommendations from eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',
    // TODO: Import error handling fix import error
    // 'plugin:import/errors',
    // Import warnings
    'plugin:import/warnings',
    // TypeScript support for imports
    'plugin:import/typescript',
  ],
  // Custom rules
  rules: {
    // Disable the requirement for explicit return type in TypeScript functions
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Disable propTypes checking in React components
    'react/prop-types': 'off',
    // Disable warning about unnecessary React import when using JSX
    'react/react-in-jsx-scope': 'off',
    // Disable checking validity of anchors in JSX
    'jsx-a11y/anchor-is-valid': 'off',
    // Disable checking import path resolutions
    'import/no-unresolved': 'off',
    // Disable checking file extensions in imports
    'import/extensions': 'off',
  },
  // Settings to detect React version
  settings: {
    react: {
      // Automatically detect React version
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        // Path to tsconfig.json for TypeScript resolver
        project: './tsconfig.json',
      },
    },
  },
  // Ignore 'server/' folder during linting
  ignorePatterns: ['server/'],
};
