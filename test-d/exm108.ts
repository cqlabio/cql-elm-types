import { Library } from '../index';

const library: Library = {
     "annotation" : [ {
        "translatorOptions" : "EnableLocators,EnableResultTypes,EnableDetailedErrors",
        "type" : "CqlToElmInfo"
     }, {
        "libraryId" : "MATGlobalCommonFunctions",
        "libraryVersion" : "5.0.000",
        "startLine" : 277,
        "startChar" : 19,
        "endLine" : 277,
        "endChar" : 53,
        "message" : "Could not resolve membership operator for terminology target of the retrieve.",
        "errorType" : "semantic",
        "errorSeverity" : "warning",
        "type" : "CqlToElmError"
     } ],
     "identifier" : {
        "id" : "EXM108",
        "version" : "8.3.000"
     },
     "schemaIdentifier" : {
        "id" : "urn:hl7-org:elm",
        "version" : "r1"
     },
     "usings" : {
        "def" : [ {
           "localIdentifier" : "System",
           "uri" : "urn:hl7-org:elm-types:r1"
        }, {
           "locator" : "6:1-6:26",
           "localIdentifier" : "FHIR",
           "uri" : "http://hl7.org/fhir",
           "version" : "4.0.1"
        } ]
     },
     "includes" : {
        "def" : [ {
           "locator" : "8:1-8:54",
           "localIdentifier" : "FHIRHelpers",
           "path" : "FHIRHelpers",
           "version" : "4.0.1"
        }, {
           "locator" : "9:1-9:64",
           "localIdentifier" : "Global",
           "path" : "MATGlobalCommonFunctions",
           "version" : "5.0.000"
        }, {
           "locator" : "10:1-10:59",
           "localIdentifier" : "SDE",
           "path" : "SupplementalDataElements",
           "version" : "2.0.0"
        }, {
           "locator" : "11:1-11:46",
           "localIdentifier" : "VTEICU",
           "path" : "VTEICU",
           "version" : "5.0.000"
        }, {
           "locator" : "12:1-12:47",
           "localIdentifier" : "TJC",
           "path" : "TJCOverall",
           "version" : "5.0.000"
        } ]
     },
     "codeSystems" : {
        "def" : [ {
           "locator" : "14:1-14:60",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
           "name" : "SNOMEDCT",
           "id" : "http://snomed.info/sct/731000124108",
           "accessLevel" : "Public"
        }, {
           "locator" : "15:1-15:38",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
           "name" : "LOINC",
           "id" : "http://loinc.org",
           "accessLevel" : "Public"
        }, {
           "locator" : "17:1-17:82",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
           "name" : "RequestIntent",
           "id" : "http://terminology.hl7.org/CodeSystem/request-intent",
           "accessLevel" : "Public"
        }, {
           "locator" : "19:1-19:78",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
           "name" : "ActPriority",
           "id" : "http://terminology.hl7.org/ValueSet/v3-ActPriority",
           "accessLevel" : "Public"
        } ]
     },
     "valueSets" : {
        "def" : [ {
           "locator" : "21:1-21:99",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Device Application",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1110.48",
           "accessLevel" : "Public"
        }, {
           "locator" : "22:1-22:112",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Atrial Fibrillation/Flutter",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.202",
           "accessLevel" : "Public"
        }, {
           "locator" : "23:1-23:94",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Comfort Measures",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/1.3.6.1.4.1.33895.1.3.0.45",
           "accessLevel" : "Public"
        }, {
           "locator" : "24:1-24:110",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Direct Thrombin Inhibitor",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.205",
           "accessLevel" : "Public"
        }, {
           "locator" : "25:1-25:111",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Emergency Department Visit",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.292",
           "accessLevel" : "Public"
        }, {
           "locator" : "26:1-26:113",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "General or Neuraxial Anesthesia",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.666.5.1743",
           "accessLevel" : "Public"
        }, {
           "locator" : "27:1-27:100",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "General Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.255",
           "accessLevel" : "Public"
        }, {
           "locator" : "28:1-28:113",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Glycoprotein IIb/IIIa Inhibitors",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1045.41",
           "accessLevel" : "Public"
        }, {
           "locator" : "29:1-29:122",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Graduated compression stockings (GCS)",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.256",
           "accessLevel" : "Public"
        }, {
           "locator" : "30:1-30:106",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Gynecological Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.257",
           "accessLevel" : "Public"
        }, {
           "locator" : "31:1-31:103",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Hemorrhagic Stroke",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.212",
           "accessLevel" : "Public"
        }, {
           "locator" : "32:1-32:105",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Hip Fracture Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.258",
           "accessLevel" : "Public"
        }, {
           "locator" : "33:1-33:108",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Hip Replacement Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.259",
           "accessLevel" : "Public"
        }, {
           "locator" : "34:1-34:135",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Injectable Factor Xa Inhibitor for VTE Prophylaxis",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.211",
           "accessLevel" : "Public"
        }, {
           "locator" : "35:1-35:88",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "INR",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.213",
           "accessLevel" : "Public"
        }, {
           "locator" : "36:1-36:133",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Intermittent pneumatic compression devices (IPC)",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.214",
           "accessLevel" : "Public"
        }, {
           "locator" : "37:1-37:110",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Intracranial Neurosurgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.260",
           "accessLevel" : "Public"
        }, {
           "locator" : "38:1-38:102",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Intravenous route",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.222",
           "accessLevel" : "Public"
        }, {
           "locator" : "39:1-39:100",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Ischemic Stroke",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.247",
           "accessLevel" : "Public"
        }, {
           "locator" : "40:1-40:109",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Knee Replacement Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.261",
           "accessLevel" : "Public"
        }, {
           "locator" : "41:1-41:132",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Low Dose Unfractionated Heparin for VTE Prophylaxis",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1045.39",
           "accessLevel" : "Public"
        }, {
           "locator" : "42:1-42:133",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Low Molecular Weight Heparin for VTE Prophylaxis",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.219",
           "accessLevel" : "Public"
        }, {
           "locator" : "43:1-43:93",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Low Risk",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.400",
           "accessLevel" : "Public"
        }, {
           "locator" : "44:1-44:99",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Medical Reason",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.473",
           "accessLevel" : "Public"
        }, {
           "locator" : "45:1-45:115",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Mental Health Diagnoses",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.105.12.1004",
           "accessLevel" : "Public"
        }, {
           "locator" : "46:1-46:95",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Obstetrics",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.263",
           "accessLevel" : "Public"
        }, {
           "locator" : "47:1-47:99",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Obstetrics VTE",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.264",
           "accessLevel" : "Public"
        }, {
           "locator" : "48:1-48:146",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Oral Factor Xa Inhibitor for VTE Prophylaxis or VTE Treatment",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.134",
           "accessLevel" : "Public"
        }, {
           "locator" : "49:1-49:99",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Patient Refusal",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.93",
           "accessLevel" : "Public"
        }, {
           "locator" : "50:1-50:103",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Subcutaneous route",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.223",
           "accessLevel" : "Public"
        }, {
           "locator" : "51:1-51:107",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Unfractionated Heparin",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.218",
           "accessLevel" : "Public"
        }, {
           "locator" : "52:1-52:103",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Urological Surgery",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.272",
           "accessLevel" : "Public"
        }, {
           "locator" : "53:1-53:108",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Venous foot pumps (VFP)",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.230",
           "accessLevel" : "Public"
        }, {
           "locator" : "54:1-54:107",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Venous Thromboembolism",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.279",
           "accessLevel" : "Public"
        }, {
           "locator" : "55:1-55:93",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Warfarin",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.117.1.7.1.232",
           "accessLevel" : "Public"
        }, {
           "locator" : "56:1-56:100",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
           "name" : "Intensive Care Unit",
           "id" : "http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1110.23",
           "accessLevel" : "Public"
        } ]
     },
     "codes" : {
        "def" : [ {
           "locator" : "58:1-58:104",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
           "name" : "Risk for venous thromboembolism",
           "id" : "72136-5",
           "display" : "Risk for venous thromboembolism",
           "accessLevel" : "Public",
           "codeSystem" : {
              "locator" : "58:56-58:62",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}CodeSystem",
              "name" : "LOINC"
           }
        } ]
     },
     "contexts" : {
        "def" : [ {
           "locator" : "60:1-60:15",
           "name" : "Patient"
        } ]
     },
     "statements" : {
        "def" : [ {
           "locator" : "60:1-60:15",
           "name" : "Patient",
           "context" : "Patient",
           "expression" : {
              "type" : "SingletonFrom",
              "operand" : {
                 "locator" : "60:1-60:15",
                 "dataType" : "{http://hl7.org/fhir}Patient",
                 "templateId" : "http://hl7.org/fhir/StructureDefinition/Patient",
                 "type" : "Retrieve"
              }
           }
        }, {
           "locator" : "62:1-63:21",
           "name" : "SDE Ethnicity",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Coding",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "63:3-63:21",
              "name" : "SDE Ethnicity",
              "libraryName" : "SDE",
              "type" : "ExpressionRef",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Coding",
                    "type" : "NamedTypeSpecifier"
                 }
              }
           }
        }, {
           "locator" : "65:1-66:16",
           "name" : "SDE Payer",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "TupleTypeSpecifier",
                 "element" : [ {
                    "name" : "code",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}CodeableConcept",
                       "type" : "NamedTypeSpecifier"
                    }
                 }, {
                    "name" : "period",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Period",
                       "type" : "NamedTypeSpecifier"
                    }
                 } ]
              }
           },
           "expression" : {
              "locator" : "66:2-66:16",
              "name" : "SDE Payer",
              "libraryName" : "SDE",
              "type" : "ExpressionRef",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "code",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}CodeableConcept",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "period",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Period",
                          "type" : "NamedTypeSpecifier"
                       }
                    } ]
                 }
              }
           }
        }, {
           "locator" : "68:1-69:16",
           "name" : "SDE Race",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Coding",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "69:3-69:16",
              "name" : "SDE Race",
              "libraryName" : "SDE",
              "type" : "ExpressionRef",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Coding",
                    "type" : "NamedTypeSpecifier"
                 }
              }
           }
        }, {
           "locator" : "71:1-72:14",
           "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
           "name" : "SDE Sex",
           "context" : "Patient",
           "accessLevel" : "Public",
           "expression" : {
              "locator" : "72:2-72:14",
              "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
              "name" : "SDE Sex",
              "libraryName" : "SDE",
              "type" : "ExpressionRef"
           }
        }, {
           "locator" : "85:3-92:9",
           "name" : "Admission Without VTE or Obstetrical Conditions",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "86:5-92:9",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "86:5-86:51",
                 "alias" : "InpatientEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "86:5-86:32",
                    "name" : "Inpatient Encounter",
                    "libraryName" : "Global",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "87:7-92:9",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "Not",
                 "operand" : {
                    "locator" : "87:17-92:9",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "Exists",
                    "operand" : {
                       "locator" : "87:25-91:13",
                       "type" : "Query",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Condition",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "source" : [ {
                          "locator" : "87:25-87:90",
                          "alias" : "EncounterDiagnosis",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Condition",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "expression" : {
                             "locator" : "87:25-87:71",
                             "name" : "EncounterDiagnosis",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Condition",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "87:52-87:69",
                                "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                                "name" : "InpatientEncounter",
                                "type" : "AliasRef"
                             } ]
                          }
                       } ],
                       "relationship" : [ ],
                       "where" : {
                          "locator" : "88:15-91:13",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Or",
                          "operand" : [ {
                             "locator" : "88:22-89:62",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Or",
                             "operand" : [ {
                                "locator" : "88:22-88:60",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "InValueSet",
                                "code" : {
                                   "name" : "ToConcept",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "88:22-88:44",
                                      "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                      "path" : "code",
                                      "scope" : "EncounterDiagnosis",
                                      "type" : "Property"
                                   } ]
                                },
                                "valueset" : {
                                   "locator" : "88:49-88:60",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Obstetrics"
                                }
                             }, {
                                "locator" : "89:12-89:62",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "InValueSet",
                                "code" : {
                                   "name" : "ToConcept",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "89:12-89:34",
                                      "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                      "path" : "code",
                                      "scope" : "EncounterDiagnosis",
                                      "type" : "Property"
                                   } ]
                                },
                                "valueset" : {
                                   "locator" : "89:39-89:62",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Venous Thromboembolism"
                                }
                             } ]
                          }, {
                             "locator" : "90:12-90:54",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "InValueSet",
                             "code" : {
                                "name" : "ToConcept",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "90:12-90:34",
                                   "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                   "path" : "code",
                                   "scope" : "EncounterDiagnosis",
                                   "type" : "Property"
                                } ]
                             },
                             "valueset" : {
                                "locator" : "90:39-90:54",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Obstetrics VTE"
                             }
                          } ]
                       }
                    }
                 }
              }
           }
        }, {
           "locator" : "78:1-83:63",
           "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "79:5-83:63",
              "type" : "Intersect",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "79:5-82:5",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "79:7-79:53",
                    "alias" : "InpatientEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "79:7-79:34",
                       "name" : "Inpatient Encounter",
                       "libraryName" : "Global",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 } ],
                 "relationship" : [ {
                    "locator" : "80:7-81:129",
                    "alias" : "BirthDate",
                    "type" : "With",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Patient",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "80:12-80:22",
                       "dataType" : "{http://hl7.org/fhir}Patient",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Patient",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Patient",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    },
                    "suchThat" : {
                       "locator" : "81:18-81:129",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "GreaterOrEqual",
                       "operand" : [ {
                          "locator" : "81:18-81:123",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "name" : "CalendarAgeInYearsAt",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "type" : "ToDateTime",
                             "operand" : {
                                "locator" : "81:48-81:86",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Date",
                                "name" : "ToDate",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "81:67-81:85",
                                   "resultTypeName" : "{http://hl7.org/fhir}date",
                                   "path" : "birthDate",
                                   "scope" : "BirthDate",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "81:89-81:122",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "81:98-81:122",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "InpatientEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          } ]
                       }, {
                          "locator" : "81:128-81:129",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "18",
                          "type" : "Literal"
                       } ]
                    }
                 } ]
              }, {
                 "locator" : "83:15-83:63",
                 "name" : "Admission Without VTE or Obstetrical Conditions",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              } ]
           }
        }, {
           "locator" : "74:1-75:80",
           "name" : "Initial Population",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "75:3-75:80",
              "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
              "type" : "ExpressionRef",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              }
           }
        }, {
           "locator" : "94:1-95:26",
           "name" : "Denominator",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "95:7-95:26",
              "name" : "Initial Population",
              "type" : "ExpressionRef",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              }
           }
        }, {
           "locator" : "105:1-107:61",
           "name" : "Encounter Less Than 2 Days",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "106:3-107:61",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "106:3-106:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "106:3-106:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "107:4-107:61",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "Less",
                 "operand" : [ {
                    "locator" : "107:10-107:58",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "name" : "LengthInDays",
                    "libraryName" : "Global",
                    "type" : "FunctionRef",
                    "operand" : [ {
                       "name" : "ToInterval",
                       "libraryName" : "FHIRHelpers",
                       "type" : "FunctionRef",
                       "operand" : [ {
                          "locator" : "107:32-107:57",
                          "resultTypeName" : "{http://hl7.org/fhir}Period",
                          "path" : "period",
                          "scope" : "QualifyingEncounter",
                          "type" : "Property"
                       } ]
                    } ]
                 }, {
                    "locator" : "107:61",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                    "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                    "value" : "2",
                    "type" : "Literal"
                 } ]
              }
           }
        }, {
           "locator" : "109:1-115:6",
           "name" : "Encounter With ICU Location Stay 1 Day or More",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "110:3-115:6",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "110:3-110:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "110:3-110:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "111:5-115:6",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "Exists",
                 "operand" : {
                    "locator" : "111:18-115:6",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter.Location",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "111:20-111:56",
                       "alias" : "Location",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter.Location",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "111:20-111:47",
                          "path" : "location",
                          "scope" : "QualifyingEncounter",
                          "type" : "Property",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter.Location",
                                "type" : "NamedTypeSpecifier"
                             }
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "112:7-114:107",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "112:13-113:53",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "And",
                          "operand" : [ {
                             "locator" : "112:13-112:79",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "AnyInValueSet",
                             "codes" : {
                                "type" : "Query",
                                "source" : [ {
                                   "alias" : "X",
                                   "expression" : {
                                      "locator" : "112:13-112:54",
                                      "path" : "type",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      },
                                      "source" : {
                                         "locator" : "112:13-112:49",
                                         "resultTypeName" : "{http://hl7.org/fhir}Location",
                                         "name" : "GetLocation",
                                         "libraryName" : "Global",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "locator" : "112:32-112:48",
                                            "resultTypeName" : "{http://hl7.org/fhir}Reference",
                                            "path" : "location",
                                            "scope" : "Location",
                                            "type" : "Property"
                                         } ]
                                      }
                                   }
                                } ],
                                "return" : {
                                   "distinct" : false,
                                   "expression" : {
                                      "name" : "ToConcept",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "name" : "X",
                                         "type" : "AliasRef"
                                      } ]
                                   }
                                }
                             },
                             "valueset" : {
                                "locator" : "112:59-112:79",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Intensive Care Unit"
                             }
                          }, {
                             "locator" : "113:12-113:53",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "GreaterOrEqual",
                             "operand" : [ {
                                "locator" : "113:12-113:49",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                "name" : "LengthInDays",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "name" : "ToInterval",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "113:34-113:48",
                                      "resultTypeName" : "{http://hl7.org/fhir}Period",
                                      "path" : "period",
                                      "scope" : "Location",
                                      "type" : "Property"
                                   } ]
                                } ]
                             }, {
                                "locator" : "113:53",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                                "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                                "value" : "1",
                                "type" : "Literal"
                             } ]
                          } ]
                       }, {
                          "locator" : "114:12-114:107",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "In",
                          "operand" : [ {
                             "locator" : "114:28-114:33",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "114:12-114:26",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "Location",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "114:42-114:107",
                             "name" : "CalendarDayOfOrDayAfter",
                             "libraryName" : "TJC",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "114:72-114:106",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "Start",
                                "operand" : {
                                   "name" : "ToInterval",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "114:81-114:106",
                                      "resultTypeName" : "{http://hl7.org/fhir}Period",
                                      "path" : "period",
                                      "scope" : "QualifyingEncounter",
                                      "type" : "Property"
                                   } ]
                                }
                             } ]
                          } ]
                       } ]
                    }
                 }
              }
           }
        }, {
           "locator" : "117:1-121:85",
           "name" : "Encounter With Principal Diagnosis of Mental Disorder or Stroke",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "118:3-121:85",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "118:3-118:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "118:3-118:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "119:5-121:85",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "Or",
                 "operand" : [ {
                    "locator" : "119:11-120:88",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "Or",
                    "operand" : [ {
                       "locator" : "119:11-119:92",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "InValueSet",
                       "code" : {
                          "name" : "ToConcept",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "119:11-119:63",
                             "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                             "path" : "code",
                             "type" : "Property",
                             "source" : {
                                "locator" : "119:11-119:58",
                                "resultTypeName" : "{http://hl7.org/fhir}Condition",
                                "name" : "PrincipalDiagnosis",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "119:39-119:57",
                                   "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                                   "name" : "QualifyingEncounter",
                                   "type" : "AliasRef"
                                } ]
                             }
                          } ]
                       },
                       "valueset" : {
                          "locator" : "119:68-119:92",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Mental Health Diagnoses"
                       }
                    }, {
                       "locator" : "120:12-120:88",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "InValueSet",
                       "code" : {
                          "name" : "ToConcept",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "120:12-120:64",
                             "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                             "path" : "code",
                             "type" : "Property",
                             "source" : {
                                "locator" : "120:12-120:59",
                                "resultTypeName" : "{http://hl7.org/fhir}Condition",
                                "name" : "PrincipalDiagnosis",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "120:40-120:58",
                                   "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                                   "name" : "QualifyingEncounter",
                                   "type" : "AliasRef"
                                } ]
                             }
                          } ]
                       },
                       "valueset" : {
                          "locator" : "120:69-120:88",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Hemorrhagic Stroke"
                       }
                    } ]
                 }, {
                    "locator" : "121:12-121:85",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "InValueSet",
                    "code" : {
                       "name" : "ToConcept",
                       "libraryName" : "FHIRHelpers",
                       "type" : "FunctionRef",
                       "operand" : [ {
                          "locator" : "121:12-121:64",
                          "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                          "path" : "code",
                          "type" : "Property",
                          "source" : {
                             "locator" : "121:12-121:59",
                             "resultTypeName" : "{http://hl7.org/fhir}Condition",
                             "name" : "PrincipalDiagnosis",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "121:40-121:58",
                                "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                                "name" : "QualifyingEncounter",
                                "type" : "AliasRef"
                             } ]
                          }
                       } ]
                    },
                    "valueset" : {
                       "locator" : "121:69-121:85",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "Ischemic Stroke"
                    }
                 } ]
              }
           }
        }, {
           "locator" : "138:1-146:38",
           "name" : "SCIP VTE Selected Surgery",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Procedure",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "139:3-146:38",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Procedure",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "139:3-145:57",
                 "alias" : "Procedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "139:3-145:47",
                    "type" : "Union",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "operand" : [ {
                       "locator" : "139:5-144:51",
                       "type" : "Union",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "139:5-142:50",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "139:5-140:48",
                             "type" : "Union",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Procedure",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "139:5-139:36",
                                "dataType" : "{http://hl7.org/fhir}Procedure",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "139:19-139:35",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "General Surgery",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "140:11-140:48",
                                "dataType" : "{http://hl7.org/fhir}Procedure",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "140:25-140:47",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Gynecological Surgery",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          }, {
                             "type" : "Union",
                             "operand" : [ {
                                "locator" : "141:11-141:47",
                                "dataType" : "{http://hl7.org/fhir}Procedure",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "141:25-141:46",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Hip Fracture Surgery",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "142:11-142:50",
                                "dataType" : "{http://hl7.org/fhir}Procedure",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "142:25-142:49",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Hip Replacement Surgery",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          } ]
                       }, {
                          "type" : "Union",
                          "operand" : [ {
                             "locator" : "143:11-143:52",
                             "dataType" : "{http://hl7.org/fhir}Procedure",
                             "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                             "codeProperty" : "code",
                             "codeComparator" : "in",
                             "type" : "Retrieve",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Procedure",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "codes" : {
                                "locator" : "143:25-143:51",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Intracranial Neurosurgery",
                                "type" : "ValueSetRef"
                             }
                          }, {
                             "locator" : "144:11-144:51",
                             "dataType" : "{http://hl7.org/fhir}Procedure",
                             "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                             "codeProperty" : "code",
                             "codeComparator" : "in",
                             "type" : "Retrieve",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Procedure",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "codes" : {
                                "locator" : "144:25-144:50",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Knee Replacement Surgery",
                                "type" : "ValueSetRef"
                             }
                          } ]
                       } ]
                    }, {
                       "locator" : "145:11-145:45",
                       "dataType" : "{http://hl7.org/fhir}Procedure",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "145:25-145:44",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Urological Surgery",
                          "type" : "ValueSetRef"
                       }
                    } ]
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "146:3-146:38",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "Equal",
                 "operand" : [ {
                    "name" : "ToString",
                    "libraryName" : "FHIRHelpers",
                    "type" : "FunctionRef",
                    "operand" : [ {
                       "locator" : "146:9-146:24",
                       "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                       "path" : "status",
                       "scope" : "Procedure",
                       "type" : "Property"
                    } ]
                 }, {
                    "locator" : "146:28-146:38",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                    "valueType" : "{urn:hl7-org:elm-types:r1}String",
                    "value" : "completed",
                    "type" : "Literal"
                 } ]
              }
           }
        }, {
           "locator" : "129:1-136:100",
           "name" : "Encounter With Principal Procedure of SCIP VTE Selected Surgery",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "TupleTypeSpecifier",
                 "element" : [ {
                    "name" : "QualifyingEncounter",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }, {
                    "name" : "SelectedProcedure",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 } ]
              }
           },
           "expression" : {
              "locator" : "130:3-136:100",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "QualifyingEncounter",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "SelectedProcedure",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    } ]
                 }
              },
              "source" : [ {
                 "locator" : "131:7-131:104",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "131:7-131:84",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "132:7-132:51",
                 "alias" : "SelectedProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "132:7-132:33",
                    "name" : "SCIP VTE Selected Surgery",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "let" : [ {
                 "locator" : "133:11-133:100",
                 "resultTypeName" : "{http://hl7.org/fhir}Extension",
                 "identifier" : "EncounterProcedure",
                 "expression" : {
                    "locator" : "133:31-133:100",
                    "resultTypeName" : "{http://hl7.org/fhir}Extension",
                    "name" : "GetExtension",
                    "libraryName" : "Global",
                    "type" : "FunctionRef",
                    "operand" : [ {
                       "locator" : "133:51-133:69",
                       "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                       "name" : "QualifyingEncounter",
                       "type" : "AliasRef"
                    }, {
                       "locator" : "133:72-133:99",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                       "value" : "qicore-encounter-procedure",
                       "type" : "Literal"
                    } ]
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "134:3-136:100",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "134:9-135:157",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "134:9-134:108",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "locator" : "134:9-134:104",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "name" : "ToInteger",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "134:31-134:103",
                             "resultTypeName" : "{http://hl7.org/fhir}positiveInt",
                             "strict" : false,
                             "type" : "As",
                             "operand" : {
                                "locator" : "134:31-134:83",
                                "path" : "value",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                },
                                "source" : {
                                   "locator" : "134:31-134:77",
                                   "resultTypeName" : "{http://hl7.org/fhir}Extension",
                                   "name" : "GetExtension",
                                   "libraryName" : "Global",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "134:51-134:68",
                                      "resultTypeName" : "{http://hl7.org/fhir}Extension",
                                      "name" : "EncounterProcedure",
                                      "type" : "QueryLetRef"
                                   }, {
                                      "locator" : "134:71-134:76",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                      "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                      "value" : "rank",
                                      "type" : "Literal"
                                   } ]
                                }
                             },
                             "asTypeSpecifier" : {
                                "locator" : "134:88-134:103",
                                "resultTypeName" : "{http://hl7.org/fhir}positiveInt",
                                "name" : "{http://hl7.org/fhir}positiveInt",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "locator" : "134:108",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Integer",
                          "valueType" : "{urn:hl7-org:elm-types:r1}Integer",
                          "value" : "1",
                          "type" : "Literal"
                       } ]
                    }, {
                       "locator" : "135:11-135:157",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "locator" : "135:11-135:134",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "name" : "GetId",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "135:24-135:133",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "135:45-135:132",
                                "resultTypeName" : "{http://hl7.org/fhir}string",
                                "path" : "reference",
                                "type" : "Property",
                                "source" : {
                                   "locator" : "135:45-135:122",
                                   "resultTypeName" : "{http://hl7.org/fhir}Reference",
                                   "strict" : false,
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "135:46-135:103",
                                      "path" : "value",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      },
                                      "source" : {
                                         "locator" : "135:46-135:97",
                                         "resultTypeName" : "{http://hl7.org/fhir}Extension",
                                         "name" : "GetExtension",
                                         "libraryName" : "Global",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "locator" : "135:66-135:83",
                                            "resultTypeName" : "{http://hl7.org/fhir}Extension",
                                            "name" : "EncounterProcedure",
                                            "type" : "QueryLetRef"
                                         }, {
                                            "locator" : "135:86-135:96",
                                            "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                            "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                            "value" : "procedure",
                                            "type" : "Literal"
                                         } ]
                                      }
                                   },
                                   "asTypeSpecifier" : {
                                      "locator" : "135:108-135:121",
                                      "resultTypeName" : "{http://hl7.org/fhir}Reference",
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }
                             } ]
                          } ]
                       }, {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "135:138-135:157",
                             "resultTypeName" : "{http://hl7.org/fhir}id",
                             "path" : "id",
                             "scope" : "SelectedProcedure",
                             "type" : "Property"
                          } ]
                       } ]
                    } ]
                 }, {
                    "locator" : "136:11-136:100",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "IncludedIn",
                    "operand" : [ {
                       "locator" : "136:11-136:66",
                       "name" : "Normalize Interval",
                       "libraryName" : "Global",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "136:39-136:65",
                          "path" : "performed",
                          "scope" : "SelectedProcedure",
                          "type" : "Property",
                          "resultTypeSpecifier" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Period",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}string",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Age",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Range",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       } ]
                    }, {
                       "name" : "ToInterval",
                       "libraryName" : "FHIRHelpers",
                       "type" : "FunctionRef",
                       "operand" : [ {
                          "locator" : "136:75-136:100",
                          "resultTypeName" : "{http://hl7.org/fhir}Period",
                          "path" : "period",
                          "scope" : "QualifyingEncounter",
                          "type" : "Property"
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "distinct" : true,
                 "expression" : {
                    "type" : "Tuple",
                    "element" : [ {
                       "name" : "QualifyingEncounter",
                       "value" : {
                          "name" : "QualifyingEncounter",
                          "type" : "AliasRef"
                       }
                    }, {
                       "name" : "SelectedProcedure",
                       "value" : {
                          "name" : "SelectedProcedure",
                          "type" : "AliasRef"
                       }
                    } ]
                 }
              }
           }
        }, {
           "locator" : "153:1-159:74",
           "name" : "Intervention Comfort Measures",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "name" : "{http://hl7.org/fhir}ServiceRequest",
                    "type" : "NamedTypeSpecifier"
                 }, {
                    "name" : "{http://hl7.org/fhir}Procedure",
                    "type" : "NamedTypeSpecifier"
                 } ]
              }
           },
           "expression" : {
              "locator" : "154:2-159:74",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "name" : "{http://hl7.org/fhir}ServiceRequest",
                       "type" : "NamedTypeSpecifier"
                    }, {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "154:2-156:3",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}ServiceRequest",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "154:3-154:42",
                       "alias" : "P",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}ServiceRequest",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "154:3-154:40",
                          "dataType" : "{http://hl7.org/fhir}ServiceRequest",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}ServiceRequest",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "154:22-154:39",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Comfort Measures",
                             "type" : "ValueSetRef"
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "155:7-155:30",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "155:13-155:20",
                             "resultTypeName" : "{http://hl7.org/fhir}ServiceRequestIntent",
                             "path" : "intent",
                             "scope" : "P",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "155:24-155:30",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "order",
                          "type" : "Literal"
                       } ]
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}ServiceRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "158:6-159:74",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "158:7-158:61",
                       "alias" : "InterventionPerformed",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "158:7-158:39",
                          "dataType" : "{http://hl7.org/fhir}Procedure",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "158:21-158:38",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Comfort Measures",
                             "type" : "ValueSetRef"
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "159:8-159:73",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "In",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "159:14-159:41",
                             "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                             "path" : "status",
                             "scope" : "InterventionPerformed",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "159:46-159:73",
                          "type" : "List",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}String",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "element" : [ {
                             "locator" : "159:47-159:57",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "completed",
                             "type" : "Literal"
                          }, {
                             "locator" : "159:60-159:72",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "in-progress",
                             "type" : "Literal"
                          } ]
                       } ]
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}ServiceRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "148:1-151:199",
           "name" : "Encounter With Intervention Comfort Measures From Day of Start of Hospitalization To Day After Admission",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "149:2-151:199",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "149:2-149:99",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "149:2-149:79",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "150:3-151:199",
                 "alias" : "ComfortMeasure",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}ServiceRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "150:8-150:38",
                    "name" : "Intervention Comfort Measures",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}ServiceRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 },
                 "suchThat" : {
                    "locator" : "151:13-151:199",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "151:13-151:111",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                       "type" : "Coalesce",
                       "operand" : [ {
                          "locator" : "151:22-151:83",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "151:31-151:83",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "151:59-151:82",
                                "path" : "performed",
                                "scope" : "ComfortMeasure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "name" : "ToDateTime",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "151:86-151:110",
                             "resultTypeName" : "{http://hl7.org/fhir}dateTime",
                             "path" : "authoredOn",
                             "scope" : "ComfortMeasure",
                             "type" : "Property"
                          } ]
                       } ]
                    }, {
                       "locator" : "151:120-151:199",
                       "name" : "FromDayOfStartOfHospitalizationToDayAfterAdmission",
                       "libraryName" : "VTEICU",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "151:180-151:198",
                          "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                          "name" : "QualifyingEncounter",
                          "type" : "AliasRef"
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "161:1-169:30",
           "name" : "Encounter With Intervention Comfort Measures on Day of or Day After Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "162:3-169:30",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "163:5-163:102",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "163:5-163:82",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "164:5-164:72",
                 "alias" : "AnesthesiaProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "164:5-164:52",
                    "dataType" : "{http://hl7.org/fhir}Procedure",
                    "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                    "codeProperty" : "code",
                    "codeComparator" : "in",
                    "type" : "Retrieve",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "codes" : {
                       "locator" : "164:19-164:51",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "General or Neuraxial Anesthesia",
                       "type" : "ValueSetRef"
                    }
                 }
              }, {
                 "locator" : "165:5-165:50",
                 "alias" : "ComfortMeasure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}ServiceRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "165:5-165:35",
                    "name" : "Intervention Comfort Measures",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}ServiceRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "166:3-168:215",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "166:9-167:126",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "166:9-166:48",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "166:9-166:34",
                             "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                             "path" : "status",
                             "scope" : "AnesthesiaProcedure",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "166:38-166:48",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "completed",
                          "type" : "Literal"
                       } ]
                    }, {
                       "locator" : "167:9-167:126",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "precision" : "Day",
                       "type" : "SameAs",
                       "operand" : [ {
                          "locator" : "167:68-167:71",
                          "type" : "End",
                          "operand" : {
                             "locator" : "167:9-167:66",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "167:37-167:65",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "167:92-167:126",
                          "type" : "Add",
                          "operand" : [ {
                             "locator" : "167:92-167:126",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "167:101-167:126",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "QualifyingEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "167:73-167:77",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                             "value" : 1,
                             "unit" : "day",
                             "type" : "Quantity"
                          } ]
                       } ]
                    } ]
                 }, {
                    "locator" : "168:13-168:215",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "168:13-168:111",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                       "type" : "Coalesce",
                       "operand" : [ {
                          "locator" : "168:22-168:83",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "168:31-168:83",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "168:59-168:82",
                                "path" : "performed",
                                "scope" : "ComfortMeasure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "name" : "ToDateTime",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "168:86-168:110",
                             "resultTypeName" : "{http://hl7.org/fhir}dateTime",
                             "path" : "authoredOn",
                             "scope" : "ComfortMeasure",
                             "type" : "Property"
                          } ]
                       } ]
                    }, {
                       "locator" : "168:120-168:215",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "168:150-168:214",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "locator" : "168:157-168:214",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "168:185-168:213",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "locator" : "169:5-169:30",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "169:12-169:30",
                    "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                    "name" : "QualifyingEncounter",
                    "type" : "AliasRef"
                 }
              }
           }
        }, {
           "locator" : "97:1-103:90",
           "name" : "Denominator Exclusion",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }, {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "QualifyingEncounter",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "SelectedProcedure",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    } ]
                 } ]
              }
           },
           "expression" : {
              "locator" : "98:5-103:90",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }, {
                       "type" : "TupleTypeSpecifier",
                       "element" : [ {
                          "name" : "QualifyingEncounter",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "SelectedProcedure",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       } ]
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "98:5-102:117",
                    "type" : "Union",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "QualifyingEncounter",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Encounter",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "SelectedProcedure",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Procedure",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          } ]
                       }
                    },
                    "operand" : [ {
                       "type" : "As",
                       "operand" : {
                          "locator" : "98:5-101:76",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}Encounter",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "type" : "TupleTypeSpecifier",
                                   "element" : [ {
                                      "name" : "QualifyingEncounter",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}Encounter",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }, {
                                      "name" : "SelectedProcedure",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}Procedure",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   } ]
                                } ]
                             }
                          },
                          "operand" : [ {
                             "type" : "As",
                             "operand" : {
                                "locator" : "98:5-99:59",
                                "type" : "Union",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Encounter",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "98:5-98:32",
                                   "name" : "Encounter Less Than 2 Days",
                                   "type" : "ExpressionRef",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}Encounter",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                }, {
                                   "locator" : "99:12-99:59",
                                   "name" : "Encounter With ICU Location Stay 1 Day or More",
                                   "type" : "ExpressionRef",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}Encounter",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                } ]
                             },
                             "asTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}Encounter",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "type" : "TupleTypeSpecifier",
                                      "element" : [ {
                                         "name" : "QualifyingEncounter",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Encounter",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }, {
                                         "name" : "SelectedProcedure",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Procedure",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      } ]
                                   } ]
                                }
                             }
                          }, {
                             "type" : "As",
                             "operand" : {
                                "type" : "Union",
                                "operand" : [ {
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "100:12-100:76",
                                      "name" : "Encounter With Principal Diagnosis of Mental Disorder or Stroke",
                                      "type" : "ExpressionRef",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Encounter",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }
                                   },
                                   "asTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}Encounter",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "type" : "TupleTypeSpecifier",
                                            "element" : [ {
                                               "name" : "QualifyingEncounter",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Encounter",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            }, {
                                               "name" : "SelectedProcedure",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Procedure",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            } ]
                                         } ]
                                      }
                                   }
                                }, {
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "101:12-101:76",
                                      "name" : "Encounter With Principal Procedure of SCIP VTE Selected Surgery",
                                      "type" : "ExpressionRef",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "type" : "TupleTypeSpecifier",
                                            "element" : [ {
                                               "name" : "QualifyingEncounter",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Encounter",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            }, {
                                               "name" : "SelectedProcedure",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Procedure",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            } ]
                                         }
                                      }
                                   },
                                   "asTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}Encounter",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "type" : "TupleTypeSpecifier",
                                            "element" : [ {
                                               "name" : "QualifyingEncounter",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Encounter",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            }, {
                                               "name" : "SelectedProcedure",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}Procedure",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            } ]
                                         } ]
                                      }
                                   }
                                } ]
                             },
                             "asTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}Encounter",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "type" : "TupleTypeSpecifier",
                                      "element" : [ {
                                         "name" : "QualifyingEncounter",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Encounter",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }, {
                                         "name" : "SelectedProcedure",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Procedure",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      } ]
                                   } ]
                                }
                             }
                          } ]
                       },
                       "asTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "type" : "TupleTypeSpecifier",
                                "element" : [ {
                                   "name" : "QualifyingEncounter",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Encounter",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "SelectedProcedure",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                } ]
                             } ]
                          }
                       }
                    }, {
                       "type" : "As",
                       "operand" : {
                          "locator" : "102:12-102:117",
                          "name" : "Encounter With Intervention Comfort Measures From Day of Start of Hospitalization To Day After Admission",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }
                       },
                       "asTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "type" : "TupleTypeSpecifier",
                                "element" : [ {
                                   "name" : "QualifyingEncounter",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Encounter",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "SelectedProcedure",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Procedure",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                } ]
                             } ]
                          }
                       }
                    } ]
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "QualifyingEncounter",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "SelectedProcedure",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "103:12-103:90",
                    "name" : "Encounter With Intervention Comfort Measures on Day of or Day After Procedure",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "QualifyingEncounter",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "SelectedProcedure",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "200:1-215:11",
           "name" : "VTE Prophylaxis by Medication Administered or Device Applied",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "name" : "{http://hl7.org/fhir}Procedure",
                    "type" : "NamedTypeSpecifier"
                 }, {
                    "name" : "{http://hl7.org/fhir}MedicationAdministration",
                    "type" : "NamedTypeSpecifier"
                 } ]
              }
           },
           "expression" : {
              "locator" : "201:3-215:11",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }, {
                       "name" : "{http://hl7.org/fhir}MedicationAdministration",
                       "type" : "NamedTypeSpecifier"
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "201:3-207:112",
                    "type" : "Union",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "operand" : [ {
                       "locator" : "201:3-205:142",
                       "type" : "Union",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "201:3-204:3",
                          "type" : "Query",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "source" : [ {
                             "locator" : "201:5-201:115",
                             "alias" : "VTEMedication",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "expression" : {
                                "locator" : "201:5-201:101",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "201:48-201:100",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Dose Unfractionated Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }
                          } ],
                          "relationship" : [ ],
                          "where" : {
                             "locator" : "202:7-203:62",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "And",
                             "operand" : [ {
                                "locator" : "202:13-202:45",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "Equal",
                                "operand" : [ {
                                   "name" : "ToString",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "202:13-202:32",
                                      "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                                      "path" : "status",
                                      "scope" : "VTEMedication",
                                      "type" : "Property"
                                   } ]
                                }, {
                                   "locator" : "202:35-202:45",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                   "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                   "value" : "completed",
                                   "type" : "Literal"
                                } ]
                             }, {
                                "locator" : "203:13-203:62",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "InValueSet",
                                "code" : {
                                   "name" : "ToConcept",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "203:13-203:38",
                                      "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                      "path" : "route",
                                      "type" : "Property",
                                      "source" : {
                                         "locator" : "203:13-203:32",
                                         "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministration.Dosage",
                                         "path" : "dosage",
                                         "scope" : "VTEMedication",
                                         "type" : "Property"
                                      }
                                   } ]
                                },
                                "valueset" : {
                                   "locator" : "203:43-203:62",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Subcutaneous route"
                                }
                             } ]
                          }
                       }, {
                          "locator" : "205:10-205:142",
                          "type" : "Query",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "source" : [ {
                             "locator" : "205:11-205:109",
                             "alias" : "LMWH",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "expression" : {
                                "locator" : "205:11-205:104",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "205:54-205:103",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Molecular Weight Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }
                          } ],
                          "relationship" : [ ],
                          "where" : {
                             "locator" : "205:111-205:141",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Equal",
                             "operand" : [ {
                                "name" : "ToString",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "205:117-205:127",
                                   "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                                   "path" : "status",
                                   "scope" : "LMWH",
                                   "type" : "Property"
                                } ]
                             }, {
                                "locator" : "205:131-205:141",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             } ]
                          }
                       } ]
                    }, {
                       "type" : "Union",
                       "operand" : [ {
                          "locator" : "206:11-206:153",
                          "type" : "Query",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "source" : [ {
                             "locator" : "206:12-206:116",
                             "alias" : "FactorXa",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "expression" : {
                                "locator" : "206:12-206:107",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "206:55-206:106",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Injectable Factor Xa Inhibitor for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }
                          } ],
                          "relationship" : [ ],
                          "where" : {
                             "locator" : "206:118-206:152",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Equal",
                             "operand" : [ {
                                "name" : "ToString",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "206:124-206:138",
                                   "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                                   "path" : "status",
                                   "scope" : "FactorXa",
                                   "type" : "Property"
                                } ]
                             }, {
                                "locator" : "206:142-206:152",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             } ]
                          }
                       }, {
                          "locator" : "207:12-207:112",
                          "type" : "Query",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "source" : [ {
                             "locator" : "207:13-207:75",
                             "alias" : "Warfarin",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "expression" : {
                                "locator" : "207:13-207:66",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "207:56-207:65",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Warfarin",
                                   "type" : "ValueSetRef"
                                }
                             }
                          } ],
                          "relationship" : [ ],
                          "where" : {
                             "locator" : "207:77-207:111",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Equal",
                             "operand" : [ {
                                "name" : "ToString",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "207:83-207:97",
                                   "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                                   "path" : "status",
                                   "scope" : "Warfarin",
                                   "type" : "Property"
                                } ]
                             }, {
                                "locator" : "207:101-207:111",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             } ]
                          }
                       } ]
                    } ]
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "208:13-215:11",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "209:11-209:59",
                       "alias" : "DeviceApplied",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "209:11-209:45",
                          "dataType" : "{http://hl7.org/fhir}Procedure",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "209:25-209:44",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Device Application",
                             "type" : "ValueSetRef"
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "210:11-214:21",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "210:17-210:49",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Equal",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "210:17-210:36",
                                "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                                "path" : "status",
                                "scope" : "DeviceApplied",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "210:40-210:49",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "complete",
                             "type" : "Literal"
                          } ]
                       }, {
                          "locator" : "211:21-214:21",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Or",
                          "operand" : [ {
                             "locator" : "211:22-212:73",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Or",
                             "operand" : [ {
                                "locator" : "211:22-211:97",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "AnyInValueSet",
                                "codes" : {
                                   "type" : "Query",
                                   "source" : [ {
                                      "alias" : "X",
                                      "expression" : {
                                         "locator" : "211:22-211:43",
                                         "path" : "usedCode",
                                         "scope" : "DeviceApplied",
                                         "type" : "Property",
                                         "resultTypeSpecifier" : {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         }
                                      }
                                   } ],
                                   "return" : {
                                      "distinct" : false,
                                      "expression" : {
                                         "name" : "ToConcept",
                                         "libraryName" : "FHIRHelpers",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "name" : "X",
                                            "type" : "AliasRef"
                                         } ]
                                      }
                                   }
                                },
                                "valueset" : {
                                   "locator" : "211:48-211:97",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Intermittent pneumatic compression devices (IPC)"
                                }
                             }, {
                                "locator" : "212:24-212:73",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "AnyInValueSet",
                                "codes" : {
                                   "type" : "Query",
                                   "source" : [ {
                                      "alias" : "X",
                                      "expression" : {
                                         "locator" : "212:24-212:45",
                                         "path" : "usedCode",
                                         "scope" : "DeviceApplied",
                                         "type" : "Property",
                                         "resultTypeSpecifier" : {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         }
                                      }
                                   } ],
                                   "return" : {
                                      "distinct" : false,
                                      "expression" : {
                                         "name" : "ToConcept",
                                         "libraryName" : "FHIRHelpers",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "name" : "X",
                                            "type" : "AliasRef"
                                         } ]
                                      }
                                   }
                                },
                                "valueset" : {
                                   "locator" : "212:49-212:73",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Venous foot pumps (VFP)"
                                }
                             } ]
                          }, {
                             "locator" : "213:24-213:88",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "AnyInValueSet",
                             "codes" : {
                                "type" : "Query",
                                "source" : [ {
                                   "alias" : "X",
                                   "expression" : {
                                      "locator" : "213:24-213:45",
                                      "path" : "usedCode",
                                      "scope" : "DeviceApplied",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }
                                   }
                                } ],
                                "return" : {
                                   "distinct" : false,
                                   "expression" : {
                                      "name" : "ToConcept",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "name" : "X",
                                         "type" : "AliasRef"
                                      } ]
                                   }
                                }
                             },
                             "valueset" : {
                                "locator" : "213:50-213:88",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Graduated compression stockings (GCS)"
                             }
                          } ]
                       } ]
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "182:1-197:2",
           "name" : "Encounter With VTE Prophylaxis Received on Day of or Day After Admission or Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "183:3-197:2",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "183:3-188:3",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "184:7-184:104",
                    "alias" : "QualifyingEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "184:7-184:84",
                       "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 }, {
                    "locator" : "185:7-185:83",
                    "alias" : "VTEProphylaxis",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    },
                    "expression" : {
                       "locator" : "185:7-185:68",
                       "name" : "VTE Prophylaxis by Medication Administered or Device Applied",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       }
                    }
                 } ],
                 "relationship" : [ ],
                 "where" : {
                    "locator" : "186:5-186:209",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "186:130-186:135",
                       "type" : "Start",
                       "operand" : {
                          "locator" : "186:11-186:128",
                          "type" : "Coalesce",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "186:20-186:72",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "186:48-186:71",
                                "path" : "effective",
                                "scope" : "VTEProphylaxis",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }, {
                             "locator" : "186:75-186:127",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "186:103-186:126",
                                "path" : "performed",
                                "scope" : "VTEProphylaxis",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          } ]
                       }
                    }, {
                       "locator" : "186:144-186:209",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "186:174-186:208",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "name" : "ToInterval",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "186:183-186:208",
                                "resultTypeName" : "{http://hl7.org/fhir}Period",
                                "path" : "period",
                                "scope" : "QualifyingEncounter",
                                "type" : "Property"
                             } ]
                          }
                       } ]
                    } ]
                 },
                 "return" : {
                    "locator" : "187:5-187:30",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "187:12-187:30",
                       "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                       "name" : "QualifyingEncounter",
                       "type" : "AliasRef"
                    }
                 }
              }, {
                 "locator" : "189:9-197:2",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "191:6-191:103",
                    "alias" : "QualifyingEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "191:6-191:83",
                       "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 }, {
                    "locator" : "192:6-192:73",
                    "alias" : "AnesthesiaProcedure",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "192:6-192:53",
                       "dataType" : "{http://hl7.org/fhir}Procedure",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "192:20-192:52",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "General or Neuraxial Anesthesia",
                          "type" : "ValueSetRef"
                       }
                    }
                 }, {
                    "locator" : "193:6-193:82",
                    "alias" : "VTEProphylaxis",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    },
                    "expression" : {
                       "locator" : "193:6-193:67",
                       "name" : "VTE Prophylaxis by Medication Administered or Device Applied",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       }
                    }
                 } ],
                 "relationship" : [ ],
                 "where" : {
                    "locator" : "194:4-195:237",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "194:10-194:127",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "precision" : "Day",
                       "type" : "SameAs",
                       "operand" : [ {
                          "locator" : "194:69-194:72",
                          "type" : "End",
                          "operand" : {
                             "locator" : "194:10-194:67",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "194:38-194:66",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "194:93-194:127",
                          "type" : "Add",
                          "operand" : [ {
                             "locator" : "194:93-194:127",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "194:102-194:127",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "QualifyingEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "194:74-194:78",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                             "value" : 1,
                             "unit" : "day",
                             "type" : "Quantity"
                          } ]
                       } ]
                    }, {
                       "locator" : "195:9-195:237",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "In",
                       "operand" : [ {
                          "locator" : "195:128-195:133",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "195:9-195:126",
                             "type" : "Coalesce",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "195:18-195:70",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "195:46-195:69",
                                   "path" : "effective",
                                   "scope" : "VTEProphylaxis",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             }, {
                                "locator" : "195:73-195:125",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "195:101-195:124",
                                   "path" : "performed",
                                   "scope" : "VTEProphylaxis",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             } ]
                          }
                       }, {
                          "locator" : "195:142-195:237",
                          "name" : "CalendarDayOfOrDayAfter",
                          "libraryName" : "TJC",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "195:172-195:236",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "End",
                             "operand" : {
                                "locator" : "195:179-195:236",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "195:207-195:235",
                                   "path" : "performed",
                                   "scope" : "AnesthesiaProcedure",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             }
                          } ]
                       } ]
                    } ]
                 },
                 "return" : {
                    "locator" : "196:4-196:29",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "196:11-196:29",
                       "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                       "name" : "QualifyingEncounter",
                       "type" : "AliasRef"
                    }
                 }
              } ]
           }
        }, {
           "locator" : "217:1-234:9",
           "name" : "Encounter With Medication Oral Factor Xa Inhibitor Administered on Day of or Day After Admission or Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "218:2-234:9",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "218:2-224:5",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "219:7-219:104",
                    "alias" : "QualifyingEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "219:7-219:84",
                       "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 }, {
                    "locator" : "220:6-220:131",
                    "alias" : "FactorXaMedication",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "220:6-220:112",
                       "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                       "codeProperty" : "medication",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "220:49-220:111",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Oral Factor Xa Inhibitor for VTE Prophylaxis or VTE Treatment",
                          "type" : "ValueSetRef"
                       }
                    }
                 } ],
                 "relationship" : [ ],
                 "where" : {
                    "locator" : "221:5-222:148",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "221:11-221:49",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "221:11-221:35",
                             "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                             "path" : "status",
                             "scope" : "FactorXaMedication",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "221:39-221:49",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "completed",
                          "type" : "Literal"
                       } ]
                    }, {
                       "locator" : "222:11-222:148",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "In",
                       "operand" : [ {
                          "locator" : "222:69-222:74",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "222:11-222:67",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "222:39-222:66",
                                "path" : "effective",
                                "scope" : "FactorXaMedication",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "222:83-222:148",
                          "name" : "CalendarDayOfOrDayAfter",
                          "libraryName" : "TJC",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "222:113-222:147",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "222:122-222:147",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "QualifyingEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          } ]
                       } ]
                    } ]
                 },
                 "return" : {
                    "locator" : "223:5-223:30",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "223:12-223:30",
                       "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                       "name" : "QualifyingEncounter",
                       "type" : "AliasRef"
                    }
                 }
              }, {
                 "locator" : "225:11-234:9",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "226:11-226:108",
                    "alias" : "QualifyingEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "226:11-226:88",
                       "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 }, {
                    "locator" : "227:11-227:78",
                    "alias" : "AnesthesiaProcedure",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "227:11-227:58",
                       "dataType" : "{http://hl7.org/fhir}Procedure",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "227:25-227:57",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "General or Neuraxial Anesthesia",
                          "type" : "ValueSetRef"
                       }
                    }
                 }, {
                    "locator" : "228:11-228:136",
                    "alias" : "FactorXaMedication",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "228:11-228:117",
                       "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                       "codeProperty" : "medication",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "228:54-228:116",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Oral Factor Xa Inhibitor for VTE Prophylaxis or VTE Treatment",
                          "type" : "ValueSetRef"
                       }
                    }
                 } ],
                 "relationship" : [ ],
                 "where" : {
                    "locator" : "229:10-232:183",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "229:16-231:135",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "229:16-230:60",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "And",
                          "operand" : [ {
                             "locator" : "229:16-229:54",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Equal",
                             "operand" : [ {
                                "name" : "ToString",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "229:16-229:40",
                                   "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                                   "path" : "status",
                                   "scope" : "FactorXaMedication",
                                   "type" : "Property"
                                } ]
                             }, {
                                "locator" : "229:44-229:54",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             } ]
                          }, {
                             "locator" : "230:21-230:60",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Equal",
                             "operand" : [ {
                                "name" : "ToString",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "230:21-230:46",
                                   "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                                   "path" : "status",
                                   "scope" : "AnesthesiaProcedure",
                                   "type" : "Property"
                                } ]
                             }, {
                                "locator" : "230:50-230:60",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             } ]
                          } ]
                       }, {
                          "locator" : "231:18-231:135",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "precision" : "Day",
                          "type" : "SameAs",
                          "operand" : [ {
                             "locator" : "231:77-231:80",
                             "type" : "End",
                             "operand" : {
                                "locator" : "231:18-231:75",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "231:46-231:74",
                                   "path" : "performed",
                                   "scope" : "AnesthesiaProcedure",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             }
                          }, {
                             "locator" : "231:101-231:135",
                             "type" : "Add",
                             "operand" : [ {
                                "locator" : "231:101-231:135",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "Start",
                                "operand" : {
                                   "name" : "ToInterval",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "231:110-231:135",
                                      "resultTypeName" : "{http://hl7.org/fhir}Period",
                                      "path" : "period",
                                      "scope" : "QualifyingEncounter",
                                      "type" : "Property"
                                   } ]
                                }
                             }, {
                                "locator" : "231:82-231:86",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                                "value" : 1,
                                "unit" : "day",
                                "type" : "Quantity"
                             } ]
                          } ]
                       } ]
                    }, {
                       "locator" : "232:16-232:183",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "In",
                       "operand" : [ {
                          "locator" : "232:74-232:79",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "232:16-232:72",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "232:44-232:71",
                                "path" : "effective",
                                "scope" : "FactorXaMedication",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "232:88-232:183",
                          "name" : "CalendarDayOfOrDayAfter",
                          "libraryName" : "TJC",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "232:118-232:182",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "End",
                             "operand" : {
                                "locator" : "232:125-232:182",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "232:153-232:181",
                                   "path" : "performed",
                                   "scope" : "AnesthesiaProcedure",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             }
                          } ]
                       } ]
                    } ]
                 },
                 "return" : {
                    "locator" : "233:10-233:35",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "233:17-233:35",
                       "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                       "name" : "QualifyingEncounter",
                       "type" : "AliasRef"
                    }
                 }
              } ]
           }
        }, {
           "locator" : "239:1-253:9",
           "name" : "Encounter With Prior or Present Diagnosis of Atrial Fibrillation or VTE",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "240:2-253:9",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "240:2-247:8",
                 "type" : "Union",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "operand" : [ {
                    "locator" : "240:2-244:5",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "240:4-240:101",
                       "alias" : "QualifyingEncounter",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "240:4-240:81",
                          "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }
                       }
                    } ],
                    "relationship" : [ {
                       "locator" : "241:3-243:114",
                       "alias" : "AtrialFibrillation",
                       "type" : "With",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Condition",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "241:8-241:59",
                          "dataType" : "{http://hl7.org/fhir}Condition",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Condition",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "241:30-241:58",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Atrial Fibrillation/Flutter",
                             "type" : "ValueSetRef"
                          }
                       },
                       "suchThat" : {
                          "locator" : "242:13-243:114",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "And",
                          "operand" : [ {
                             "locator" : "242:13-242:130",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "In",
                             "operand" : [ {
                                "locator" : "242:13-242:68",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                                "name" : "ToConcept",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "242:35-242:67",
                                   "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                   "path" : "clinicalStatus",
                                   "scope" : "AtrialFibrillation",
                                   "type" : "Property"
                                } ]
                             }, {
                                "type" : "Query",
                                "source" : [ {
                                   "alias" : "X",
                                   "expression" : {
                                      "locator" : "242:73-242:130",
                                      "type" : "List",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{urn:hl7-org:elm-types:r1}Code",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      },
                                      "element" : [ {
                                         "locator" : "242:75-242:89",
                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                         "name" : "active",
                                         "libraryName" : "Global",
                                         "type" : "CodeRef"
                                      }, {
                                         "locator" : "242:92-242:110",
                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                         "name" : "recurrence",
                                         "libraryName" : "Global",
                                         "type" : "CodeRef"
                                      }, {
                                         "locator" : "242:113-242:128",
                                         "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                         "name" : "relapse",
                                         "libraryName" : "Global",
                                         "type" : "CodeRef"
                                      } ]
                                   }
                                } ],
                                "return" : {
                                   "distinct" : false,
                                   "expression" : {
                                      "type" : "ToConcept",
                                      "operand" : {
                                         "name" : "X",
                                         "type" : "AliasRef"
                                      }
                                   }
                                }
                             } ]
                          }, {
                             "locator" : "243:8-243:114",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "SameOrBefore",
                             "operand" : [ {
                                "locator" : "243:62-243:67",
                                "type" : "Start",
                                "operand" : {
                                   "locator" : "243:8-243:60",
                                   "name" : "Normalize Interval",
                                   "libraryName" : "Global",
                                   "type" : "FunctionRef",
                                   "resultTypeSpecifier" : {
                                      "type" : "IntervalTypeSpecifier",
                                      "pointType" : {
                                         "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   },
                                   "operand" : [ {
                                      "locator" : "243:36-243:59",
                                      "path" : "onset",
                                      "scope" : "AtrialFibrillation",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   } ]
                                }
                             }, {
                                "locator" : "243:82-243:114",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "End",
                                "operand" : {
                                   "name" : "ToInterval",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "243:89-243:114",
                                      "resultTypeName" : "{http://hl7.org/fhir}Period",
                                      "path" : "period",
                                      "scope" : "QualifyingEncounter",
                                      "type" : "Property"
                                   } ]
                                }
                             } ]
                          } ]
                       }
                    } ]
                 }, {
                    "locator" : "245:11-247:8",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "245:13-245:110",
                       "alias" : "QualifyingEncounter",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "245:13-245:90",
                          "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "246:9-246:98",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "AnyInValueSet",
                       "codes" : {
                          "type" : "Query",
                          "source" : [ {
                             "alias" : "X",
                             "expression" : {
                                "locator" : "246:15-246:65",
                                "type" : "Query",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "source" : [ {
                                   "alias" : "$this",
                                   "expression" : {
                                      "locator" : "246:15-246:60",
                                      "name" : "EncounterDiagnosis",
                                      "libraryName" : "Global",
                                      "type" : "FunctionRef",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}Condition",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      },
                                      "operand" : [ {
                                         "locator" : "246:41-246:59",
                                         "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                                         "name" : "QualifyingEncounter",
                                         "type" : "AliasRef"
                                      } ]
                                   }
                                } ],
                                "where" : {
                                   "type" : "Not",
                                   "operand" : {
                                      "type" : "IsNull",
                                      "operand" : {
                                         "path" : "code",
                                         "type" : "Property",
                                         "source" : {
                                            "name" : "$this",
                                            "type" : "AliasRef"
                                         }
                                      }
                                   }
                                },
                                "return" : {
                                   "distinct" : false,
                                   "expression" : {
                                      "path" : "code",
                                      "type" : "Property",
                                      "source" : {
                                         "name" : "$this",
                                         "type" : "AliasRef"
                                      }
                                   }
                                }
                             }
                          } ],
                          "return" : {
                             "distinct" : false,
                             "expression" : {
                                "name" : "ToConcept",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "name" : "X",
                                   "type" : "AliasRef"
                                } ]
                             }
                          }
                       },
                       "valueset" : {
                          "locator" : "246:70-246:98",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Atrial Fibrillation/Flutter"
                       }
                    }
                 } ]
              }, {
                 "locator" : "248:11-253:9",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "248:13-248:110",
                    "alias" : "QualifyingEncounter",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "248:13-248:90",
                       "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }
                 } ],
                 "relationship" : [ {
                    "locator" : "249:9-252:102",
                    "alias" : "VTEDiagnosis",
                    "type" : "With",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Condition",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "249:14-249:60",
                       "dataType" : "{http://hl7.org/fhir}Condition",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Condition",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Condition",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "249:36-249:59",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Venous Thromboembolism",
                          "type" : "ValueSetRef"
                       }
                    },
                    "suchThat" : {
                       "locator" : "250:20-252:102",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "250:20-250:133",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "In",
                          "operand" : [ {
                             "locator" : "250:20-250:69",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Concept",
                             "name" : "ToConcept",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "250:42-250:68",
                                "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                "path" : "clinicalStatus",
                                "scope" : "VTEDiagnosis",
                                "type" : "Property"
                             } ]
                          }, {
                             "type" : "Query",
                             "source" : [ {
                                "alias" : "X",
                                "expression" : {
                                   "locator" : "250:74-250:133",
                                   "type" : "List",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{urn:hl7-org:elm-types:r1}Code",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   },
                                   "element" : [ {
                                      "locator" : "250:76-250:92",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                      "name" : "inactive",
                                      "libraryName" : "Global",
                                      "type" : "CodeRef"
                                   }, {
                                      "locator" : "250:95-250:112",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                      "name" : "remission",
                                      "libraryName" : "Global",
                                      "type" : "CodeRef"
                                   }, {
                                      "locator" : "250:115-250:131",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                      "name" : "resolved",
                                      "libraryName" : "Global",
                                      "type" : "CodeRef"
                                   } ]
                                }
                             } ],
                             "return" : {
                                "distinct" : false,
                                "expression" : {
                                   "type" : "ToConcept",
                                   "operand" : {
                                      "name" : "X",
                                      "type" : "AliasRef"
                                   }
                                }
                             }
                          } ]
                       }, {
                          "locator" : "252:13-252:102",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Before",
                          "operand" : [ {
                             "locator" : "252:13-252:59",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "252:41-252:58",
                                "path" : "onset",
                                "scope" : "VTEDiagnosis",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }, {
                             "type" : "If",
                             "condition" : {
                                "type" : "IsNull",
                                "operand" : {
                                   "locator" : "252:68-252:102",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "Start",
                                   "operand" : {
                                      "name" : "ToInterval",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "locator" : "252:77-252:102",
                                         "resultTypeName" : "{http://hl7.org/fhir}Period",
                                         "path" : "period",
                                         "scope" : "QualifyingEncounter",
                                         "type" : "Property"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "type" : "Null",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }
                             },
                             "else" : {
                                "lowClosed" : true,
                                "highClosed" : true,
                                "type" : "Interval",
                                "low" : {
                                   "locator" : "252:68-252:102",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "Start",
                                   "operand" : {
                                      "name" : "ToInterval",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "locator" : "252:77-252:102",
                                         "resultTypeName" : "{http://hl7.org/fhir}Period",
                                         "path" : "period",
                                         "scope" : "QualifyingEncounter",
                                         "type" : "Property"
                                      } ]
                                   }
                                },
                                "high" : {
                                   "locator" : "252:68-252:102",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "Start",
                                   "operand" : {
                                      "name" : "ToInterval",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "locator" : "252:77-252:102",
                                         "resultTypeName" : "{http://hl7.org/fhir}Period",
                                         "path" : "period",
                                         "scope" : "QualifyingEncounter",
                                         "type" : "Property"
                                      } ]
                                   }
                                }
                             }
                          } ]
                       } ]
                    }
                 } ]
              } ]
           }
        }, {
           "locator" : "255:1-260:119",
           "name" : "Encounter With Prior or Present Procedure of Hip or Knee Replacement Surgery",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "256:2-260:119",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "256:2-256:99",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "256:2-256:79",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "257:2-260:119",
                 "alias" : "HipKneeProcedure",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "257:7-258:56",
                    "type" : "Union",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "operand" : [ {
                       "locator" : "257:9-257:48",
                       "dataType" : "{http://hl7.org/fhir}Procedure",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "257:23-257:47",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Hip Replacement Surgery",
                          "type" : "ValueSetRef"
                       }
                    }, {
                       "locator" : "258:14-258:54",
                       "dataType" : "{http://hl7.org/fhir}Procedure",
                       "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                       "codeProperty" : "code",
                       "codeComparator" : "in",
                       "type" : "Retrieve",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "codes" : {
                          "locator" : "258:28-258:53",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Knee Replacement Surgery",
                          "type" : "ValueSetRef"
                       }
                    } ]
                 },
                 "suchThat" : {
                    "locator" : "259:12-260:119",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "259:12-259:48",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "259:12-259:34",
                             "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                             "path" : "status",
                             "scope" : "HipKneeProcedure",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "259:38-259:48",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "completed",
                          "type" : "Literal"
                       } ]
                    }, {
                       "locator" : "260:11-260:119",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "SameOrBefore",
                       "operand" : [ {
                          "locator" : "260:67-260:72",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "260:11-260:65",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "260:39-260:64",
                                "path" : "performed",
                                "scope" : "HipKneeProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "260:87-260:119",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "name" : "ToInterval",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "260:94-260:119",
                                "resultTypeName" : "{http://hl7.org/fhir}Period",
                                "path" : "period",
                                "scope" : "QualifyingEncounter",
                                "type" : "Property"
                             } ]
                          }
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "272:1-289:7",
           "name" : "Is In Low Risk for VTE or On Anticoagulant",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Observation",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "273:4-289:7",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Observation",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "273:4-281:9",
                 "type" : "Union",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Observation",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "operand" : [ {
                    "locator" : "273:4-276:4",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Observation",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "273:6-273:73",
                       "alias" : "VTERiskAssessment",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Observation",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "273:6-273:55",
                          "dataType" : "{http://hl7.org/fhir}Observation",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                          "codeProperty" : "code",
                          "codeComparator" : "~",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Observation",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "type" : "ToList",
                             "operand" : {
                                "locator" : "273:22-273:54",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Code",
                                "name" : "Risk for venous thromboembolism",
                                "type" : "CodeRef"
                             }
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "274:6-275:72",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "274:12-274:48",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "InValueSet",
                          "code" : {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "asType" : "{http://hl7.org/fhir}string",
                                "type" : "As",
                                "operand" : {
                                   "locator" : "274:12-274:34",
                                   "path" : "value",
                                   "scope" : "VTERiskAssessment",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             } ]
                          },
                          "valueset" : {
                             "locator" : "274:39-274:48",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Low Risk"
                          }
                       }, {
                          "locator" : "275:13-275:72",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "In",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "275:13-275:36",
                                "resultTypeName" : "{http://hl7.org/fhir}ObservationStatus",
                                "path" : "status",
                                "scope" : "VTERiskAssessment",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "275:41-275:72",
                             "type" : "List",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "element" : [ {
                                "locator" : "275:42-275:48",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "final",
                                "type" : "Literal"
                             }, {
                                "locator" : "275:50-275:58",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "amended",
                                "type" : "Literal"
                             }, {
                                "locator" : "275:61-275:71",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "corrected",
                                "type" : "Literal"
                             } ]
                          } ]
                       } ]
                    }
                 }, {
                    "locator" : "277:9-281:9",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Observation",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "277:11-277:43",
                       "alias" : "INRLabTest",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Observation",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "277:11-277:32",
                          "dataType" : "{http://hl7.org/fhir}Observation",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Observation",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Observation",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "277:27-277:31",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "INR",
                             "type" : "ValueSetRef"
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "278:9-279:69",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "278:15-278:48",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Greater",
                          "operand" : [ {
                             "name" : "ToQuantity",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "278:15-278:42",
                                "resultTypeName" : "{http://hl7.org/fhir}Quantity",
                                "strict" : false,
                                "type" : "As",
                                "operand" : {
                                   "locator" : "278:15-278:30",
                                   "path" : "value",
                                   "scope" : "INRLabTest",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                },
                                "asTypeSpecifier" : {
                                   "locator" : "278:35-278:42",
                                   "resultTypeName" : "{http://hl7.org/fhir}Quantity",
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "ToQuantity",
                             "operand" : {
                                "locator" : "278:46-278:48",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Decimal",
                                "valueType" : "{urn:hl7-org:elm-types:r1}Decimal",
                                "value" : "3.0",
                                "type" : "Literal"
                             }
                          } ]
                       }, {
                          "locator" : "279:17-279:69",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "In",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "279:17-279:33",
                                "resultTypeName" : "{http://hl7.org/fhir}ObservationStatus",
                                "path" : "status",
                                "scope" : "INRLabTest",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "279:38-279:69",
                             "type" : "List",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "element" : [ {
                                "locator" : "279:39-279:45",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "final",
                                "type" : "Literal"
                             }, {
                                "locator" : "279:47-279:55",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "amended",
                                "type" : "Literal"
                             }, {
                                "locator" : "279:58-279:68",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "corrected",
                                "type" : "Literal"
                             } ]
                          } ]
                       } ]
                    },
                    "return" : {
                       "locator" : "280:9-280:80",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Observation",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "280:16-280:80",
                          "resultTypeName" : "{http://hl7.org/fhir}Observation",
                          "classType" : "{http://hl7.org/fhir}Observation",
                          "type" : "Instance",
                          "element" : [ {
                             "name" : "id",
                             "value" : {
                                "locator" : "280:36-280:48",
                                "resultTypeName" : "{http://hl7.org/fhir}id",
                                "path" : "id",
                                "scope" : "INRLabTest",
                                "type" : "Property"
                             }
                          }, {
                             "name" : "effective",
                             "value" : {
                                "type" : "As",
                                "operand" : {
                                   "locator" : "280:62-280:78",
                                   "resultTypeName" : "{http://hl7.org/fhir}instant",
                                   "path" : "issued",
                                   "scope" : "INRLabTest",
                                   "type" : "Property"
                                },
                                "asTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             }
                          } ]
                       }
                    }
                 } ]
              }, {
                 "locator" : "282:9-289:7",
                 "type" : "Query",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Observation",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "source" : [ {
                    "locator" : "282:10-286:105",
                    "alias" : "AnticoagulantMedication",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "282:10-286:81",
                       "type" : "Union",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "282:11-285:72",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "282:11-284:10",
                             "type" : "Query",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "source" : [ {
                                "locator" : "282:13-282:88",
                                "alias" : "UnfractionatedHeparin",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "expression" : {
                                   "locator" : "282:13-282:66",
                                   "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                   "codeProperty" : "medication",
                                   "codeComparator" : "in",
                                   "type" : "Retrieve",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   },
                                   "codes" : {
                                      "locator" : "282:42-282:65",
                                      "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                      "name" : "Unfractionated Heparin",
                                      "type" : "ValueSetRef"
                                   }
                                }
                             } ],
                             "relationship" : [ ],
                             "where" : {
                                "locator" : "283:11-283:73",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "InValueSet",
                                "code" : {
                                   "name" : "ToConcept",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "locator" : "283:17-283:50",
                                      "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                      "path" : "route",
                                      "type" : "Property",
                                      "source" : {
                                         "locator" : "283:17-283:44",
                                         "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministration.Dosage",
                                         "path" : "dosage",
                                         "scope" : "UnfractionatedHeparin",
                                         "type" : "Property"
                                      }
                                   } ]
                                },
                                "valueset" : {
                                   "locator" : "283:55-283:73",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Intravenous route"
                                }
                             }
                          }, {
                             "locator" : "285:16-285:72",
                             "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                             "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                             "codeProperty" : "medication",
                             "codeComparator" : "in",
                             "type" : "Retrieve",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "codes" : {
                                "locator" : "285:45-285:71",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Direct Thrombin Inhibitor",
                                "type" : "ValueSetRef"
                             }
                          } ]
                       }, {
                          "locator" : "286:16-286:79",
                          "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                          "codeProperty" : "medication",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "286:45-286:78",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Glycoprotein IIb/IIIa Inhibitors",
                             "type" : "ValueSetRef"
                          }
                       } ]
                    }
                 } ],
                 "relationship" : [ ],
                 "where" : {
                    "locator" : "287:10-287:58",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "Equal",
                    "operand" : [ {
                       "name" : "ToString",
                       "libraryName" : "FHIRHelpers",
                       "type" : "FunctionRef",
                       "operand" : [ {
                          "locator" : "287:16-287:45",
                          "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                          "path" : "status",
                          "scope" : "AnticoagulantMedication",
                          "type" : "Property"
                       } ]
                    }, {
                       "locator" : "287:49-287:58",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                       "valueType" : "{urn:hl7-org:elm-types:r1}String",
                       "value" : "complete",
                       "type" : "Literal"
                    } ]
                 },
                 "return" : {
                    "locator" : "288:10-288:110",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Observation",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "expression" : {
                       "locator" : "288:17-288:110",
                       "resultTypeName" : "{http://hl7.org/fhir}Observation",
                       "classType" : "{http://hl7.org/fhir}Observation",
                       "type" : "Instance",
                       "element" : [ {
                          "name" : "id",
                          "value" : {
                             "locator" : "288:37-288:62",
                             "resultTypeName" : "{http://hl7.org/fhir}id",
                             "path" : "id",
                             "scope" : "AnticoagulantMedication",
                             "type" : "Property"
                          }
                       }, {
                          "name" : "effective",
                          "value" : {
                             "locator" : "288:76-288:108",
                             "path" : "effective",
                             "scope" : "AnticoagulantMedication",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          }
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "267:1-270:165",
           "name" : "Low Risk for VTE or Anticoagulant Administered From Day of Start of Hospitalization To Day After Admission",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "268:3-270:165",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "268:3-268:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "268:3-268:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "269:5-270:165",
                 "alias" : "VTERiskAssessment",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Observation",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "269:10-269:53",
                    "name" : "Is In Low Risk for VTE or On Anticoagulant",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Observation",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 },
                 "suchThat" : {
                    "locator" : "270:15-270:165",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "270:72-270:77",
                       "type" : "Start",
                       "operand" : {
                          "locator" : "270:15-270:70",
                          "name" : "Normalize Interval",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "270:43-270:69",
                             "path" : "effective",
                             "scope" : "VTERiskAssessment",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }
                    }, {
                       "locator" : "270:86-270:165",
                       "name" : "FromDayOfStartOfHospitalizationToDayAfterAdmission",
                       "libraryName" : "VTEICU",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "270:146-270:164",
                          "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                          "name" : "QualifyingEncounter",
                          "type" : "AliasRef"
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "291:1-298:27",
           "name" : "Low Risk for VTE or Anticoagulant Administered on Day of or Day After Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "292:3-298:27",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "293:6-293:103",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "293:6-293:83",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "294:6-294:73",
                 "alias" : "AnesthesiaProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "294:6-294:53",
                    "dataType" : "{http://hl7.org/fhir}Procedure",
                    "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                    "codeProperty" : "code",
                    "codeComparator" : "in",
                    "type" : "Retrieve",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "codes" : {
                       "locator" : "294:20-294:52",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "General or Neuraxial Anesthesia",
                       "type" : "ValueSetRef"
                    }
                 }
              }, {
                 "locator" : "295:6-295:67",
                 "alias" : "VTERiskAssessment",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Observation",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "295:6-295:49",
                    "name" : "Is In Low Risk for VTE or On Anticoagulant",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Observation",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "296:2-297:175",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "296:8-296:125",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "precision" : "Day",
                    "type" : "SameAs",
                    "operand" : [ {
                       "locator" : "296:67-296:70",
                       "type" : "End",
                       "operand" : {
                          "locator" : "296:8-296:65",
                          "name" : "Normalize Interval",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "296:36-296:64",
                             "path" : "performed",
                             "scope" : "AnesthesiaProcedure",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }
                    }, {
                       "locator" : "296:91-296:125",
                       "type" : "Add",
                       "operand" : [ {
                          "locator" : "296:91-296:125",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "name" : "ToInterval",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "296:100-296:125",
                                "resultTypeName" : "{http://hl7.org/fhir}Period",
                                "path" : "period",
                                "scope" : "QualifyingEncounter",
                                "type" : "Property"
                             } ]
                          }
                       }, {
                          "locator" : "296:72-296:76",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                          "value" : 1,
                          "unit" : "day",
                          "type" : "Quantity"
                       } ]
                    } ]
                 }, {
                    "locator" : "297:9-297:175",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "297:66-297:71",
                       "type" : "Start",
                       "operand" : {
                          "locator" : "297:9-297:64",
                          "name" : "Normalize Interval",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "297:37-297:63",
                             "path" : "effective",
                             "scope" : "VTERiskAssessment",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }
                    }, {
                       "locator" : "297:80-297:175",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "297:110-297:174",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "locator" : "297:117-297:174",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "297:145-297:173",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "locator" : "298:2-298:27",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "298:9-298:27",
                    "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                    "name" : "QualifyingEncounter",
                    "type" : "AliasRef"
                 }
              }
           }
        }, {
           "locator" : "263:1-265:92",
           "name" : "Encounter With Low Risk for VTE or Anticoagulant Administered",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "264:4-265:92",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "264:4-264:111",
                 "name" : "Low Risk for VTE or Anticoagulant Administered From Day of Start of Hospitalization To Day After Admission",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              }, {
                 "locator" : "265:12-265:92",
                 "name" : "Low Risk for VTE or Anticoagulant Administered on Day of or Day After Procedure",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              } ]
           }
        }, {
           "locator" : "314:1-339:5",
           "name" : "No VTE Prophylaxis Medication Administered or Ordered",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "name" : "{http://hl7.org/fhir}MedicationRequest",
                    "type" : "NamedTypeSpecifier"
                 }, {
                    "name" : "{http://hl7.org/fhir}MedicationAdministration",
                    "type" : "NamedTypeSpecifier"
                 } ]
              }
           },
           "expression" : {
              "locator" : "315:4-339:5",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "name" : "{http://hl7.org/fhir}MedicationRequest",
                       "type" : "NamedTypeSpecifier"
                    }, {
                       "name" : "{http://hl7.org/fhir}MedicationAdministration",
                       "type" : "NamedTypeSpecifier"
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "315:4-324:9",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "315:5-322:22",
                       "alias" : "MedicationAdm",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "315:5-322:8",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "315:7-317:99",
                             "type" : "Union",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "315:7-315:103",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "315:50-315:102",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Dose Unfractionated Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "317:6-317:99",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "317:49-317:98",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Molecular Weight Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          }, {
                             "type" : "Union",
                             "operand" : [ {
                                "locator" : "319:6-319:101",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "319:49-319:100",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Injectable Factor Xa Inhibitor for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "321:6-321:59",
                                "dataType" : "{http://hl7.org/fhir}MedicationAdministration",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "321:49-321:58",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Warfarin",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          } ]
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "323:8-323:46",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "Equal",
                       "operand" : [ {
                          "name" : "ToString",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "323:14-323:33",
                             "resultTypeName" : "{http://hl7.org/fhir}MedicationAdministrationStatus",
                             "path" : "status",
                             "scope" : "MedicationAdm",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "323:37-323:46",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                          "valueType" : "{urn:hl7-org:elm-types:r1}String",
                          "value" : "not-done",
                          "type" : "Literal"
                       } ]
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "326:5-339:5",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "source" : [ {
                       "locator" : "326:6-333:21",
                       "alias" : "MedicationOrder",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "326:6-333:5",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}MedicationRequest",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "326:8-328:91",
                             "type" : "Union",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}MedicationRequest",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "326:8-326:97",
                                "dataType" : "{http://hl7.org/fhir}MedicationRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "326:44-326:96",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Dose Unfractionated Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "328:5-328:91",
                                "dataType" : "{http://hl7.org/fhir}MedicationRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "328:41-328:90",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Low Molecular Weight Heparin for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          }, {
                             "type" : "Union",
                             "operand" : [ {
                                "locator" : "330:6-330:94",
                                "dataType" : "{http://hl7.org/fhir}MedicationRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "330:42-330:93",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Injectable Factor Xa Inhibitor for VTE Prophylaxis",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "332:6-332:52",
                                "dataType" : "{http://hl7.org/fhir}MedicationRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
                                "codeProperty" : "medication",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}MedicationRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "332:42-332:51",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Warfarin",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          } ]
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "334:6-335:64",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "334:12-334:47",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "IsTrue",
                          "operand" : {
                             "name" : "ToBoolean",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "334:12-334:39",
                                "resultTypeName" : "{http://hl7.org/fhir}boolean",
                                "path" : "doNotPerform",
                                "scope" : "MedicationOrder",
                                "type" : "Property"
                             } ]
                          }
                       }, {
                          "locator" : "335:13-335:64",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "In",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "335:13-335:34",
                                "resultTypeName" : "{http://hl7.org/fhir}MedicationRequestStatus",
                                "path" : "status",
                                "scope" : "MedicationOrder",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "335:39-335:64",
                             "type" : "List",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}String",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "element" : [ {
                                "locator" : "335:40-335:50",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "completed",
                                "type" : "Literal"
                             }, {
                                "locator" : "335:53-335:63",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "cancelled",
                                "type" : "Literal"
                             } ]
                          } ]
                       } ]
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "308:1-312:202",
           "name" : "No VTE Prophylaxis Medication Due to Medical Reason From Day of Start of Hospitalization To Day After Admission",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "309:5-312:202",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "309:5-309:102",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "309:5-309:82",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "310:8-312:202",
                 "alias" : "NoVTEMedication",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "310:13-310:67",
                    "name" : "No VTE Prophylaxis Medication Administered or Ordered",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 },
                 "suchThat" : {
                    "locator" : "311:17-312:202",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "311:17-311:101",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "AnyInValueSet",
                       "codes" : {
                          "type" : "Query",
                          "source" : [ {
                             "alias" : "X",
                             "expression" : {
                                "locator" : "311:17-311:81",
                                "type" : "Coalesce",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "311:26-311:53",
                                      "path" : "statusReason",
                                      "scope" : "NoVTEMedication",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         } ]
                                      }
                                   },
                                   "asTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                }, {
                                   "locator" : "311:55-311:80",
                                   "path" : "reasonCode",
                                   "scope" : "NoVTEMedication",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                } ]
                             }
                          } ],
                          "return" : {
                             "distinct" : false,
                             "expression" : {
                                "name" : "ToConcept",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "name" : "X",
                                   "type" : "AliasRef"
                                } ]
                             }
                          }
                       },
                       "valueset" : {
                          "locator" : "311:86-311:101",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Medical Reason"
                       }
                    }, {
                       "locator" : "312:14-312:202",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "In",
                       "operand" : [ {
                          "locator" : "312:14-312:114",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Coalesce",
                          "operand" : [ {
                             "name" : "ToDateTime",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "312:23-312:48",
                                "resultTypeName" : "{http://hl7.org/fhir}dateTime",
                                "path" : "authoredOn",
                                "scope" : "NoVTEMedication",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "312:51-312:113",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "locator" : "312:60-312:113",
                                "name" : "Normalize Interval",
                                "libraryName" : "Global",
                                "type" : "FunctionRef",
                                "resultTypeSpecifier" : {
                                   "type" : "IntervalTypeSpecifier",
                                   "pointType" : {
                                      "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "locator" : "312:88-312:112",
                                   "path" : "effective",
                                   "scope" : "NoVTEMedication",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             }
                          } ]
                       }, {
                          "locator" : "312:123-312:202",
                          "name" : "FromDayOfStartOfHospitalizationToDayAfterAdmission",
                          "libraryName" : "VTEICU",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "312:183-312:201",
                             "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                             "name" : "QualifyingEncounter",
                             "type" : "AliasRef"
                          } ]
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "359:1-360:68",
           "resultTypeName" : "{http://hl7.org/fhir}Extension",
           "name" : "GetStatusReason",
           "context" : "Patient",
           "accessLevel" : "Public",
           "type" : "FunctionDef",
           "expression" : {
              "locator" : "360:7-360:68",
              "resultTypeName" : "{http://hl7.org/fhir}Extension",
              "name" : "GetBaseExtension",
              "libraryName" : "Global",
              "type" : "FunctionRef",
              "operand" : [ {
                 "locator" : "360:31-360:43",
                 "resultTypeName" : "{http://hl7.org/fhir}ServiceRequest",
                 "name" : "requestReason",
                 "type" : "OperandRef"
              }, {
                 "locator" : "360:46-360:67",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                 "valueType" : "{urn:hl7-org:elm-types:r1}String",
                 "value" : "request-statusReason",
                 "type" : "Literal"
              } ]
           },
           "operand" : [ {
              "name" : "requestReason",
              "operandTypeSpecifier" : {
                 "locator" : "359:47-359:60",
                 "resultTypeName" : "{http://hl7.org/fhir}ServiceRequest",
                 "name" : "{http://hl7.org/fhir}ServiceRequest",
                 "type" : "NamedTypeSpecifier"
              }
           } ]
        }, {
           "locator" : "362:1-385:5",
           "name" : "No VTE Prophylaxis Device Applied or Ordered",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "id",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}id",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "requestStatusReason",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Extension",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "authoredOn",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}dateTime",
                          "type" : "NamedTypeSpecifier"
                       }
                    } ]
                 }, {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "id",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}id",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "requestStatusReason",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}CodeableConcept",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "authoredOn",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}base64Binary",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}boolean",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}canonical",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}code",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}date",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}dateTime",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}decimal",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}instant",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}integer",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}markdown",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}oid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}positiveInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}string",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}time",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}unsignedInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uri",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}url",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uuid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Address",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Age",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Annotation",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Attachment",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Coding",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactPoint",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Count",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Distance",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Duration",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}HumanName",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Identifier",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Money",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Period",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Quantity",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Range",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Ratio",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Reference",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}SampledData",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Signature",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Timing",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactDetail",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Contributor",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}DataRequirement",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Expression",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ParameterDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}RelatedArtifact",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}TriggerDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}UsageContext",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Dosage",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Meta",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    } ]
                 } ]
              }
           },
           "expression" : {
              "locator" : "363:3-385:5",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "type" : "TupleTypeSpecifier",
                       "element" : [ {
                          "name" : "id",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "requestStatusReason",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Extension",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "authoredOn",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}dateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       } ]
                    }, {
                       "type" : "TupleTypeSpecifier",
                       "element" : [ {
                          "name" : "id",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "requestStatusReason",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "authoredOn",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}base64Binary",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}boolean",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}canonical",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}code",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}date",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}decimal",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}instant",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}integer",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}markdown",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}oid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}positiveInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}string",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}time",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}unsignedInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uri",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}url",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uuid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Address",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Age",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Annotation",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Attachment",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Coding",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactPoint",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Count",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Distance",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Duration",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}HumanName",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Identifier",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Money",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Period",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Quantity",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Range",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Ratio",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Reference",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}SampledData",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Signature",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Timing",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactDetail",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Contributor",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}DataRequirement",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Expression",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}UsageContext",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Dosage",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Meta",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       } ]
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "363:3-373:5",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }
                    },
                    "source" : [ {
                       "locator" : "363:4-367:17",
                       "alias" : "DeviceOrder",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}ServiceRequest",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "363:4-367:5",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}ServiceRequest",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "364:5-365:80",
                             "type" : "Union",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}ServiceRequest",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "364:5-364:49",
                                "dataType" : "{http://hl7.org/fhir}ServiceRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}ServiceRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "364:24-364:48",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Venous foot pumps (VFP)",
                                   "type" : "ValueSetRef"
                                }
                             }, {
                                "locator" : "365:11-365:80",
                                "dataType" : "{http://hl7.org/fhir}ServiceRequest",
                                "templateId" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
                                "codeProperty" : "code",
                                "codeComparator" : "in",
                                "type" : "Retrieve",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}ServiceRequest",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "codes" : {
                                   "locator" : "365:30-365:79",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Intermittent pneumatic compression devices (IPC)",
                                   "type" : "ValueSetRef"
                                }
                             } ]
                          }, {
                             "locator" : "366:11-366:69",
                             "dataType" : "{http://hl7.org/fhir}ServiceRequest",
                             "templateId" : "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
                             "codeProperty" : "code",
                             "codeComparator" : "in",
                             "type" : "Retrieve",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}ServiceRequest",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "codes" : {
                                "locator" : "366:30-366:68",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Graduated compression stockings (GCS)",
                                "type" : "ValueSetRef"
                             }
                          } ]
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "368:5-371:44",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "368:11-368:42",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Equal",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "368:11-368:28",
                                "resultTypeName" : "{http://hl7.org/fhir}ServiceRequestStatus",
                                "path" : "status",
                                "scope" : "DeviceOrder",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "368:32-368:42",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "completed",
                             "type" : "Literal"
                          } ]
                       }, {
                          "locator" : "371:13-371:44",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "IsTrue",
                          "operand" : {
                             "name" : "ToBoolean",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "371:13-371:36",
                                "resultTypeName" : "{http://hl7.org/fhir}boolean",
                                "path" : "doNotPerform",
                                "scope" : "DeviceOrder",
                                "type" : "Property"
                             } ]
                          }
                       } ]
                    },
                    "return" : {
                       "locator" : "372:5-372:118",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }
                       },
                       "expression" : {
                          "locator" : "372:12-372:118",
                          "type" : "Tuple",
                          "resultTypeSpecifier" : {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          },
                          "element" : [ {
                             "name" : "id",
                             "value" : {
                                "locator" : "372:17-372:30",
                                "resultTypeName" : "{http://hl7.org/fhir}id",
                                "path" : "id",
                                "scope" : "DeviceOrder",
                                "type" : "Property"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "value" : {
                                "locator" : "372:54-372:81",
                                "resultTypeName" : "{http://hl7.org/fhir}Extension",
                                "name" : "GetStatusReason",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "372:70-372:80",
                                   "resultTypeName" : "{http://hl7.org/fhir}ServiceRequest",
                                   "name" : "DeviceOrder",
                                   "type" : "AliasRef"
                                } ]
                             }
                          }, {
                             "name" : "authoredOn",
                             "value" : {
                                "locator" : "372:96-372:117",
                                "resultTypeName" : "{http://hl7.org/fhir}dateTime",
                                "path" : "authoredOn",
                                "scope" : "DeviceOrder",
                                "type" : "Property"
                             }
                          } ]
                       }
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "375:5-385:5",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }
                    },
                    "source" : [ {
                       "locator" : "376:7-376:55",
                       "alias" : "DeviceApplied",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Procedure",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "expression" : {
                          "locator" : "376:7-376:41",
                          "dataType" : "{http://hl7.org/fhir}Procedure",
                          "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                          "codeProperty" : "code",
                          "codeComparator" : "in",
                          "type" : "Retrieve",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Procedure",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "codes" : {
                             "locator" : "376:21-376:40",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Device Application",
                             "type" : "ValueSetRef"
                          }
                       }
                    } ],
                    "let" : [ {
                       "locator" : "377:11-377:90",
                       "identifier" : "DeviceNotDoneTiming",
                       "resultTypeSpecifier" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}base64Binary",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}boolean",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}canonical",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}code",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}date",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}dateTime",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}decimal",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}instant",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}integer",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}markdown",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}oid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}positiveInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}string",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}time",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}unsignedInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uri",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}url",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uuid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Address",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Age",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Annotation",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Attachment",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Coding",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactPoint",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Count",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Distance",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Duration",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}HumanName",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Identifier",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Money",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Period",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Quantity",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Range",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Ratio",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Reference",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}SampledData",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Signature",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Timing",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactDetail",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Contributor",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}DataRequirement",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Expression",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ParameterDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}RelatedArtifact",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}TriggerDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}UsageContext",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Dosage",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Meta",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       },
                       "expression" : {
                          "locator" : "377:32-377:90",
                          "path" : "value",
                          "type" : "Property",
                          "resultTypeSpecifier" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}base64Binary",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}boolean",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}canonical",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}code",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}date",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}decimal",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}instant",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}integer",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}markdown",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}oid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}positiveInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}string",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}time",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}unsignedInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uri",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}url",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uuid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Address",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Age",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Annotation",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Attachment",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Coding",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactPoint",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Count",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Distance",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Duration",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}HumanName",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Identifier",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Money",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Period",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Quantity",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Range",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Ratio",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Reference",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}SampledData",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Signature",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Timing",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactDetail",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Contributor",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}DataRequirement",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Expression",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}UsageContext",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Dosage",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Meta",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          },
                          "source" : {
                             "locator" : "377:32-377:84",
                             "resultTypeName" : "{http://hl7.org/fhir}Extension",
                             "name" : "GetExtension",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "377:52-377:64",
                                "resultTypeName" : "{http://hl7.org/fhir}Procedure",
                                "name" : "DeviceApplied",
                                "type" : "AliasRef"
                             }, {
                                "locator" : "377:67-377:83",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                                "valueType" : "{urn:hl7-org:elm-types:r1}String",
                                "value" : "qicore-recorded",
                                "type" : "Literal"
                             } ]
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "378:7-382:47",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "378:13-381:13",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Or",
                          "operand" : [ {
                             "locator" : "378:14-379:66",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "Or",
                             "operand" : [ {
                                "locator" : "378:14-378:89",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "AnyInValueSet",
                                "codes" : {
                                   "type" : "Query",
                                   "source" : [ {
                                      "alias" : "X",
                                      "expression" : {
                                         "locator" : "378:14-378:35",
                                         "path" : "usedCode",
                                         "scope" : "DeviceApplied",
                                         "type" : "Property",
                                         "resultTypeSpecifier" : {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         }
                                      }
                                   } ],
                                   "return" : {
                                      "distinct" : false,
                                      "expression" : {
                                         "name" : "ToConcept",
                                         "libraryName" : "FHIRHelpers",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "name" : "X",
                                            "type" : "AliasRef"
                                         } ]
                                      }
                                   }
                                },
                                "valueset" : {
                                   "locator" : "378:40-378:89",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Intermittent pneumatic compression devices (IPC)"
                                }
                             }, {
                                "locator" : "379:16-379:66",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                                "type" : "AnyInValueSet",
                                "codes" : {
                                   "type" : "Query",
                                   "source" : [ {
                                      "alias" : "X",
                                      "expression" : {
                                         "locator" : "379:16-379:37",
                                         "path" : "usedCode",
                                         "scope" : "DeviceApplied",
                                         "type" : "Property",
                                         "resultTypeSpecifier" : {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         }
                                      }
                                   } ],
                                   "return" : {
                                      "distinct" : false,
                                      "expression" : {
                                         "name" : "ToConcept",
                                         "libraryName" : "FHIRHelpers",
                                         "type" : "FunctionRef",
                                         "operand" : [ {
                                            "name" : "X",
                                            "type" : "AliasRef"
                                         } ]
                                      }
                                   }
                                },
                                "valueset" : {
                                   "locator" : "379:42-379:66",
                                   "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                   "name" : "Venous foot pumps (VFP)"
                                }
                             } ]
                          }, {
                             "locator" : "380:16-380:80",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                             "type" : "AnyInValueSet",
                             "codes" : {
                                "type" : "Query",
                                "source" : [ {
                                   "alias" : "X",
                                   "expression" : {
                                      "locator" : "380:16-380:37",
                                      "path" : "usedCode",
                                      "scope" : "DeviceApplied",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }
                                   }
                                } ],
                                "return" : {
                                   "distinct" : false,
                                   "expression" : {
                                      "name" : "ToConcept",
                                      "libraryName" : "FHIRHelpers",
                                      "type" : "FunctionRef",
                                      "operand" : [ {
                                         "name" : "X",
                                         "type" : "AliasRef"
                                      } ]
                                   }
                                }
                             },
                             "valueset" : {
                                "locator" : "380:42-380:80",
                                "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                                "name" : "Graduated compression stockings (GCS)"
                             }
                          } ]
                       }, {
                          "locator" : "382:15-382:47",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Equal",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "382:15-382:34",
                                "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                                "path" : "status",
                                "scope" : "DeviceApplied",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "382:38-382:47",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "not-done",
                             "type" : "Literal"
                          } ]
                       } ]
                    },
                    "return" : {
                       "locator" : "383:10-383:120",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       },
                       "expression" : {
                          "locator" : "383:17-383:120",
                          "type" : "Tuple",
                          "resultTypeSpecifier" : {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          },
                          "element" : [ {
                             "name" : "id",
                             "value" : {
                                "locator" : "383:22-383:37",
                                "resultTypeName" : "{http://hl7.org/fhir}id",
                                "path" : "id",
                                "scope" : "DeviceApplied",
                                "type" : "Property"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "value" : {
                                "locator" : "383:61-383:86",
                                "resultTypeName" : "{http://hl7.org/fhir}CodeableConcept",
                                "path" : "statusReason",
                                "scope" : "DeviceApplied",
                                "type" : "Property"
                             }
                          }, {
                             "name" : "authoredOn",
                             "value" : {
                                "locator" : "383:101-383:119",
                                "name" : "DeviceNotDoneTiming",
                                "type" : "QueryLetRef",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             }
                          } ]
                       }
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "352:1-356:123",
           "name" : "No VTE Prophylaxis Device Due to Medical Reason From Day of Start of Hospitalization To Day After Admission",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "353:3-356:123",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "353:3-353:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "353:3-353:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "354:4-356:123",
                 "alias" : "NoVTEDevice",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "354:9-354:54",
                    "name" : "No VTE Prophylaxis Device Applied or Ordered",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          } ]
                       }
                    }
                 },
                 "suchThat" : {
                    "locator" : "355:17-356:123",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "355:17-355:67",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "InValueSet",
                       "code" : {
                          "name" : "ToConcept",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "asType" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "As",
                             "operand" : {
                                "locator" : "355:17-355:47",
                                "path" : "requestStatusReason",
                                "scope" : "NoVTEDevice",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}Extension",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             }
                          } ]
                       },
                       "valueset" : {
                          "locator" : "355:52-355:67",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Medical Reason"
                       }
                    }, {
                       "locator" : "356:14-356:123",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "IncludedIn",
                       "operand" : [ {
                          "name" : "ToInterval",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "asType" : "{http://hl7.org/fhir}Period",
                             "type" : "As",
                             "operand" : {
                                "locator" : "356:14-356:35",
                                "path" : "authoredOn",
                                "scope" : "NoVTEDevice",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             }
                          } ]
                       }, {
                          "locator" : "356:44-356:123",
                          "name" : "FromDayOfStartOfHospitalizationToDayAfterAdmission",
                          "libraryName" : "VTEICU",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "356:104-356:122",
                             "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                             "name" : "QualifyingEncounter",
                             "type" : "AliasRef"
                          } ]
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "341:1-350:28",
           "name" : "No VTE Prophylaxis Medication Due to Medical Reason on Day of or Day After Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "342:2-350:28",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "343:5-343:102",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "343:5-343:82",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "344:5-344:72",
                 "alias" : "AnesthesiaProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "344:5-344:52",
                    "dataType" : "{http://hl7.org/fhir}Procedure",
                    "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                    "codeProperty" : "code",
                    "codeComparator" : "in",
                    "type" : "Retrieve",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "codes" : {
                       "locator" : "344:19-344:51",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "General or Neuraxial Anesthesia",
                       "type" : "ValueSetRef"
                    }
                 }
              }, {
                 "locator" : "345:5-345:75",
                 "alias" : "NoVTEMedication",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "345:5-345:59",
                    "name" : "No VTE Prophylaxis Medication Administered or Ordered",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "346:2-349:212",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "346:8-348:125",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "346:8-347:47",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "346:8-346:92",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "AnyInValueSet",
                          "codes" : {
                             "type" : "Query",
                             "source" : [ {
                                "alias" : "X",
                                "expression" : {
                                   "locator" : "346:8-346:72",
                                   "type" : "Coalesce",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   },
                                   "operand" : [ {
                                      "type" : "As",
                                      "operand" : {
                                         "locator" : "346:17-346:44",
                                         "path" : "statusReason",
                                         "scope" : "NoVTEMedication",
                                         "type" : "Property",
                                         "resultTypeSpecifier" : {
                                            "type" : "ChoiceTypeSpecifier",
                                            "choice" : [ {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }, {
                                               "type" : "ListTypeSpecifier",
                                               "elementType" : {
                                                  "name" : "{http://hl7.org/fhir}CodeableConcept",
                                                  "type" : "NamedTypeSpecifier"
                                               }
                                            } ]
                                         }
                                      },
                                      "asTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }
                                   }, {
                                      "locator" : "346:46-346:71",
                                      "path" : "reasonCode",
                                      "scope" : "NoVTEMedication",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ListTypeSpecifier",
                                         "elementType" : {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }
                                      }
                                   } ]
                                }
                             } ],
                             "return" : {
                                "distinct" : false,
                                "expression" : {
                                   "name" : "ToConcept",
                                   "libraryName" : "FHIRHelpers",
                                   "type" : "FunctionRef",
                                   "operand" : [ {
                                      "name" : "X",
                                      "type" : "AliasRef"
                                   } ]
                                }
                             }
                          },
                          "valueset" : {
                             "locator" : "346:77-346:92",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Medical Reason"
                          }
                       }, {
                          "locator" : "347:8-347:47",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Equal",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "347:8-347:33",
                                "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                                "path" : "status",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "347:37-347:47",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "completed",
                             "type" : "Literal"
                          } ]
                       } ]
                    }, {
                       "locator" : "348:8-348:125",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "precision" : "Day",
                       "type" : "SameAs",
                       "operand" : [ {
                          "locator" : "348:67-348:70",
                          "type" : "End",
                          "operand" : {
                             "locator" : "348:8-348:65",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "348:36-348:64",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "348:91-348:125",
                          "type" : "Add",
                          "operand" : [ {
                             "locator" : "348:91-348:125",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "348:100-348:125",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "QualifyingEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "348:72-348:76",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                             "value" : 1,
                             "unit" : "day",
                             "type" : "Quantity"
                          } ]
                       } ]
                    } ]
                 }, {
                    "locator" : "349:8-349:212",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "349:8-349:108",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                       "type" : "Coalesce",
                       "operand" : [ {
                          "name" : "ToDateTime",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "locator" : "349:17-349:42",
                             "resultTypeName" : "{http://hl7.org/fhir}dateTime",
                             "path" : "authoredOn",
                             "scope" : "NoVTEMedication",
                             "type" : "Property"
                          } ]
                       }, {
                          "locator" : "349:45-349:107",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "349:54-349:107",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "349:82-349:106",
                                "path" : "effective",
                                "scope" : "NoVTEMedication",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    }, {
                       "locator" : "349:117-349:212",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "349:147-349:211",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "locator" : "349:154-349:211",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "349:182-349:210",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "locator" : "350:3-350:28",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "350:10-350:28",
                    "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                    "name" : "QualifyingEncounter",
                    "type" : "AliasRef"
                 }
              }
           }
        }, {
           "locator" : "387:1-396:28",
           "name" : "No VTE Prophylaxis Device Due to Medical Reason on Day of or Day After Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "388:3-396:28",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "389:5-389:102",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "389:5-389:82",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "390:5-390:72",
                 "alias" : "AnesthesiaProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "390:5-390:52",
                    "dataType" : "{http://hl7.org/fhir}Procedure",
                    "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                    "codeProperty" : "code",
                    "codeComparator" : "in",
                    "type" : "Retrieve",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "codes" : {
                       "locator" : "390:19-390:51",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "General or Neuraxial Anesthesia",
                       "type" : "ValueSetRef"
                    }
                 }
              }, {
                 "locator" : "391:5-391:62",
                 "alias" : "NoVTEDevice",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "391:5-391:50",
                    "name" : "No VTE Prophylaxis Device Applied or Ordered",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          } ]
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "392:3-395:136",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "392:10-394:126",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "And",
                    "operand" : [ {
                       "locator" : "392:10-393:50",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "And",
                       "operand" : [ {
                          "locator" : "392:10-392:60",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "InValueSet",
                          "code" : {
                             "name" : "ToConcept",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "asType" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "As",
                                "operand" : {
                                   "locator" : "392:10-392:40",
                                   "path" : "requestStatusReason",
                                   "scope" : "NoVTEDevice",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}Extension",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             } ]
                          },
                          "valueset" : {
                             "locator" : "392:45-392:60",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                             "name" : "Medical Reason"
                          }
                       }, {
                          "locator" : "393:11-393:50",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                          "type" : "Equal",
                          "operand" : [ {
                             "name" : "ToString",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "393:11-393:36",
                                "resultTypeName" : "{http://hl7.org/fhir}ProcedureStatus",
                                "path" : "status",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property"
                             } ]
                          }, {
                             "locator" : "393:40-393:50",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}String",
                             "valueType" : "{urn:hl7-org:elm-types:r1}String",
                             "value" : "completed",
                             "type" : "Literal"
                          } ]
                       } ]
                    }, {
                       "locator" : "394:9-394:126",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "precision" : "Day",
                       "type" : "SameAs",
                       "operand" : [ {
                          "locator" : "394:68-394:71",
                          "type" : "End",
                          "operand" : {
                             "locator" : "394:9-394:66",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "394:37-394:65",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "locator" : "394:92-394:126",
                          "type" : "Add",
                          "operand" : [ {
                             "locator" : "394:92-394:126",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Start",
                             "operand" : {
                                "name" : "ToInterval",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "locator" : "394:101-394:126",
                                   "resultTypeName" : "{http://hl7.org/fhir}Period",
                                   "path" : "period",
                                   "scope" : "QualifyingEncounter",
                                   "type" : "Property"
                                } ]
                             }
                          }, {
                             "locator" : "394:73-394:77",
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                             "value" : 1,
                             "unit" : "day",
                             "type" : "Quantity"
                          } ]
                       } ]
                    } ]
                 }, {
                    "locator" : "395:11-395:136",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "IncludedIn",
                    "operand" : [ {
                       "name" : "ToInterval",
                       "libraryName" : "FHIRHelpers",
                       "type" : "FunctionRef",
                       "operand" : [ {
                          "asType" : "{http://hl7.org/fhir}Period",
                          "type" : "As",
                          "operand" : {
                             "locator" : "395:11-395:32",
                             "path" : "authoredOn",
                             "scope" : "NoVTEDevice",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          }
                       } ]
                    }, {
                       "locator" : "395:41-395:136",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "395:71-395:135",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "locator" : "395:78-395:135",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "395:106-395:134",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "locator" : "396:3-396:28",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "396:10-396:28",
                    "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                    "name" : "QualifyingEncounter",
                    "type" : "AliasRef"
                 }
              }
           }
        }, {
           "locator" : "300:1-306:8",
           "name" : "Encounter With No VTE Prophylaxis Due to Medical Reason",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "301:4-306:8",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "301:4-303:4",
                 "type" : "Intersect",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "operand" : [ {
                    "locator" : "301:6-301:118",
                    "name" : "No VTE Prophylaxis Medication Due to Medical Reason From Day of Start of Hospitalization To Day After Admission",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }, {
                    "locator" : "302:16-302:124",
                    "name" : "No VTE Prophylaxis Device Due to Medical Reason From Day of Start of Hospitalization To Day After Admission",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 } ]
              }, {
                 "locator" : "304:10-306:8",
                 "type" : "Intersect",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "operand" : [ {
                    "locator" : "304:12-304:97",
                    "name" : "No VTE Prophylaxis Medication Due to Medical Reason on Day of or Day After Procedure",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }, {
                    "locator" : "305:18-305:99",
                    "name" : "No VTE Prophylaxis Device Due to Medical Reason on Day of or Day After Procedure",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 } ]
              } ]
           }
        }, {
           "locator" : "408:1-414:9",
           "name" : "No VTE Prophylaxis Medication or Device Due to Patient Refusal",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "type" : "ChoiceTypeSpecifier",
                 "choice" : [ {
                    "name" : "{http://hl7.org/fhir}MedicationRequest",
                    "type" : "NamedTypeSpecifier"
                 }, {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "id",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}id",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "requestStatusReason",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Extension",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "authoredOn",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}dateTime",
                          "type" : "NamedTypeSpecifier"
                       }
                    } ]
                 }, {
                    "type" : "TupleTypeSpecifier",
                    "element" : [ {
                       "name" : "id",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}id",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "requestStatusReason",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}CodeableConcept",
                          "type" : "NamedTypeSpecifier"
                       }
                    }, {
                       "name" : "authoredOn",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}base64Binary",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}boolean",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}canonical",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}code",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}date",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}dateTime",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}decimal",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}instant",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}integer",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}markdown",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}oid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}positiveInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}string",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}time",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}unsignedInt",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uri",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}url",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}uuid",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Address",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Age",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Annotation",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Attachment",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Coding",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactPoint",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Count",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Distance",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Duration",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}HumanName",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Identifier",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Money",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Period",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Quantity",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Range",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Ratio",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Reference",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}SampledData",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Signature",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Timing",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ContactDetail",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Contributor",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}DataRequirement",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Expression",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}ParameterDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}RelatedArtifact",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}TriggerDefinition",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}UsageContext",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Dosage",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}Meta",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    } ]
                 }, {
                    "name" : "{http://hl7.org/fhir}MedicationAdministration",
                    "type" : "NamedTypeSpecifier"
                 } ]
              }
           },
           "expression" : {
              "locator" : "409:5-414:9",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "type" : "ChoiceTypeSpecifier",
                    "choice" : [ {
                       "name" : "{http://hl7.org/fhir}MedicationRequest",
                       "type" : "NamedTypeSpecifier"
                    }, {
                       "type" : "TupleTypeSpecifier",
                       "element" : [ {
                          "name" : "id",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "requestStatusReason",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Extension",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "authoredOn",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}dateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       } ]
                    }, {
                       "type" : "TupleTypeSpecifier",
                       "element" : [ {
                          "name" : "id",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}id",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "requestStatusReason",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "NamedTypeSpecifier"
                          }
                       }, {
                          "name" : "authoredOn",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}base64Binary",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}boolean",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}canonical",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}code",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}date",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}decimal",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}instant",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}integer",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}markdown",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}oid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}positiveInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}string",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}time",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}unsignedInt",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uri",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}url",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}uuid",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Address",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Age",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Annotation",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Attachment",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Coding",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactPoint",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Count",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Distance",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Duration",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}HumanName",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Identifier",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Money",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Period",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Quantity",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Range",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Ratio",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Reference",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}SampledData",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Signature",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Timing",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ContactDetail",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Contributor",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}DataRequirement",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Expression",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}UsageContext",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Dosage",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}Meta",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       } ]
                    }, {
                       "name" : "{http://hl7.org/fhir}MedicationAdministration",
                       "type" : "NamedTypeSpecifier"
                    } ]
                 }
              },
              "operand" : [ {
                 "type" : "As",
                 "operand" : {
                    "locator" : "409:5-411:5",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    },
                    "source" : [ {
                       "locator" : "409:7-409:77",
                       "alias" : "NoVTEMedication",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "name" : "{http://hl7.org/fhir}MedicationRequest",
                                "type" : "NamedTypeSpecifier"
                             }, {
                                "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                "type" : "NamedTypeSpecifier"
                             } ]
                          }
                       },
                       "expression" : {
                          "locator" : "409:7-409:61",
                          "name" : "No VTE Prophylaxis Medication Administered or Ordered",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}MedicationRequest",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}MedicationAdministration",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "410:9-410:100",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "AnyInValueSet",
                       "codes" : {
                          "type" : "Query",
                          "source" : [ {
                             "alias" : "X",
                             "expression" : {
                                "locator" : "410:15-410:79",
                                "type" : "Coalesce",
                                "resultTypeSpecifier" : {
                                   "type" : "ListTypeSpecifier",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                },
                                "operand" : [ {
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "410:24-410:51",
                                      "path" : "statusReason",
                                      "scope" : "NoVTEMedication",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "type" : "ListTypeSpecifier",
                                            "elementType" : {
                                               "name" : "{http://hl7.org/fhir}CodeableConcept",
                                               "type" : "NamedTypeSpecifier"
                                            }
                                         } ]
                                      }
                                   },
                                   "asTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                }, {
                                   "locator" : "410:53-410:78",
                                   "path" : "reasonCode",
                                   "scope" : "NoVTEMedication",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ListTypeSpecifier",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }
                                } ]
                             }
                          } ],
                          "return" : {
                             "distinct" : false,
                             "expression" : {
                                "name" : "ToConcept",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "name" : "X",
                                   "type" : "AliasRef"
                                } ]
                             }
                          }
                       },
                       "valueset" : {
                          "locator" : "410:84-410:100",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Patient Refusal"
                       }
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              }, {
                 "type" : "As",
                 "operand" : {
                    "locator" : "412:9-414:9",
                    "type" : "Query",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          } ]
                       }
                    },
                    "source" : [ {
                       "locator" : "412:10-412:67",
                       "alias" : "NoVTEDevice",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "type" : "ChoiceTypeSpecifier",
                             "choice" : [ {
                                "type" : "TupleTypeSpecifier",
                                "element" : [ {
                                   "name" : "id",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "requestStatusReason",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}Extension",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "authoredOn",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                } ]
                             }, {
                                "type" : "TupleTypeSpecifier",
                                "element" : [ {
                                   "name" : "id",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "requestStatusReason",
                                   "elementType" : {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }
                                }, {
                                   "name" : "authoredOn",
                                   "elementType" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                } ]
                             } ]
                          }
                       },
                       "expression" : {
                          "locator" : "412:10-412:55",
                          "name" : "No VTE Prophylaxis Device Applied or Ordered",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "type" : "TupleTypeSpecifier",
                                   "element" : [ {
                                      "name" : "id",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }, {
                                      "name" : "requestStatusReason",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}Extension",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }, {
                                      "name" : "authoredOn",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   } ]
                                }, {
                                   "type" : "TupleTypeSpecifier",
                                   "element" : [ {
                                      "name" : "id",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }, {
                                      "name" : "requestStatusReason",
                                      "elementType" : {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }
                                   }, {
                                      "name" : "authoredOn",
                                      "elementType" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   } ]
                                } ]
                             }
                          }
                       }
                    } ],
                    "relationship" : [ ],
                    "where" : {
                       "locator" : "413:12-413:69",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                       "type" : "InValueSet",
                       "code" : {
                          "name" : "ToConcept",
                          "libraryName" : "FHIRHelpers",
                          "type" : "FunctionRef",
                          "operand" : [ {
                             "asType" : "{http://hl7.org/fhir}CodeableConcept",
                             "type" : "As",
                             "operand" : {
                                "locator" : "413:18-413:48",
                                "path" : "requestStatusReason",
                                "scope" : "NoVTEDevice",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}Extension",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             }
                          } ]
                       },
                       "valueset" : {
                          "locator" : "413:53-413:69",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                          "name" : "Patient Refusal"
                       }
                    }
                 },
                 "asTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 }
              } ]
           }
        }, {
           "locator" : "402:1-406:96",
           "name" : "No VTE Prophylaxis Due to Patient Refusal From Day of Start of Hospitalization To Day After Admission",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "403:3-406:96",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "403:3-403:100",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "403:3-403:80",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              } ],
              "relationship" : [ {
                 "locator" : "404:3-406:96",
                 "alias" : "PatientRefusal",
                 "type" : "With",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "404:8-404:71",
                    "name" : "No VTE Prophylaxis Medication or Device Due to Patient Refusal",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 },
                 "suchThat" : {
                    "locator" : "405:14-406:96",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "405:14-405:112",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                       "type" : "Coalesce",
                       "operand" : [ {
                          "locator" : "405:23-405:84",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "405:32-405:84",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "405:60-405:83",
                                "path" : "effective",
                                "scope" : "PatientRefusal",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "type" : "Case",
                          "caseItem" : [ {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}dateTime",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "405:87-405:111",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "405:87-405:111",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          }, {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}dateTime",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "405:87-405:111",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "405:87-405:111",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          }, {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}instant",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "405:87-405:111",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}instant",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "405:87-405:111",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          } ],
                          "else" : {
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Null"
                          }
                       } ]
                    }, {
                       "locator" : "406:17-406:96",
                       "name" : "FromDayOfStartOfHospitalizationToDayAfterAdmission",
                       "libraryName" : "VTEICU",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "406:77-406:95",
                          "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                          "name" : "QualifyingEncounter",
                          "type" : "AliasRef"
                       } ]
                    } ]
                 }
              } ]
           }
        }, {
           "locator" : "416:1-424:27",
           "name" : "No VTE Prophylaxis Due to Patient Refusal on Day of or Day After Procedure",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "417:3-424:27",
              "type" : "Query",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "source" : [ {
                 "locator" : "418:6-418:103",
                 "alias" : "QualifyingEncounter",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "418:6-418:83",
                    "name" : "Encounter With Age Range and Without VTE Diagnosis or Obstetrical Conditions",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    }
                 }
              }, {
                 "locator" : "419:6-419:73",
                 "alias" : "AnesthesiaProcedure",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Procedure",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "419:6-419:53",
                    "dataType" : "{http://hl7.org/fhir}Procedure",
                    "templateId" : "http://hl7.org/fhir/StructureDefinition/Procedure",
                    "codeProperty" : "code",
                    "codeComparator" : "in",
                    "type" : "Retrieve",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Procedure",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "codes" : {
                       "locator" : "419:20-419:52",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}ValueSet",
                       "name" : "General or Neuraxial Anesthesia",
                       "type" : "ValueSetRef"
                    }
                 }
              }, {
                 "locator" : "420:6-420:84",
                 "alias" : "PatientRefusal",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "type" : "ChoiceTypeSpecifier",
                       "choice" : [ {
                          "name" : "{http://hl7.org/fhir}MedicationRequest",
                          "type" : "NamedTypeSpecifier"
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Extension",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}dateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          } ]
                       }, {
                          "type" : "TupleTypeSpecifier",
                          "element" : [ {
                             "name" : "id",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}id",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "requestStatusReason",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}CodeableConcept",
                                "type" : "NamedTypeSpecifier"
                             }
                          }, {
                             "name" : "authoredOn",
                             "elementType" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}base64Binary",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}boolean",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}canonical",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}code",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}date",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}decimal",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}instant",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}integer",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}markdown",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}oid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}positiveInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}time",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}unsignedInt",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uri",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}url",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}uuid",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Address",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Annotation",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Attachment",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Coding",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactPoint",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Count",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Distance",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Duration",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}HumanName",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Identifier",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Money",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Quantity",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Ratio",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Reference",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}SampledData",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Signature",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Timing",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ContactDetail",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Contributor",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}DataRequirement",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Expression",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}UsageContext",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Dosage",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Meta",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }, {
                          "name" : "{http://hl7.org/fhir}MedicationAdministration",
                          "type" : "NamedTypeSpecifier"
                       } ]
                    }
                 },
                 "expression" : {
                    "locator" : "420:6-420:69",
                    "name" : "No VTE Prophylaxis Medication or Device Due to Patient Refusal",
                    "type" : "ExpressionRef",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "type" : "ChoiceTypeSpecifier",
                          "choice" : [ {
                             "name" : "{http://hl7.org/fhir}MedicationRequest",
                             "type" : "NamedTypeSpecifier"
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Extension",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             } ]
                          }, {
                             "type" : "TupleTypeSpecifier",
                             "element" : [ {
                                "name" : "id",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}id",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "requestStatusReason",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}CodeableConcept",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }, {
                                "name" : "authoredOn",
                                "elementType" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}base64Binary",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}boolean",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}canonical",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}code",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}date",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}decimal",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}id",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}instant",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}integer",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}markdown",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}oid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}positiveInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}time",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}unsignedInt",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uri",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}url",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}uuid",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Address",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Annotation",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Attachment",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}CodeableConcept",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Coding",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactPoint",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Count",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Distance",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Duration",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}HumanName",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Identifier",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Money",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Quantity",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Ratio",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Reference",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}SampledData",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Signature",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Timing",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ContactDetail",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Contributor",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}DataRequirement",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Expression",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}UsageContext",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Dosage",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Meta",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }, {
                             "name" : "{http://hl7.org/fhir}MedicationAdministration",
                             "type" : "NamedTypeSpecifier"
                          } ]
                       }
                    }
                 }
              } ],
              "relationship" : [ ],
              "where" : {
                 "locator" : "421:2-423:116",
                 "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                 "type" : "And",
                 "operand" : [ {
                    "locator" : "421:8-421:125",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "precision" : "Day",
                    "type" : "SameAs",
                    "operand" : [ {
                       "locator" : "421:67-421:70",
                       "type" : "End",
                       "operand" : {
                          "locator" : "421:8-421:65",
                          "name" : "Normalize Interval",
                          "libraryName" : "Global",
                          "type" : "FunctionRef",
                          "resultTypeSpecifier" : {
                             "type" : "IntervalTypeSpecifier",
                             "pointType" : {
                                "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "421:36-421:64",
                             "path" : "performed",
                             "scope" : "AnesthesiaProcedure",
                             "type" : "Property",
                             "resultTypeSpecifier" : {
                                "type" : "ChoiceTypeSpecifier",
                                "choice" : [ {
                                   "name" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Period",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}string",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Age",
                                   "type" : "NamedTypeSpecifier"
                                }, {
                                   "name" : "{http://hl7.org/fhir}Range",
                                   "type" : "NamedTypeSpecifier"
                                } ]
                             }
                          } ]
                       }
                    }, {
                       "locator" : "421:91-421:125",
                       "type" : "Add",
                       "operand" : [ {
                          "locator" : "421:91-421:125",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "name" : "ToInterval",
                             "libraryName" : "FHIRHelpers",
                             "type" : "FunctionRef",
                             "operand" : [ {
                                "locator" : "421:100-421:125",
                                "resultTypeName" : "{http://hl7.org/fhir}Period",
                                "path" : "period",
                                "scope" : "QualifyingEncounter",
                                "type" : "Property"
                             } ]
                          }
                       }, {
                          "locator" : "421:72-421:76",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}Quantity",
                          "value" : 1,
                          "unit" : "day",
                          "type" : "Quantity"
                       } ]
                    } ]
                 }, {
                    "locator" : "422:9-423:116",
                    "resultTypeName" : "{urn:hl7-org:elm-types:r1}Boolean",
                    "type" : "In",
                    "operand" : [ {
                       "locator" : "422:9-422:107",
                       "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                       "type" : "Coalesce",
                       "operand" : [ {
                          "locator" : "422:18-422:79",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "Start",
                          "operand" : {
                             "locator" : "422:27-422:79",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "422:55-422:78",
                                "path" : "effective",
                                "scope" : "PatientRefusal",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       }, {
                          "type" : "Case",
                          "caseItem" : [ {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}dateTime",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "422:82-422:106",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "422:82-422:106",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          }, {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}dateTime",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "422:82-422:106",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}dateTime",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "422:82-422:106",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          }, {
                             "when" : {
                                "isType" : "{http://hl7.org/fhir}instant",
                                "type" : "Is",
                                "operand" : {
                                   "locator" : "422:82-422:106",
                                   "path" : "authoredOn",
                                   "scope" : "PatientRefusal",
                                   "type" : "Property",
                                   "resultTypeSpecifier" : {
                                      "type" : "ChoiceTypeSpecifier",
                                      "choice" : [ {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}base64Binary",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}boolean",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}canonical",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}code",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}date",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}dateTime",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}decimal",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}id",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}instant",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}integer",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}markdown",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}oid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}positiveInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}string",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}time",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}unsignedInt",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uri",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}url",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}uuid",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Address",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Age",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Annotation",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Attachment",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}CodeableConcept",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Coding",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactPoint",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Count",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Distance",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Duration",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}HumanName",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Identifier",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Money",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Period",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Quantity",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Range",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Ratio",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Reference",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}SampledData",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Signature",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Timing",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ContactDetail",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Contributor",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}DataRequirement",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Expression",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}UsageContext",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Dosage",
                                         "type" : "NamedTypeSpecifier"
                                      }, {
                                         "name" : "{http://hl7.org/fhir}Meta",
                                         "type" : "NamedTypeSpecifier"
                                      } ]
                                   }
                                }
                             },
                             "then" : {
                                "name" : "ToDateTime",
                                "libraryName" : "FHIRHelpers",
                                "type" : "FunctionRef",
                                "operand" : [ {
                                   "asType" : "{http://hl7.org/fhir}instant",
                                   "type" : "As",
                                   "operand" : {
                                      "locator" : "422:82-422:106",
                                      "path" : "authoredOn",
                                      "scope" : "PatientRefusal",
                                      "type" : "Property",
                                      "resultTypeSpecifier" : {
                                         "type" : "ChoiceTypeSpecifier",
                                         "choice" : [ {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}base64Binary",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}boolean",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}canonical",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}code",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}date",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}dateTime",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}decimal",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}id",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}instant",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}integer",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}markdown",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}oid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}positiveInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}string",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}time",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}unsignedInt",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uri",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}url",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}uuid",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Address",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Age",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Annotation",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Attachment",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}CodeableConcept",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Coding",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactPoint",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Count",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Distance",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Duration",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}HumanName",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Identifier",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Money",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Period",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Quantity",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Range",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Ratio",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Reference",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}SampledData",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Signature",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Timing",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ContactDetail",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Contributor",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}DataRequirement",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Expression",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}ParameterDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}RelatedArtifact",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}TriggerDefinition",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}UsageContext",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Dosage",
                                            "type" : "NamedTypeSpecifier"
                                         }, {
                                            "name" : "{http://hl7.org/fhir}Meta",
                                            "type" : "NamedTypeSpecifier"
                                         } ]
                                      }
                                   }
                                } ]
                             }
                          } ],
                          "else" : {
                             "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "Null"
                          }
                       } ]
                    }, {
                       "locator" : "423:21-423:116",
                       "name" : "CalendarDayOfOrDayAfter",
                       "libraryName" : "TJC",
                       "type" : "FunctionRef",
                       "resultTypeSpecifier" : {
                          "type" : "IntervalTypeSpecifier",
                          "pointType" : {
                             "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "423:51-423:115",
                          "resultTypeName" : "{urn:hl7-org:elm-types:r1}DateTime",
                          "type" : "End",
                          "operand" : {
                             "locator" : "423:58-423:115",
                             "name" : "Normalize Interval",
                             "libraryName" : "Global",
                             "type" : "FunctionRef",
                             "resultTypeSpecifier" : {
                                "type" : "IntervalTypeSpecifier",
                                "pointType" : {
                                   "name" : "{urn:hl7-org:elm-types:r1}DateTime",
                                   "type" : "NamedTypeSpecifier"
                                }
                             },
                             "operand" : [ {
                                "locator" : "423:86-423:114",
                                "path" : "performed",
                                "scope" : "AnesthesiaProcedure",
                                "type" : "Property",
                                "resultTypeSpecifier" : {
                                   "type" : "ChoiceTypeSpecifier",
                                   "choice" : [ {
                                      "name" : "{http://hl7.org/fhir}dateTime",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Period",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}string",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Age",
                                      "type" : "NamedTypeSpecifier"
                                   }, {
                                      "name" : "{http://hl7.org/fhir}Range",
                                      "type" : "NamedTypeSpecifier"
                                   } ]
                                }
                             } ]
                          }
                       } ]
                    } ]
                 } ]
              },
              "return" : {
                 "locator" : "424:2-424:27",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "expression" : {
                    "locator" : "424:9-424:27",
                    "resultTypeName" : "{http://hl7.org/fhir}Encounter",
                    "name" : "QualifyingEncounter",
                    "type" : "AliasRef"
                 }
              }
           }
        }, {
           "locator" : "398:1-400:84",
           "name" : "Encounter With No VTE Prophylaxis Due to Patient Refusal",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "399:2-400:84",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "399:2-399:104",
                 "name" : "No VTE Prophylaxis Due to Patient Refusal From Day of Start of Hospitalization To Day After Admission",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              }, {
                 "locator" : "400:9-400:84",
                 "name" : "No VTE Prophylaxis Due to Patient Refusal on Day of or Day After Procedure",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              } ]
           }
        }, {
           "locator" : "171:1-180:68",
           "name" : "Numerator",
           "context" : "Patient",
           "accessLevel" : "Public",
           "resultTypeSpecifier" : {
              "type" : "ListTypeSpecifier",
              "elementType" : {
                 "name" : "{http://hl7.org/fhir}Encounter",
                 "type" : "NamedTypeSpecifier"
              }
           },
           "expression" : {
              "locator" : "172:5-180:68",
              "type" : "Union",
              "resultTypeSpecifier" : {
                 "type" : "ListTypeSpecifier",
                 "elementType" : {
                    "name" : "{http://hl7.org/fhir}Encounter",
                    "type" : "NamedTypeSpecifier"
                 }
              },
              "operand" : [ {
                 "locator" : "172:5-179:67",
                 "type" : "Union",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 },
                 "operand" : [ {
                    "locator" : "172:5-177:11",
                    "type" : "Union",
                    "resultTypeSpecifier" : {
                       "type" : "ListTypeSpecifier",
                       "elementType" : {
                          "name" : "{http://hl7.org/fhir}Encounter",
                          "type" : "NamedTypeSpecifier"
                       }
                    },
                    "operand" : [ {
                       "locator" : "172:5-172:91",
                       "name" : "Encounter With VTE Prophylaxis Received on Day of or Day After Admission or Procedure",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }, {
                       "locator" : "173:11-177:11",
                       "type" : "Intersect",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       },
                       "operand" : [ {
                          "locator" : "173:13-173:123",
                          "name" : "Encounter With Medication Oral Factor Xa Inhibitor Administered on Day of or Day After Admission or Procedure",
                          "type" : "ExpressionRef",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          }
                       }, {
                          "locator" : "174:20-176:20",
                          "type" : "Union",
                          "resultTypeSpecifier" : {
                             "type" : "ListTypeSpecifier",
                             "elementType" : {
                                "name" : "{http://hl7.org/fhir}Encounter",
                                "type" : "NamedTypeSpecifier"
                             }
                          },
                          "operand" : [ {
                             "locator" : "174:22-174:94",
                             "name" : "Encounter With Prior or Present Diagnosis of Atrial Fibrillation or VTE",
                             "type" : "ExpressionRef",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Encounter",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }
                          }, {
                             "locator" : "175:21-175:98",
                             "name" : "Encounter With Prior or Present Procedure of Hip or Knee Replacement Surgery",
                             "type" : "ExpressionRef",
                             "resultTypeSpecifier" : {
                                "type" : "ListTypeSpecifier",
                                "elementType" : {
                                   "name" : "{http://hl7.org/fhir}Encounter",
                                   "type" : "NamedTypeSpecifier"
                                }
                             }
                          } ]
                       } ]
                    } ]
                 }, {
                    "type" : "Union",
                    "operand" : [ {
                       "locator" : "178:11-178:73",
                       "name" : "Encounter With Low Risk for VTE or Anticoagulant Administered",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    }, {
                       "locator" : "179:11-179:67",
                       "name" : "Encounter With No VTE Prophylaxis Due to Medical Reason",
                       "type" : "ExpressionRef",
                       "resultTypeSpecifier" : {
                          "type" : "ListTypeSpecifier",
                          "elementType" : {
                             "name" : "{http://hl7.org/fhir}Encounter",
                             "type" : "NamedTypeSpecifier"
                          }
                       }
                    } ]
                 } ]
              }, {
                 "locator" : "180:11-180:68",
                 "name" : "Encounter With No VTE Prophylaxis Due to Patient Refusal",
                 "type" : "ExpressionRef",
                 "resultTypeSpecifier" : {
                    "type" : "ListTypeSpecifier",
                    "elementType" : {
                       "name" : "{http://hl7.org/fhir}Encounter",
                       "type" : "NamedTypeSpecifier"
                    }
                 }
              } ]
           }
        } ]
     }
  }


