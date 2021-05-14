---
id: avro
title: avro
sidebar_label: avro
---
### `cdt avro [COMMAND]`

avro functionality, allows user to generate and inspect Avro files.

``` bash
USAGE
cdt avro [COMMAND]
Avro Utility command

USAGE
  $ cdt avro [COMMAND]

OPTIONS
  -c, --command=command        commands supported: get_schema,to_json,to_avro,to_csv
  -f, --file=file              input file path
  -h, --help                   show CLI help
  -o, --output=output          output file path
  -t, --schemaType=schemaType  schema type file path### Finding avro of a given string for default type ( SHA1 )
```

------

### Finding Schema for an Avro file
> We can use -f or --file flag to pass input file

``` bash
$ cdt avro get_schema -f 'test/resources/avro/person.avro'
✔  success   Avro Schema
{
  "name": "Person",
  "type": "record",
  "fields": [
    {
      "name": "ID",
      "type": "long"
    },
    {
      "name": "First",
      "type": "string"
    },
    {
      "name": "Last",
      "type": "string"
    },
    {
      "name": "Phone",
      "type": "string"
    },
    {
      "name": "Age",
      "type": "int"
    }
  ]
}
```

> We can also use -o or --output flag to pass output file ( optional ), if you want output in some file.

``` bash
$ cdt avro get_schema -f 'test/resources/avro/person.avro' -o 'schema.avsc'
ℹ  info      Could not find file: schema.avsc, creating new one
✔  success   output written to file: schema.avsc
```
------

### Extracting data from an Avro file
> Supported Output types - CSV and JSON
> use to_json and to_csv command to extract data in JSON and CSV format respectively.

``` bash
$ cdt avro to_json -f 'test/resources/avro/person.avro' -o 'test/resources/avro/output/person.json' 
✔  Converting Avro To Json
⚠  warning   File already exists: test/resources/avro/output/person.json, overriding content
✔  success   Json written to file: test/resources/avro/output/person.json
```
> If file already exists, it will be overridden in the process.

------

### Generating Avro file
> for generating Avro file, you must provide Schema ( -t or --type flag ) along with Input and Output file paths.
> schema file(.avsc) can be created manually or generated using **get_schema** command

``` bash
$ cdt avro to_avro -f 'test/resources/avro/twitter.json' -o 'test/resources/avro/output/twitter.avro' -t 'test/resources/avro/twitter.avsc' 
✔  Generating Avro
ℹ  info      reading file: test/resources/avro/twitter.json
✔  success   Avro written to file: test/resources/avro/output/twitter.avro
```
