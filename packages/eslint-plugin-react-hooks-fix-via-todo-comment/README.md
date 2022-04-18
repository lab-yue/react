# `eslint-plugin-react-hooks-fix-via-todo-comment`

Forked from `https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks`


## Installation

Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-react-hooks-fix-via-todo-comment --save-dev

# yarn
yarn add eslint-plugin-react-hooks-fix-via-todo-comment --dev
```

Then extend the recommended eslint config:

```js
{
  "extends": [
    // ...
    "plugin:react-hooks-fix-via-todo-comment/recommended"
  ]
}
```


## Advanced Configuration

`exhaustive-deps` can be configured to validate dependencies of custom Hooks with the `additionalHooks` option.
This option accepts a regex to match the names of custom Hooks that have dependencies.

```js
{
  "rules": {
    // ...
    "react-hooks-fix-via-todo-comment/exhaustive-deps": ["warn", {autoFixComment: "// FIXME(?): it will be fixed by someone else."}]
  }
}
```

## Note

only a very little part of tests are be updated and tested