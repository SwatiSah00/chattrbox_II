module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
     "jsx": true,
     "modules": true
   }
 },
  "rules": {
    "no-console": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
