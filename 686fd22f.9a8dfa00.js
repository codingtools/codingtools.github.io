(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));n(121),n(12),n(54),n(142),n(144),n(0);var o=n(113);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var a={id:"avro",title:"avro",sidebar_label:"avro"},c=[{value:"cdt avro [COMMAND]",id:"cdt-avro-command",children:[]},{value:"Finding Schema for an Avro file",id:"finding-schema-for-an-avro-file",children:[]},{value:"Extracting data from an Avro file",id:"extracting-data-from-an-avro-file",children:[]},{value:"Generating Avro file",id:"generating-avro-file",children:[]}],i={rightToc:c},s="wrapper";function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,r({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"cdt-avro-command"},Object(o.b)("inlineCode",{parentName:"h3"},"cdt avro [COMMAND]")),Object(o.b)("p",null,"avro functionality, allows user to generate and inspect Avro files."),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"USAGE\ncdt avro [COMMAND]\nAvro Utility command\n\nUSAGE\n  $ cdt avro [COMMAND]\n\nOPTIONS\n  -c, --command=command        commands supported: get_schema,to_json,to_avro,to_csv\n  -f, --file=file              input file path\n  -h, --help                   show CLI help\n  -o, --output=output          output file path\n  -t, --schemaType=schemaType  schema type file path### Finding avro of a given string for default type ( SHA1 )\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"finding-schema-for-an-avro-file"},"Finding Schema for an Avro file"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We can use -f or --file flag to pass input file")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),'$ cdt avro get_schema -f \'test/resources/avro/person.avro\'\n\u2714  success   Avro Schema\n{\n  "name": "Person",\n  "type": "record",\n  "fields": [\n    {\n      "name": "ID",\n      "type": "long"\n    },\n    {\n      "name": "First",\n      "type": "string"\n    },\n    {\n      "name": "Last",\n      "type": "string"\n    },\n    {\n      "name": "Phone",\n      "type": "string"\n    },\n    {\n      "name": "Age",\n      "type": "int"\n    }\n  ]\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"We can also use -o or --output flag to pass output file ( optional ), if you want output in some file.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ cdt avro get_schema -f 'test/resources/avro/person.avro' -o 'schema.avsc'\n\u2139  info      Could not find file: schema.avsc, creating new one\n\u2714  success   output written to file: schema.avsc\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"extracting-data-from-an-avro-file"},"Extracting data from an Avro file"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Supported Output types - CSV and JSON\nuse to_json and to_csv command to extract data in JSON and CSV format respectively.")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ cdt avro to_json -f 'test/resources/avro/person.avro' -o 'test/resources/avro/output/person.json' \n\u2714  Converting Avro To Json\n\u26a0  warning   File already exists: test/resources/avro/output/person.json, overriding content\n\u2714  success   Json written to file: test/resources/avro/output/person.json\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If file already exists, it will be overridden in the process.")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"generating-avro-file"},"Generating Avro file"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"for generating Avro file, you must provide Schema ( -t or --type flag ) along with Input and Output file paths.\nschema file(.avsc) can be created manually or generated using ",Object(o.b)("strong",{parentName:"p"},"get_schema")," command")),Object(o.b)("pre",null,Object(o.b)("code",r({parentName:"pre"},{className:"language-bash"}),"$ cdt avro to_avro -f 'test/resources/avro/twitter.json' -o 'test/resources/avro/output/twitter.avro' -t 'test/resources/avro/twitter.avsc' \n\u2714  Generating Avro\n\u2139  info      reading file: test/resources/avro/twitter.json\n\u2714  success   Avro written to file: test/resources/avro/output/twitter.avro\n")))}u.isMDXComponent=!0},121:function(e,t,n){var o=n(51);o(o.S+o.F,"Object",{assign:n(122)})},122:function(e,t,n){"use strict";var o=n(13),r=n(34),a=n(123),c=n(124),i=n(52),s=n(53),u=Object.assign;e.exports=!u||n(33)((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e})),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=o}))?function(e,t){for(var n=i(e),u=arguments.length,l=1,p=a.f,f=c.f;u>l;)for(var b,v=s(arguments[l++]),d=p?r(v).concat(p(v)):r(v),m=d.length,g=0;m>g;)b=d[g++],o&&!f.call(v,b)||(n[b]=v[b]);return n}:u},123:function(e,t){t.f=Object.getOwnPropertySymbols},124:function(e,t){t.f={}.propertyIsEnumerable},142:function(e,t,n){"use strict";var o=n(143),r={};r[n(11)("toStringTag")]="z",r+""!="[object z]"&&n(19)(Object.prototype,"toString",(function(){return"[object "+o(this)+"]"}),!0)},143:function(e,t,n){var o=n(55),r=n(11)("toStringTag"),a="Arguments"==o(function(){return arguments}());e.exports=function(e){var t,n,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),r))?n:a?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},144:function(e,t,n){var o=n(52),r=n(34);n(145)("keys",(function(){return function(e){return r(o(e))}}))},145:function(e,t,n){var o=n(51),r=n(18),a=n(33);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],c={};c[e]=t(n),o(o.S+o.F*a((function(){n(1)})),"Object",c)}}}]);