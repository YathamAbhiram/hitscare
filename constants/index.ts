export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Passport",
  "Aadhar card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-Bhairava.png",
    name: "Bhairava",
  },
  {
    image: "/assets/images/dr-Roxie.png",
    name: "Roxie",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Danny",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Vishnu Sekhar",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Priya",
  },
  {
    image: "/assets/images/dr-VenkataRamana.png",
    name: "Venkata Ramana",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Meena Priyadharsini",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Praisy",
  },
  {
    image: "/assets/images/dr-SiddhanthNandanSaaho.png",
    name: "Siddhanth Nandan Saaho",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
