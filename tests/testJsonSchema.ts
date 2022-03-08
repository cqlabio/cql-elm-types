import Ajv from "ajv";
import path from "path";
import fs from "fs";
import { library as oneLibrary } from "../test-d/one";
import { library as cqmLibrary } from "../test-d/CMS146v2_CQM";

const readSchema = (): Record<string, any> => {
  return JSON.parse(
    fs.readFileSync(path.join("./schema.json"), {
      encoding: "utf8",
    })
  );
};

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const jsonSchema = readSchema();

ajv.addSchema(jsonSchema);
const validate = ajv.getSchema("#/definitions/ELM.Library");

const valid = validate(oneLibrary);
console.log(valid);

const valid2 = validate(cqmLibrary);
console.log(valid2);
