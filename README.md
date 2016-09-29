# EcmaChallenge

A series of challenges in ECMA Script 2015 for @sumanita

## 1. Arrays

An initial familiarisation challenge to build up knowledge of the Git and unit-testing approach.

Given an array of ints, output an array of squares.

For example:

```
[1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
[5, 2, 9] -> [25, 4, 81]
[] -> []
null -> <<throws an Error()>>
```

### How-to

To get started, run:

`> git clone https://github.com/a2wd/EcmaChallenge.git`

To finish the first challenge, first change directory to the arrays challenge, then run **npm** to get the mocha (unit-testing) dependency:

```
> cd EcmaChallenge\1.Arrays
> npm install
```

Use *app.js* to write your code, while in development you can use `console.log` or the **node-inspector** package to check your work.

When you are done, use the npm test command:

`npm test`

This will let you know if your code passes or if it needs more work.