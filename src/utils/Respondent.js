
export const languageText = {

  en: {
    title: "Respondent Demographic",
    name: "Name of the Respondent",
    roll:"enter Roll",
    address: "Address",
    contact: "Contact number",
    doorNo: "Door / House / Bldng No.",
    floorNo: "Floor No.",
    houseName: "House / Flat Name",
    streetName: "Street / Road Name",
    areaName: "Area Name",
    townName: "Town / Village Name",
    landmark: "Landmark",
    pincode: "Pincode",
    phoneRes: "Phone No. (Res)",
    phonePP: "Phone No. PP(C/O)",
    phoneOff: "Phone No. (Off)",
    emailId: "e-mail ID",
    interviewerName: "Interviewer Name",
    interviewerId: "Interviewer ID",
    next: "Next",
    previous: "Previous",
    place: "Place of Interview",
    time: "",
  },
};
// src/static/formFields.js
export const formFieldsStep1 = [
  { name: "name", placeholder: "Name of the Respondent", },
  { name: "roll", placeholder: "enter Roll", },
  { name: "doorNo", placeholder: "Door / House / Bldng No." },
  { name: "floorNo", placeholder: "Floor No.",type:"number" },
  { name: "houseName", placeholder: "House / Flat Name" },
  { name: "streetName", placeholder: "Street / Road Name" },
  { name: "areaName", placeholder: "Area Name" },
  { name: "townName", placeholder: "Town / Village Name" },
  { name: "landmark", placeholder: "Landmark" },
  { name: "pincode", placeholder: "Pincode" },
  { name: "mobile", placeholder: "MOBILE No.", type: "tel" },
  { name: "phoneRes", placeholder: "Phone No. (Res)", type: "tel" },
  { name: "phonePP", placeholder: "Phone No. PP(C/O)", type: "tel" },
  { name: "phoneOff", placeholder: "Phone No. (Off)", type: "tel" },
  { name: "emailId", placeholder: "e-mail ID", type: "email" },
];

export const formFieldsStep2 = [
  { name: "interviewerName", placeholder: "Interviewer Name" },
  { name: "interviewerId", placeholder: "Interviewer ID" },
  // { name: "INT Start Time (write in 24hrs)", placeholder: "INT Start Time (write in 24hrs)" },
 
];

export const places = [
  "Home – 1",
  "Office – 2",
  "Street Intercept - 3",
  "Shop / Outlet – 4",
  "CLT – 5",
  "Hospital / Clinic – 6",
  "Exit – 7",
  "Others – 8",
];