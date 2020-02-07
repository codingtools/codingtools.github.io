---
id: hash
title: Hash
sidebar_label: Hash
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

### Finding hash for any type
------
> We can use -t or --type flag to pass Type 
> Supported type: SHA1(default), MD5, SHA256, SHA512, RMD160 or RIPEMD160
``` bash
$ cdt hash -t md5 'abcde'
✔  success   [MD5] ab56b4d92b40713acc5af89985d4b786
```

### Finding hash for a File
------
``` bash
$ cdt hash -t md5 -f ./file.txt
✔  success   [MD5] ab56b4d92b40713acc5af89985d4b786
```

### Writing output to a file
------
> We can use -o or --output flag to pass output file path

``` bash
$ cdt hash -t sha512 -f ./file.txt -o ./out.txt
ℹ  info      reading file: ./file.txt
✔  success   [SHA512] 4493b97b4a0d21fc561070c48d4a62a9bfbeb78c5d9b3c59abf6d41f70da2e9bd45af63d8c62812cf41e50e352ec41b4f407f71d5778b575c503b70081e7a151
ℹ  info      Could not find file: ./out.txt, creating new one
✔  success   output written to file: ./out.txt
```

