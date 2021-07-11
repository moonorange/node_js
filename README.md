# Intro to Nodejs

Based on the class in 11/28/2018

## What is Nodejs

TLDR: Environment to run JS outside a browser

- Open source runtime
- Built on chrome's V8(compiler) javascript engine
- Create by in 2009
- Not high CPU intense operations

## Globals

- process - has information about the environment the page is running in
- require - function to find and use modules in current module(to import module)
- __dirname - the current direct0ry path
- module - information about current module, methods for making module consumable(to export module)
- global - like window, its the "global" object. Almost NEVER use this
- ... many more

## Modules

Encapsulated code


What Nodejs does for you under the hood is something like below.
That's the reason why you can use globals everywhere. Only things that changes each time are passed as arguments

```javascript
var module1 = (function(exports, require, module, __filename, __dirname){
  // your node js code in a file
})
```

Nodejs uses commonjs for its module system
ESM(ecmascript modules) *new standard
