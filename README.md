# ndex

> A small tool to index your directory files and generate index.html

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]
[![MIT][mit-image]](LICENSE)


## Setup


```bash

npm install ndex -g

```


## Usage



```bash

ndex -p ../0636920013327/html5canvas -e html -i *index.html

# or

ndex ../0636920013327/html5canvas -e html -i *index.html

```

```js
const ndex = requre('ndex')

ndex('../0636920013327/html5canvas', 'html', '*index.html');
// (path: any, ext?: string, ignore?: boolean)

```

module ndex

```js

const ndex: {
    (path: any, ext?: string, ignore?: boolean): void;
    config(template: any): void;
    glob: typeof G; // glob function
    treeFromPaths: (files: string[], baseDir: string, renderLabelFn: (arg0: Window, arg1: string, arg2: any, arg3: string, arg4: any, arg5: boolean) => string, options?: any) => any;
    renderData(files: any, baseDir: any, renderLabelFn: any, options?: {
        ...;
    }): any;
}

```


### Custom Template

```js

ndex.config('the js file which return a function')

```


## License

Copyright (c) 2018 Terry Cai. Licensed under the MIT license.


[npm-image]: https://img.shields.io/npm/v/ndex.svg
[npm-url]: https://npmjs.org/package/ndex
[travis-image]: https://img.shields.io/travis/icai/ndex/master.svg?label=linux
[travis-url]: https://travis-ci.org/icai/ndex
[downloads-image]: https://img.shields.io/npm/dm/ndex.svg
[downloads-url]: https://npmjs.org/package/ndex
[mit-image]: https://img.shields.io/badge/License-MIT-green.svg
