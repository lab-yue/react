# `eslint-plugin-react-hooks-fix-via-todo-comment`

Forked from `https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks`


## How to use this

1. Assuming you already have ESLint installed, run:

```sh
# npm
npm install eslint-plugin-react-hooks-fix-via-todo-comment --save-dev

# yarn
yarn add eslint-plugin-react-hooks-fix-via-todo-comment --dev
```

2. Then replace the `react-hooks` in eslint config to `react-hooks-fix-via-todo-comment`:

```diff
{
  "extends": [
    // ...
---    "plugin:react-hooks/recommended"
+++    "plugin:react-hooks-fix-via-todo-comment/recommended"
  ]
}
```

3. Run yarn lint --fix

4. replace all generated

`//eslint-disable-next-line react-hooks-fix-via-todo-comment/exhaustive-deps`

to

`//eslint-disable-next-line react-hooks/exhaustive-deps`

5. restore your eslint config

6. uninstall this library.

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

## Questions:

Q: Why doing this?

A: Doing this enables fixing `react-hooks/exhaustive-deps` warnings gradually when you have time and set the eslint config for `react-hooks/exhaustive-deps` to error level today.

Q: Why needed to replace `react-hooks-fix-via-todo-comment/exhaustive-deps` manually?

A: Generating `//eslint-disable-next-line react-hooks/exhaustive-deps` won't stop in the multi passes of eslint and cause a infinite loop. Looking around the node to stop emit problem is doable but I didn't bother doing so.

Q: Why not codemod?

A: `https://github.com/facebook/jscodeshift` seems a good candidate but as the origin code is written as an eslint plugin, it's requires minimum modification to achieve the goal.