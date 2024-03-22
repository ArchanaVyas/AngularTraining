// Interface for address
interface Address {
  street: string;
  city: string;
  pincode: number;
  state: string;
  completeAddress(): string; //Method to get complete address
}

// Interface for contact
interface Contact {
  email?: string;
  phoneNumber?: number;
}

// Interface for personInfo
interface personInfo extends Address {
  firstName: string;
  lastName: string;
  age: number;
  contact?: Contact[]; // Optional
  fullName(): string; //Method to get full name
}

// new object of personInfo
const person = <personInfo>{};
person.firstName = "Archana";
person.lastName = "Vyas";
person.age = 21;
person.street = "2, Ravish Bungalows";
person.city = "Ahmedabad";
person.pincode = 387002;
person.state = "Gujarat";
person.contact = [
  { email: "archana,vyas@bacancy.com", phoneNumber: 1234567890 },
];
person.fullName = function () //Defining fullName method
{
  return this.firstName + " " + this.lastName;
};
person.completeAddress = function () //Defining completeAddress method
{
  return (
    this.street + ", " + this.city + ", " + this.state + "-" + this.pincode
  );
};

function contactInfo(contact?: Contact[]): string {
  let contactInfo = "";
  if (contact && contact.length > 0) {
    const { email, phoneNumber } = contact[0];
    if (email && phoneNumber) {
      contactInfo = `We can connect through - email: ${email}, phonenumber: ${phoneNumber}`;
    } else if (email) {
      contactInfo = `We can connect through - email: ${email}`;
    } else if (phoneNumber) {
      contactInfo = `We can connect through - phonenumber: ${phoneNumber}`;
    }
  }
  return contactInfo;
}

// Displaying person details
console.log(
  "PersonInfo:\n" +
    "Hello, My name is " +
    person.fullName() +
    ".\n" +
    "I am " +
    person.age +
    " years old.\n" +
    "I live in " +
    person.completeAddress() +
    ".\n" +
    contactInfo(person.contact)
);
