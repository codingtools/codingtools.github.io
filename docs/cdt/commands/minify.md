---
id: minify
title: minify
sidebar_label: minify
---
### `cdt minify [FILE]`

Minify functionality, Allows user to minify supported file.

``` bash
USAGE
  $ cdt minify [FILE]

OPTIONS
  -f, --file=file              file to be minified
  -h, --help                   show CLI help
  -o, --outputFile=outputFile  output file path

  -t, --type=type              type of file to be minified, it will try to find type
                               with extension supported: JS, HTML/HTM, CSS

```
### Minifying a file 
------
> ( supported type: JS, HTML/HTM, CSS )
``` bash
$ cdt minify test.js
ℹ  info      reading file: test.js
ℹ  info      file type: JS
✔ file: undefined minified
✔  success   minified output:
console.log("lorem ipsum");let x=10;x<10?console.log("x is less than: "+x):x>10?console.log("x is more than: "+x):console.log("x is equals to: "+x);
```
* we can also use ***-f flag to pass file path***
``` bash
$ cdt minify -f test.js
ℹ  info      reading file: test.js
ℹ  info      file type: JS
✔ file: undefined minified
✔  success   minified output:
console.log("lorem ipsum");let x=10;x<10?console.log("x is less than: "+x):x>10?console.log("x is more than: "+x):console.log("x is equals to: "+x);
```
> Note: ***-f flag*** will override the string file path passed with argument

### Specifying file type
------
> We can use  -t or --type flag  for passing type e.g. JS
``` bash
$ cdt minify -t js test.js
ℹ  info      reading file: test.js
ℹ  info      file type: JS
✔ file: undefined minified
✔  success   minified output:
console.log("lorem ipsum");let x=10;x<10?console.log("x is less than: "+x):x>10?console.log("x is more than: "+x):console.log("x is equals to: "+x);
```
> Note: If a invalid type is given ex. if HTML is given and file is JS, then we'll get an error.
 
### Writing output to a file 
------
> We can use -o or --output flag to pass output file path
``` bash
cdt minify -f test.css -o output.css
ℹ  info      reading file: test.css
ℹ  info      file type: CSS
✔ file: test/resources/test.css minified
ℹ  info      Could not find file: output.css, creating new one
✔  success   output written to file: output.css
```
