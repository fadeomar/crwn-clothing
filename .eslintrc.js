module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true, // enable global strict mode (if ecmaVersion is 5 or greater)
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "consistent-return": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": 0,
    "arrow-body-style": ["error", "as-needed"],
    "react/state-in-constructor": 0,
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "destructuring-assignment": 0,
    "dot-notation": 0,
    "react/destructuring-assignment": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/no-extraneous-dependencies": 0,
    // disables the windows/unix linebreak checks.
    "linebreak-style": [0, "error", "windows"],
    //  allow .js extensions for JSX.
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    quotes: [
      2,
      "double",
      {
        avoidEscape: true, // allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
        allowTemplateLiterals: true, // allows strings to use backticks
      },
    ],
    // configure the prettier plugin
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: false,
        endOfLine: "auto",
      },
    ],
  },
  plugins: ["react", "prettier", "react-hooks"],
};
