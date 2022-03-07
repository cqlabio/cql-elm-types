import Processor from "../processor";

export default abstract class BaseType {
  node: Record<string, any>;
  processor: Processor;

  constructor(node: Record<string, any>, processor: Processor) {
    this.node = node;
    this.processor = processor;
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
}
