module.exports = {
  "ecmaFeatures":{
      "jsx": true,
      "modules": true
  },
  "env": {
      "es6": true,
      "node": true,
      "browser": true
  },
  "extends": "eslint:recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint",
      "react"
  ],
  "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "rules": {
      "no-unused-vars": "error",
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
      "no-console": "error",
      "no-multi-spaces": "error",
      "no-trailing-spaces": "error",
      "semi": ["error", "always"],
      "curly": "error",
      "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2
  }
};