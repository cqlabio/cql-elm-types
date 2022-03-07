import PropertyType from "./propertyType";
import Processor from "../processor";
import BaseType from "./baseType";
import { assertOneOf, ensureList } from "../utils";

export default class SimpleType extends BaseType {
  node: Record<string, any>;
  typeManager: Processor;

  constructor(node: Record<string, any>, processor: Processor) {
    super(node, processor);

    const expectedKeys = ["name", "xs:annotation", "xs:restriction"];

    assertOneOf(expectedKeys, Object.keys(this.node));
  }

  getEnumOptions = (): PropertyType[] => {
    const restriction = this._getRestriction();
    return restriction["xs:enumeration"].map((e) => e.value);
  };

  _getRestriction() {
    const restriction = this.node["xs:restriction"];

    const expectedKeys = ["base", "xs:enumeration"];
    assertOneOf(expectedKeys, Object.keys(restriction));
    return restriction;
  }
}
