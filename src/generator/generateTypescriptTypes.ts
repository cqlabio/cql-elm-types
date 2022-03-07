import uniq from "lodash/uniq";
import orderBy from "lodash/orderBy";
import compact from "lodash/compact";
import ComplexType from "../processor/nodes/complexType";
import SimpleType from "../processor/nodes/simpleType";
import PropertyType from "../processor/nodes/propertyType";
import Processor from "../processor/processor";

function createAbstractName (className: string): string {
  return `Abstract${className}`
}

// Creates a comment with the description
function generateAnnotation(annotation: string): string {
  if (!annotation) {
    return "";
  }
  const annotationInit = annotation.replaceAll("\n\n", "\n");
  return `\n/*\n${annotationInit}\n*/\n`;
}


function generateProperties(properties: PropertyType[], sourceComplexType?: ComplexType):string {
  let propertyText = "";

  let typeNameAdded = false

  // Auto Add a type property for discriminator
  // This does not apply to the root Element node for some reason???
  if (sourceComplexType) {
    if (!sourceComplexType.isAbstract()) {
      const parentsWithoutElement = sourceComplexType.inheritanceHiearchy().filter(n =>  {
        return !n.isAbstract() || (n.isAbstract() && n.getName() !== 'Element')
      })
      
      if (parentsWithoutElement.length) {
        typeNameAdded = true
        propertyText += `  type: "${sourceComplexType.getName()}" ;\n`
      }
    }
  }

  properties.forEach((property) => {
    // There  is one case where types overlap, the ELM JSON seems to take the string version
    if (typeNameAdded && property.getName() === 'type') {
      console.log(`INFO: ${sourceComplexType?.getName()} has "type" property conflict`)
      return
    }
    propertyText += `  ${property.getName()}`;

    if (property.isRequired()) {
      propertyText += ": ";
    } else {
      propertyText += "?: ";
    }

    if (property.isComplex()) {
      const nextProperties = generateProperties(property.getChildPropeties());
      propertyText += `{\n ${nextProperties}}`;
    } else {
      const typeProperty = property.getType();
      propertyText += `${typeProperty}`;
    }
    if (property.isArray()) {
      propertyText += "[]";
    }
    propertyText += ";\n";
  });

  return propertyText;
}

export function generateInterface(complexType: ComplexType): string {
  // processed.forEach((complexType) => {
  let interfaceString = generateAnnotation(complexType.getAnnotation());

  // Give abstract classes an interface name such as AbstractExpression
  // so that Expression can be used to define the type for polymorphism discriminators 
  const interfaceName = complexType.isAbstract() 
    ? createAbstractName(complexType.getName())
    : complexType.getName()

  interfaceString += `interface ${interfaceName}`;

  // Can only inherit from abstract classes or else type descriminators will collide
  if (complexType.inheritsFrom()) {
    const abstractParent = complexType.getFirstAbstractParent()

    if (!abstractParent) {
      throw new Error(`There should be at least one abstract parent for ${complexType.getName()}`)
    }
    // const parentName = complexType.inheritsFrom()
    // const parent = parentName ? complexType.classLookup[parentName]: null
    
    interfaceString += ` extends ${createAbstractName(abstractParent.getName())}`;

    // if (parent instanceof ComplexType && parent.isAbstract()) {
      
    // } else {
    //   interfaceString += ` extends ${complexType.inheritsFrom()}`;
    // }

  }

  interfaceString += " {\n";

  const propertyText  = generateProperties(complexType.getProperties(), complexType);
  interfaceString += propertyText;

  interfaceString += "}\n";

  // Order backwards because it's reverse at top of file
  // allClasses.forEach((importClass) => {
  //   file = `import ${importClass} from './${importClass}'\n` + file;
  // });

  return interfaceString ;
}

export function generateEnumFromSimpleType(simpleType: SimpleType): string{
  let file = generateAnnotation(simpleType.getAnnotation());

  const options = simpleType
    .getEnumOptions()
    .map((e) => {
      return `"${e}"`;
    })
    .join(" | ");

  console.log(`INFO: Adding Simple Type: ${options}`);

  file += `type ${simpleType.getName()} = ${options}\n`;
  // file += `export default ${simpleType.getName()}`;

  return file
}

export function generateEnumForAbstractClasses(processor: Processor): string{

  const lookup: Record<string, ComplexType[]> = {}

  processor.getComplexTypes().forEach(complexType => {
    const abstractParent = complexType.getFirstAbstractParent()
    if (abstractParent) {
      const abstractParentName = abstractParent.getName()
      if (!lookup[abstractParentName]) {
        lookup[abstractParentName] = []
      }
      lookup[abstractParentName].push(complexType)
    }
  })

  let section = ''

  Object.entries(lookup).forEach(([parentName, types]) => {
    section += `\ntype ${parentName} = ${types.map(cType => cType.getName()).join(' |')}`
  })

  return section
}

export function generateTypescriptTypes (processor: Processor): string {

  let mainFile = `
export = ELM;
export as namespace ELM;

declare namespace ELM {`

  processor.getComplexTypes().forEach(complexType => {
    mainFile += generateInterface(complexType)
  })

  processor.getSimpleTypes().forEach(simpleType => {
    mainFile += generateEnumFromSimpleType(simpleType)
  })

  mainFile += generateEnumForAbstractClasses(processor)

  mainFile += '\n}'

  return mainFile.trim();
}