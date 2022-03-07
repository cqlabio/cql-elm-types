import { Library } from '../index';

const library: Library =  {
  "annotation": [
      {
          "translatorOptions": "EnableLocators,EnableResultTypes",
          "type": "CqlToElmInfo"
      }
  ],
  "identifier": {
      "id": "FHIRQuery",
      "version": "Draft"
  },
  "schemaIdentifier": {
      "id": "urn:hl7-org:elm",
      "version": "r1"
  },
  "usings": {
      "def": [
          {
              "localIdentifier": "System",
              "uri": "urn:hl7-org:elm-types:r1"
          },
          {
              "locator": "3:1-3:26",
              "localIdentifier": "FHIR",
              "uri": "http://hl7.org/fhir",
              "version": "4.0.1"
          }
      ]
  },
  "includes": {
      "def": [
          {
              "locator": "5:1-5:54",
              "localIdentifier": "FHIRHelpers",
              "path": "FHIRHelpers",
              "version": "Draft"
          }
      ]
  },
  "valueSets": {
      "def": [
          {
              "locator": "7:1-7:97",
              "resultTypeName": "{urn:hl7-org:elm-types:r1}ValueSet",
              "name": "Syphilis",
              "id": "https://cqlab.io/lab/learn/value-sets/f60692d4-9f87-49b7-9197-6d2677416d33",
              "accessLevel": "Public"
          }
      ]
  },
  "contexts": {
      "def": [
          {
              "locator": "10:1-10:15",
              "name": "Patient"
          }
      ]
  },
  "statements": {
      "def": [
          {
              "locator": "10:1-10:15",
              "name": "Patient",
              "context": "Patient",
              "expression": {
                  "type": "SingletonFrom",
                  "operand": {
                      "locator": "10:1-10:15",
                      "dataType": "{http://hl7.org/fhir}Patient",
                      "templateId": "http://hl7.org/fhir/StructureDefinition/Patient",
                      "type": "Retrieve"
                  }
              }
          },
          {
              "locator": "12:1-12:53",
              "name": "Syphilis Conditions",
              "context": "Patient",
              "accessLevel": "Public",
              "resultTypeSpecifier": {
                  "type": "ListTypeSpecifier",
                  "elementType": {
                      "name": "{http://hl7.org/fhir}Condition",
                      "type": "NamedTypeSpecifier"
                  }
              },
              "expression": {
                  "locator": "12:31-12:53",
                  "dataType": "{http://hl7.org/fhir}Condition",
                  "templateId": "http://hl7.org/fhir/StructureDefinition/Condition",
                  "codeProperty": "code",
                  "codeComparator": "in",
                  "type": "Retrieve",
                  "resultTypeSpecifier": {
                      "type": "ListTypeSpecifier",
                      "elementType": {
                          "name": "{http://hl7.org/fhir}Condition",
                          "type": "NamedTypeSpecifier"
                      }
                  },
                  "codes": {
                      "locator": "12:43-12:52",
                      "resultTypeName": "{urn:hl7-org:elm-types:r1}ValueSet",
                      "name": "Syphilis",
                      "type": "ValueSetRef"
                  }
              }
          },
          {
              "locator": "14:1-14:51",
              "resultTypeName": "{urn:hl7-org:elm-types:r1}Boolean",
              "name": "Had Syphilis",
              "context": "Patient",
              "accessLevel": "Public",
              "expression": {
                  "locator": "14:24-14:51",
                  "resultTypeName": "{urn:hl7-org:elm-types:r1}Boolean",
                  "type": "Exists",
                  "operand": {
                      "locator": "14:31-14:51",
                      "name": "Syphilis Conditions",
                      "type": "ExpressionRef",
                      "resultTypeSpecifier": {
                          "type": "ListTypeSpecifier",
                          "elementType": {
                              "name": "{http://hl7.org/fhir}Condition",
                              "type": "NamedTypeSpecifier"
                          }
                      }
                  }
              }
          },
          {
              "locator": "16:1-16:64",
              "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
              "name": "Total Syphilis Conditions",
              "context": "Patient",
              "accessLevel": "Public",
              "expression": {
                  "locator": "16:37-16:64",
                  "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                  "type": "Count",
                  "source": {
                      "locator": "16:43-16:63",
                      "name": "Syphilis Conditions",
                      "type": "ExpressionRef",
                      "resultTypeSpecifier": {
                          "type": "ListTypeSpecifier",
                          "elementType": {
                              "name": "{http://hl7.org/fhir}Condition",
                              "type": "NamedTypeSpecifier"
                          }
                      }
                  }
              }
          },
          {
              "locator": "18:1-18:76",
              "name": "Period 2020",
              "context": "Patient",
              "accessLevel": "Public",
              "resultTypeSpecifier": {
                  "type": "IntervalTypeSpecifier",
                  "pointType": {
                      "name": "{urn:hl7-org:elm-types:r1}DateTime",
                      "type": "NamedTypeSpecifier"
                  }
              },
              "expression": {
                  "locator": "18:23-18:76",
                  "lowClosed": true,
                  "highClosed": true,
                  "type": "Interval",
                  "resultTypeSpecifier": {
                      "type": "IntervalTypeSpecifier",
                      "pointType": {
                          "name": "{urn:hl7-org:elm-types:r1}DateTime",
                          "type": "NamedTypeSpecifier"
                      }
                  },
                  "low": {
                      "locator": "18:32-18:51",
                      "resultTypeName": "{urn:hl7-org:elm-types:r1}DateTime",
                      "type": "DateTime",
                      "year": {
                          "locator": "18:41-18:44",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "2020",
                          "type": "Literal"
                      },
                      "month": {
                          "locator": "18:47",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "1",
                          "type": "Literal"
                      },
                      "day": {
                          "locator": "18:50",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "1",
                          "type": "Literal"
                      }
                  },
                  "high": {
                      "locator": "18:54-18:75",
                      "resultTypeName": "{urn:hl7-org:elm-types:r1}DateTime",
                      "type": "DateTime",
                      "year": {
                          "locator": "18:63-18:66",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "2020",
                          "type": "Literal"
                      },
                      "month": {
                          "locator": "18:69-18:70",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "12",
                          "type": "Literal"
                      },
                      "day": {
                          "locator": "18:73-18:74",
                          "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType": "{urn:hl7-org:elm-types:r1}Integer",
                          "value": "30",
                          "type": "Literal"
                      }
                  }
              }
          },
          {
              "locator": "20:1-21:39",
              "name": "Syphilis Conditions 2020",
              "context": "Patient",
              "accessLevel": "Public",
              "resultTypeSpecifier": {
                  "type": "ListTypeSpecifier",
                  "elementType": {
                      "name": "{http://hl7.org/fhir}Condition",
                      "type": "NamedTypeSpecifier"
                  }
              },
              "expression": {
                  "locator": "20:36-21:39",
                  "type": "Query",
                  "resultTypeSpecifier": {
                      "type": "ListTypeSpecifier",
                      "elementType": {
                          "name": "{http://hl7.org/fhir}Condition",
                          "type": "NamedTypeSpecifier"
                      }
                  },
                  "source": [
                      {
                          "locator": "20:36-20:60",
                          "alias": "C",
                          "resultTypeSpecifier": {
                              "type": "ListTypeSpecifier",
                              "elementType": {
                                  "name": "{http://hl7.org/fhir}Condition",
                                  "type": "NamedTypeSpecifier"
                              }
                          },
                          "expression": {
                              "locator": "20:36-20:58",
                              "dataType": "{http://hl7.org/fhir}Condition",
                              "templateId": "http://hl7.org/fhir/StructureDefinition/Condition",
                              "codeProperty": "code",
                              "codeComparator": "in",
                              "type": "Retrieve",
                              "resultTypeSpecifier": {
                                  "type": "ListTypeSpecifier",
                                  "elementType": {
                                      "name": "{http://hl7.org/fhir}Condition",
                                      "type": "NamedTypeSpecifier"
                                  }
                              },
                              "codes": {
                                  "locator": "20:48-20:57",
                                  "resultTypeName": "{urn:hl7-org:elm-types:r1}ValueSet",
                                  "name": "Syphilis",
                                  "type": "ValueSetRef"
                              }
                          }
                      }
                  ],
                  "relationship": [],
                  "where": {
                      "locator": "21:3-21:39",
                      "resultTypeName": "{urn:hl7-org:elm-types:r1}Boolean",
                      "type": "In",
                      "operand": [
                          {
                              "name": "ToDateTime",
                              "libraryName": "FHIRHelpers",
                              "type": "FunctionRef",
                              "operand": [
                                  {
                                      "locator": "21:9-21:22",
                                      "resultTypeName": "{http://hl7.org/fhir}dateTime",
                                      "path": "recordedDate",
                                      "scope": "C",
                                      "type": "Property"
                                  }
                              ]
                          },
                          {
                              "locator": "21:27-21:39",
                              "name": "Period 2020",
                              "type": "ExpressionRef",
                              "resultTypeSpecifier": {
                                  "type": "IntervalTypeSpecifier",
                                  "pointType": {
                                      "name": "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type": "NamedTypeSpecifier"
                                  }
                              }
                          }
                      ]
                  }
              }
          },
          {
              "locator": "23:1-23:74",
              "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
              "name": "Total Syphilis Conditions 2020",
              "context": "Patient",
              "accessLevel": "Public",
              "expression": {
                  "locator": "23:42-23:74",
                  "resultTypeName": "{urn:hl7-org:elm-types:r1}Integer",
                  "type": "Count",
                  "source": {
                      "locator": "23:48-23:73",
                      "name": "Syphilis Conditions 2020",
                      "type": "ExpressionRef",
                      "resultTypeSpecifier": {
                          "type": "ListTypeSpecifier",
                          "elementType": {
                              "name": "{http://hl7.org/fhir}Condition",
                              "type": "NamedTypeSpecifier"
                          }
                      }
                  }
              }
          }
      ]
  }
}