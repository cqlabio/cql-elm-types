# CQL ELM Typescript and JSON Schema Types

This library transforms the XSD schemas that define the ELM data model into Typescript Type and JSON schemas to be used in other tools.

## Dev Usage

The XSD files are located in the `xsd` folder. First run: 

```
yarn run prepare
```

to transform the XSD files into json files for easier use. Then 
```
yarn run generate
```
will run the scripts that use create the `index.d.ts` file containing the typescript types.





