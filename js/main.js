console.log("main js");

const jsonPerson = `
 {
    "firstname": "Pharrel Williams",
    "email": "itmightseemcrazywhatimabouttosay@gmail.com"
}`;

const objectPerson = JSON.parse(jsonPerson);

console.log("Voornaam is: ", objectPerson.firstname);
console.log("Email is: ", objectPerson.email);

const jsonid = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
  }`;

 const jsonpersoon = JSON.parse(jsonpe);