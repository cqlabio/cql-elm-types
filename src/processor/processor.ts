import ComplexType from "./nodes/complexType";
import BaseType from "./nodes/baseType";
import SimpleType from "./nodes/simpleType";

export type ClassLookup = Record<string, ComplexType | SimpleType>;

export default class Processor {
  complexTypes: Record<string, ComplexType>;
  simpleTypes: Record<string, SimpleType>;

  constructor() {
    this.complexTypes = {};
    this.simpleTypes = {};
  }

  loadJsonXsd(jsonXSD: any): void {
    const schema = jsonXSD["xs:schema"];
    schema["xs:complexType"].forEach((n: any) => {
      const complexType = new ComplexType(n, this);
      this.complexTypes[complexType.getName()] = complexType;
    });
    schema["xs:simpleType"]?.forEach((n: any) => {
      const simpleType = new SimpleType(n, this);
      this.simpleTypes[simpleType.getName()] = simpleType;
    });
  }

  getComplexTypeByName(name: string): ComplexType | null {
    return this.complexTypes[name] || null;
  }

  getSimpleTypeByName(name: string): SimpleType | null {
    return this.simpleTypes[name] || null;
  }

  getComplexTypes(): ComplexType[] {
    return Object.values(this.complexTypes);
  }

  getSimpleTypes(): SimpleType[] {
    return Object.values(this.simpleTypes);
  }
}
