(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));a(0);var n=a(113);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const b={id:"hash",title:"hash",sidebar_label:"hash"},i=[{value:"cdt hash [STRING]",id:"cdt-hash-string",children:[]},{value:"Finding hash of a given string for default type ( SHA1 )",id:"finding-hash-of-a-given-string-for-default-type--sha1-",children:[]},{value:"Finding hash for any type",id:"finding-hash-for-any-type",children:[]},{value:"Finding hash for a File",id:"finding-hash-for-a-file",children:[]},{value:"Writing output to a file",id:"writing-output-to-a-file",children:[]}],s={rightToc:i},r="wrapper";function l({components:e,...t}){return Object(n.b)(r,c({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"cdt-hash-string"},Object(n.b)("inlineCode",{parentName:"h3"},"cdt hash [STRING]")),Object(n.b)("p",null,"Hashing functionality, allows user to Hash String/File for all supported types. "),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"USAGE\n  $ cdt hash [STRING]\n\nOPTIONS\n  -f, --file=file      file to be hashed\n  -h, --help           show CLI help\n  -s, --string=string  string to be hashed\n  -t, --type=type      type of hash [SHA1(default), MD5, SHA256, SHA512, RMD160 or RIPEMD160]\n")),Object(n.b)("h3",{id:"finding-hash-of-a-given-string-for-default-type--sha1-"},"Finding hash of a given string for default type ( SHA1 )"),Object(n.b)("hr",null),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cdt hash 'abcde'\n\u2714  success   [SHA1] 03de6c570bfe24bfc328ccd7ca46b76eadaf4334\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"we can also use ",Object(n.b)("strong",{parentName:"li"},Object(n.b)("em",{parentName:"strong"},"-s flag")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cdt hash -s 'abcde'\n\u2714  success   [SHA1] 03de6c570bfe24bfc328ccd7ca46b76eadaf4334\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note: ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("em",{parentName:"strong"},"-s flag"))," will override the string passed with argument")),Object(n.b)("h3",{id:"finding-hash-for-any-type"},"Finding hash for any type"),Object(n.b)("hr",null),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"We can use -t or --type flag to pass Type\nSupported type: SHA1(default), MD5, SHA256, SHA512, RMD160 or RIPEMD160"),Object(n.b)("pre",{parentName:"blockquote"},Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cdt hash -t md5 'abcde'\n\u2714  success   [MD5] ab56b4d92b40713acc5af89985d4b786\n"))),Object(n.b)("h3",{id:"finding-hash-for-a-file"},"Finding hash for a File"),Object(n.b)("hr",null),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cdt hash -t md5 -f ./file.txt\n\u2714  success   [MD5] ab56b4d92b40713acc5af89985d4b786\n")),Object(n.b)("h3",{id:"writing-output-to-a-file"},"Writing output to a file"),Object(n.b)("hr",null),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"We can use -o or --output flag to pass output file path")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-bash"}),"$ cdt hash -t sha512 -f ./file.txt -o ./out.txt\n\u2139  info      reading file: ./file.txt\n\u2714  success   [SHA512] 4493b97b4a0d21fc561070c48d4a62a9bfbeb78c5d9b3c59abf6d41f70da2e9bd45af63d8c62812cf41e50e352ec41b4f407f71d5778b575c503b70081e7a151\n\u2139  info      Could not find file: ./out.txt, creating new one\n\u2714  success   output written to file: ./out.txt\n")))}l.isMDXComponent=!0}}]);