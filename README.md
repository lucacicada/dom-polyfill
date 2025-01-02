# DOM-Polyfill

DOM for every js runtime!

Mainly for [Jint](https://github.com/sebastienros/jint), [ClearScript](https://github.com/microsoft/ClearScript) and other pure JS runtimes that do not support even the basic DOM.

## Features

It has support for:

- **URL**
- **URLSearchParams**
- **Headers**
- **DOMParser**

## Usage

> Since most of those runtimes to not allow downloading scripts from the internet, you will have to either compile this yourself or download the compiled version from the releases.

You have 2 options to choose from, polyfill the global object, or use the es6 module.

### Global Object

`DOM.js` is a self-invoking function, when imported it set `globalThis.URL` to a polyfill implementation.

```csharp
// Jint
engine.ExecuteFile(File.ReadAllText("DOM.min.js"));
```

```js
// example.js
const url = new URL('http://example.com')
const params = new URLSearchParams('a=1&b=2')
const headers = new Headers()
```

### ES6 Module

`DOM.esm.js` is an es6 module that exports `URL`, `URLSearchParams`, `Headers` and `DOMParser`.

```csharp
// ClearScript
v8.AddSystemDocument("dom", File.ReadAllText("DOM.esm.min.js"));
```

```js
// example.js
import { URL } from 'dom'

const url = new URL('http://example.com')
const params = new URLSearchParams('a=1&b=2')
const headers = new Headers()
```

## Implementations

- **URL** - [zloirock/core-js](https://github.com/zloirock/core-js)
- **URLSearchParams** - [zloirock/core-js](https://github.com/zloirock/core-js)
- **Headers** - [mswjs/headers-polyfill](https://github.com/mswjs/headers-polyfill)
- **DOMParser** - [WebReflection/linkedom](https://github.com/WebReflection/linkedom)

## Performance

A pure js implementation is not gonna be as fast as a native implementation.
This is a cheap way to get a consistent set of APIs across different runtimes for your scripts.

For more complex scenarios, consider embedding Deno, Node or any other JS runtime.

## I want **MORE**!

Here's a gist with **MORE** (your browser might explode):
- [Deno JSDOM port](https://gist.github.com/lucacicada/ccd0879345250a3f34c20b9db13358ef)
