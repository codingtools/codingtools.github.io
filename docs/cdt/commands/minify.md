---
id: hash
title: Hash
sidebar_label: Hash Command
---
### `cdt hash [STRING]`

Hashing functionality for a string/file

``` bash
USAGE
  $ cdt hash [STRING]

OPTIONS
  -f, --file=file      file to be hashed
  -h, --help           show CLI help
  -s, --string=string  string to be hashed
  -t, --type=type      type of hash [SHA1(default), MD5, SHA256, SHA512, RMD160 or RIPEMD160]
```
### Finding hash of a given string for default type ( SHA1 )
------
``` bash
$ cdt hash 'abcde'
✔  success   [SHA1] 03de6c570bfe24bfc328ccd7ca46b76eadaf4334
```
* we can also use ***-s flag***

``` bash
$ cdt hash -s 'abcde'
✔  success   [SHA1] 03de6c570bfe24bfc328ccd7ca46b76eadaf4334
```
> Note: ***-s flag*** will override the string passed with argument

### Finding hash of a given string for any type e.g. MD5
------
``` bash
$ cdt hash -t md5 'abcde'
✔  success   [MD5] ab56b4d92b40713acc5af89985d4b786
```

> Note: Possible types SHA1(default), MD5, SHA256, SHA512, RMD160 or RIPEMD160

### Finding hash of a given file for any type e.g. MD5
------
``` bash
$ cdt hash -t md5 -f ./file.txt
✔  success   [MD5] ab56b4d92b40713acc5af89985d4b786
```

