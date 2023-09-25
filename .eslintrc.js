module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      // "plugin:react/recommended" // Commentez ou supprimez cette ligne
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest"
    },
    "plugins": [
      // "react" // Commentez ou supprimez cette ligne
    ],
    "rules": {
      // Les règles spécifiques à React peuvent être définies dans "base.js"
    }
  }
  