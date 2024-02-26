# earl-eslint-config
Eslint configurations based on AirBnB, standard for JS, JSX, TS, TSX, React


## Example usage in project, .eslintrc.json


```
{
  "extends": [
    "@earlorg/eslint-config/base",
    "@earlorg/eslint-config/base-react-jsx",
    "@earlorg/eslint-config/base-typescript",
    "@earlorg/eslint-config/perf-react-jsx",
    "@earlorg/eslint-config/app-common",
    "plugin:import/typescript"
  ],
  "globals": {
    "React": "writable",
    "EventListener": "readonly",
    "JSX": "readonly",
    "ESModule": "readonly",
    "ForwardedRef": "readonly"
  }
}

```



## Example of usage in project, .prettierrc.js

```
module.exports = {
  ...require("@earlorg/eslint-config/prettier"),
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 120,
  "endOfLine": "auto"
}
```