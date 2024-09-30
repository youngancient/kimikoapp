export const Contract_ABI= [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenAddress",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AccountAlreadyExists",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMedicationID",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MedicationAlreadyCompleted",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MedicationDurationEnded",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MedicationIntervalNotMet",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotADoctor",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotAPatient",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFailed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroAddressNotAllowed",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ZeroRewardFound",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "BeneficiaryAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "DoctorAddedSuccessfully",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_medicationId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_patient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_completionTime",
          "type": "uint256"
        }
      ],
      "name": "MedicationCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_medicationId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_patient",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_time",
          "type": "uint256"
        }
      ],
      "name": "MedicationTaken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "PatientAddedSuccessfully",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "PatientMedicationAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "RewardSent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_specialty",
          "type": "string"
        }
      ],
      "name": "addDoctor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_dosage",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_interval",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "addPatientMedication",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllPatients",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getDoctorDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "specialty",
              "type": "string"
            }
          ],
          "internalType": "struct Kimiko.Doctor",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyMedications",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "dosage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interval",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isCompleted",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isEnded",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastTimeTaken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalDoses",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dosesTaken",
              "type": "uint256"
            }
          ],
          "internalType": "struct Kimiko.Medication[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getPatientDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "doctor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "adherenceScore",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "noOfMedications",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "dosage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "interval",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "duration",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "isCompleted",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isEnded",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lastTimeTaken",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalDoses",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dosesTaken",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Kimiko.Medication[]",
              "name": "medications",
              "type": "tuple[]"
            },
            {
              "internalType": "enum Kimiko.Role",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "claimedRewards",
              "type": "uint256"
            }
          ],
          "internalType": "struct Kimiko.Patient",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPatientDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "doctor",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "adherenceScore",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "noOfMedications",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "dosage",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "interval",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "duration",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "isCompleted",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isEnded",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "startTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lastTimeTaken",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalDoses",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "dosesTaken",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Kimiko.Medication[]",
              "name": "medications",
              "type": "tuple[]"
            },
            {
              "internalType": "enum Kimiko.Role",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "beneficiary",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "claimedRewards",
              "type": "uint256"
            }
          ],
          "internalType": "struct Kimiko.Patient",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getPatientMedications",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "dosage",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interval",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isCompleted",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isEnded",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lastTimeTaken",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalDoses",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "dosesTaken",
              "type": "uint256"
            }
          ],
          "internalType": "struct Kimiko.Medication[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPatientReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTokenAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "noOfDoctors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "noOfPatients",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "setBeneficiary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_medicationId",
          "type": "uint256"
        }
      ],
      "name": "takeMedication",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]