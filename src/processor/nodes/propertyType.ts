import Processor from "../processor";
import ComplexType from "./complexType";

export default class PropertyType {
  node: Record<string, any>;
  processor: Processor;

  constructor(node: Record<string, any>, processor: Processor) {
    this.node = node;
    this.processor = processor;
  }

  getName() {
    return this.node.name;
  }

  getType = (): string => {
    const { type } = this.node;

    if (type === "xs:string") {
      return "string";
    } else if (type === "xs:boolean") {
      return "boolean";
    } else if (type === "xs:decimal") {
      return "number";
    } else if (type === "xs:anyURI") {
      return "string";
    } else if (type === "xs:QName") {
      return "string";
    } else if (["xs:anySimpleType", "xs:anyType"].includes(type)) {
      return "any";
    }

    // Check for a linked property
    const found =
      this.processor.getComplexTypeByName(type) ||
      this.processor.getSimpleTypeByName(type);

    if (!found) {
      console.log(`WARNING: Could not find type: ${type}`);
      return "any";
    }

    const foundNames = [found.getName()];

    this.processor.getComplexTypes().filter((cType) => {
      if (
        cType
          .inheritanceHiearchy()
          .filter((p) => !p.isAbstract())
          .includes(found as ComplexType)
      ) {
        foundNames.push(cType.getName());
      }
    });

    if (foundNames.length === 1) {
      return foundNames[0];
    } else {
      return `(${foundNames.join(" | ")})`;
    }

    // return { type: found.getName(), isLinked: true };
  };

  isRequired() {
    if (this.node.minOccurs) {
      const val = parseInt(this.node.minOccurs);
      if (val > 0) {
        return true;
      }
    }

    if (this.node.use === "required") {
      return true;
    }

    return false;
  }

  isArray() {
    if (this.node.maxOccurs) {
      if (this.node.maxOccurs === "unbounded") {
        return true;
      } else if (parseInt(this.node.maxOccurs) > 1) {
        return true;
      }
    }
    return false;
  }

  isComplex() {
    return !!this.node["xs:complexType"];
  }

  getChildPropeties() {
    if (!this.isComplex()) {
      throw new Error("Can Only call for complex nodes");
    }
    return new ComplexType(
      this.node["xs:complexType"],
      this.processor
    ).getProperties();
  }
}
