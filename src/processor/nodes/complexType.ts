import PropertyType from "./propertyType";
import Processor from "../processor";
import BaseType from "./baseType";
import { assertOneOf, ensureList } from "../utils";

export default class ComplexType extends BaseType {
  node: Record<string, any>;

  constructor(node: Record<string, any>, processor: Processor) {
    super(node, processor);

    const expectedKeys = [
      "name",
      "abstract",
      "xs:annotation",
      "xs:sequence",
      "xs:attribute",
      "xs:complexContent",
    ];

    assertOneOf(expectedKeys, Object.keys(this.node));
  }

  getName = (): string => {
    return this.node.name;
  };

  getAnnotation = (): string => {
    return (
      (this.node["xs:annotation"] &&
        this.node["xs:annotation"]["xs:documentation"]) ||
      ""
    );
  };

  isAbstract = (): boolean => {
    return this.node.abstract === "true";
  };

  inheritsFrom = (): ComplexType | null => {
    const extension = this._getExtension();

    if (extension) {
      const parent = this.processor.getComplexTypeByName(extension.base)
      if (extension.base && !parent) {
        console.log(`WARNING: "${this.getName()}" could not find parent "${extension.base}"`);
        return null;
      }
      return parent;
    }
    return null;
  };

  inheritanceHiearchy = () : ComplexType[] => {
    const hiearchy = []

    function recurse(node: ComplexType) {
      const parent = node.inheritsFrom()
      if (parent) {
        hiearchy.unshift(parent)
        recurse(parent)
      }
    }

    recurse(this)

    return hiearchy
  }

  getProperties = (): PropertyType[] => {
    const attrProperties = this._getAttributeProperties();
    const extensionProperties = this._getExtensionProperties();

    let properties =  [...attrProperties, ...extensionProperties]
  
    // Instead of inheriting from non-abstract parents, we simply duplicate the properties of those
    // parents. This only happens a few times and is a much cleaner way to handle it than 
    // the alternative approach.
    const nonAbstractParents = this.inheritanceHiearchy().filter(parent => !parent.isAbstract())
    nonAbstractParents.forEach(parent =>  {
      console.log(`INFO: Merging properties into ${this.getName()} from parent ${parent.getName()}`)
      properties.push(...parent.getProperties())
    })





    // if (!this.isAbstract()) {
    //   properties.push(new PropertyDiscriminator(this.getName()))
    // }

    


    // const parentName = this.inheritsFrom()
    // const parent = parentName ? this.classLookup[parentName]: null

    // if (parent instanceof ComplexType && parent.isAbstract()) {

    //   if (!this.isAbstract() && parentName !== 'Element') {


    //     properties = properties.filter(prop => {
    //       if ( prop.getName() === 'type') {
    //         console.log(`Warning: "type" was overwritten on interface ${this.getName()}`)
    //       }
    //       return prop.getName() !== 'type'
    //     })

        
    //     properties.unshift(
    //       new PropertyType({
    //         name: 'type',
    //         type: 'self',
    //         self: `"${this.getName()}"`,
    //         use: "required",
    //       }, this.processor)
    //     )
    //   }
    // }

    return properties
  };

  getFirstAbstractParent(): ComplexType | null {
    const parents = this.inheritanceHiearchy()
    // Loop backwards through hiearchy chain and get first abstract type
    for (let i = parents.length -1; i>=0; i--) {
      if (parents[i].isAbstract()) {
        return parents[i]
      }
    }
    return null
  }

  _getComplexContent() {
    const complexContent = this.node["xs:complexContent"];
    if (!complexContent) {
      return null;
    }

    const expectedKeys = ["xs:extension"];
    assertOneOf(expectedKeys, Object.keys(complexContent));
    return complexContent;
  }

  _getExtension() {
    const complexContent = this._getComplexContent();

    if (!complexContent) {
      return null;
    }

    const extension = complexContent["xs:extension"];
    if (!extension) {
      return null;
    }

    const expectedKeys = ["base", "xs:attribute", "xs:sequence"];
    assertOneOf(expectedKeys, Object.keys(extension));
    return extension;
  }

  _getAttributeProperties = (): PropertyType[] => {
    const extension = this._getExtension();

    // First check on current node
    let atrribute = this.node["xs:attribute"];

    if (atrribute && extension) {
      throw new Error("Not expecting an extension s an attribute");
    }

    // Then check on extension
    if (!atrribute && extension) {
      atrribute = extension["xs:attribute"];
    }

    if (!atrribute) {
      return [];
    }

    return ensureList(atrribute).map(
      (p) => new PropertyType(p, this.processor)
    );
  };

  _getExtensionSequence() {
    const expectedKeys = ["xs:element"];
    const extension = this._getExtension();

    if (this.node["xs:sequence"]) {
      if (extension) {
        throw new Error("There should not be an extenstion here");
      }

      assertOneOf(expectedKeys, Object.keys(this.node["xs:sequence"]));
      return this.node["xs:sequence"];
    }

    if (!extension) {
      return null;
    }

    const sequence = extension["xs:sequence"];

    if (!sequence) {
      return null;
    }

    assertOneOf(expectedKeys, Object.keys(sequence));
    return sequence;
  }

  _getExtensionProperties() {
    const sequence = this._getExtensionSequence();

    if (!sequence || !sequence["xs:element"]) {
      return [];
    }

    const elements = ensureList(sequence["xs:element"]);

    const expectedKeys = [
      "name",
      "type",
      "minOccurs",
      "maxOccurs",
      "xs:annotation",
      "xs:complexType",
      "$t",
    ];

    elements.forEach((el) => {
      assertOneOf(expectedKeys, Object.keys(el));
    });

    return elements.map((p) => new PropertyType(p, this.processor));
  }
}
