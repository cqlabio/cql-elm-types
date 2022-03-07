## CQL ELM Typescript and JSON Schema Types

This library transforms the XSD schemas that define the ELM data model into Typescript Types and JSON schemas.

### Dev Usage

First:
```
yarn install
```

The XSD files are located in the `xsd` folder. To transform the XML files into json files for easier use, run: 

```
yarn run prepare
```

Then to run the scripts that generate the `index.d.ts` file containing the typescript types:
```
yarn run generate
```





