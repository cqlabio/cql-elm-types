import fs from "fs";
import path from "path";
import parser from "xml2json";

const IN_DIRECTORY = path.join(__dirname, "xsd");
const OUT_DIRECTORY = path.join(__dirname, "xsdJson");

function clearDirectory() {
  const files = fs.readdirSync(OUT_DIRECTORY);

  for (const file of files) {
    fs.unlinkSync(path.join(OUT_DIRECTORY, file));
  }
}

function convertAndSave() {
  const files = fs.readdirSync(IN_DIRECTORY);

  for (const file of files) {
    const xml = fs.readFileSync(path.join(IN_DIRECTORY, file), {
      encoding: "utf8",
    });
    const outJson = JSON.stringify(JSON.parse(parser.toJson(xml)), null, 2);
    const newFileName = file.replace(".xsd", ".json");
    console.log(`Writing File: ${newFileName}`);
    fs.writeFileSync(path.join(OUT_DIRECTORY, newFileName), outJson, "utf8");
  }
}

clearDirectory();
convertAndSave();
