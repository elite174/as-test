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
      "no-unused-vars": ["error", { "varsIgnorePattern": "Db|Express" }],
      "semi": ["error", "always"],
      "@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/react-in-jsx-scope": 2
  }
};