import ComplexType from "./nodes/complexType";
import BaseType from "./nodes/baseType";
import SimpleType from "./nodes/simpleType";

// import { generateInterface, buildEnumFile } from "../generator/generateTypescriptTypes";

export type ClassLookup = Record<string, ComplexType | SimpleType>;

export default class Processor {

  complexTypes: Record<string, ComplexType>;
  simpleTypes: Record<string, SimpleType>;

  constructor() {
    this.complexTypes = {}
    this.simpleTypes = {}
  }

  loadJsonXsd (jsonXSD: any): void {
    const schema = jsonXSD["xs:schema"];
    schema["xs:complexType"].forEach((n: any) => {
      const complexType = new ComplexType(n, this)
      this.complexTypes[complexType.getName()] = complexType
    });
    schema["xs:simpleType"]?.forEach((n: any) => {
      const simpleType = new SimpleType(n, this)
      this.simpleTypes[simpleType.getName()] = simpleType
    });
  }

  getComplexTypeByName (name: string): ComplexType | null {
    return  this.complexTypes[name] || null
  }

  getSimpleTypeByName (name: string): SimpleType | null {
    return  this.simpleTypes[name] || null
  }

  getComplexTypes (): ComplexType[] {
    return Object.values(this.complexTypes)
  }

  getSimpleTypes (): SimpleType[] {
    return Object.values(this.simpleTypes)
  }


  // classLookup: ClassLookup;
  // complexTypes: ComplexType[];
  // simpleTypes: SimpleType[];

  // constructor(classLookup: ClassLookup) {
  //   this.classLookup = classLookup;
  //   this.complexTypes = [];
  //   this.simpleTypes = [];
  // }

  // addJsonXSD(jsonXSD: Record<string, any>) {
  //   const schema = jsonXSD["xs:schema"];
  //   schema["xs:complexType"].forEach((n: any) => {
  //     this.complexTypes.push(new ComplexType(n, this.classLookup));
  //   });
  //   schema["xs:simpleType"]?.forEach((n: any) => {
  //     this.simpleTypes.push(new SimpleType(n, this.classLookup));
  //   });
  // }

  // generateFiles = (): string[] => {

  //   const abstractTypes = {}

  //   this.complexTypes.forEach(complexType => {
      
  //     const parentName = complexType.inheritsFrom()
  //     const parent = parentName ? this.classLookup[parentName]: null
  //     if (parent instanceof ComplexType && parent.isAbstract()) {
  //       if (parentName !== 'Element') {
  //         if (!abstractTypes[parentName]) {
  //           abstractTypes[parentName] = []
  //         }
  //         abstractTypes[parentName].push(complexType.getName())
  //       }
  //     }
  //   })

  //   const polymorphismTypes = Object.keys(abstractTypes).map(abstractName => {
  //     return `\ntype ${abstractName} = ${abstractTypes[abstractName].join('|')}  \n`
  //   })


  //   return [
  //     ...this.complexTypes.map(buildInterfaceFile),
  //     ...this.simpleTypes.map(buildEnumFile),
  //     ...polymorphismTypes
  //   ];
  // };
}
