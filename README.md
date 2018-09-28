# ndex

> A small tool to index your directory files and generate index.html


## Setup


```bash

npm install ndex -g

```



## Usage



```bash

ndex -p ../0636920013327/html5canvas -n html -i *index.html

```

```js
const ndex = requre('ndex')

ndex('../0636920013327/html5canvas', 'html', '*index.html');
// (path: any, name?: string, ignore?: boolean)

```

module ndex

```js

const ndex: {
    (path: any, name?: string, ignore?: boolean): void;
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
