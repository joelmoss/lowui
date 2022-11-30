module.exports = {
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/all",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["simple-import-sort", "import", "jest"],
  env: {
    browser: true,
    es2020: true,
    jest: true
  },
  root: true,
  settings: {
    propWrapperFunctions: ["exact"],
    react: {
      version: "18.2.0"
    }
  },
  overrides: [
    {
      files: ["*.test.jsx"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react"
      ],
      rules: {
        "react/jsx-no-bind": "off"
      },
      globals: {
        setup: "readonly"
      }
    }
  ],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Parent imports. Put `..` last.  Other relative imports. Put same-folder imports and `.` last.
          ["^\\/", "^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Style imports.
          ["^.+\\.css$"]
        ]
      }
    ],
    "import/first": "error",
    "import/exports-last": "error",
    "import/no-commonjs": "error",
    "import/no-amd": "error",
    "import/no-nodejs-modules": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",

    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "react/hook-use-state": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-max-depth": 0,
    "react/jsx-no-literals": 0,
    "react/no-multi-comp": 0,
    "react/sort-prop-types": [
      2,
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
        noSortAlphabetically: true
      }
    ]
  }
}
