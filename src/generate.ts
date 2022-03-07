import path from "path";
import fs from "fs";
import Processor from "./processor/processor";
import { generateTypescriptTypes } from './generator/generateTypescriptTypes'

const IN_DIRECTORY = path.join(__dirname, "../", "xsdJson");
const OUT_FILE = path.join(__dirname, "../", "index.d.ts");

const XSD_DEFINITIONS = [
  "expression.json",
  "clinicalexpression.json",
  "library.json",
];

const readJsonXSDFile = (fileName: string): Record<string, any> => {
  return JSON.parse(
    fs.readFileSync(path.join(IN_DIRECTORY, fileName), {
      encoding: "utf8",
    })
  );
};

function runner(): void {

  const processor = new Processor();

  XSD_DEFINITIONS.forEach((fileName) => {
    console.log(`INFO: Loading schema ${fileName}`);
    const jsonXSD = readJsonXSDFile(fileName);
    processor.loadJsonXsd(jsonXSD);
  });

  const typeScriptFile = generateTypescriptTypes(processor)

  fs.writeFileSync(OUT_FILE, typeScriptFile);
}

runner();
