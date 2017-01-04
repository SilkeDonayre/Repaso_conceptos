var myObj = { "name":"John", "age":31, "city":"New York" };
var myJSON = JSON.stringify(myObj); // te devuelve un string
var myObj = JSON.parse(myJSON); // te devuelve un objeto
console.log(myJSON);
console.log(myObj);
console.log(myObj.age);

var employees = [
    { "firstName":"John", "lastName":"Doe" },
    { "firstName":"Anna", "lastName":"Smith" },
    { "firstName":"Peter","lastName": "Jones" }
];
console.log(employees[2].firstName); // es igual a employees[0]["firstName"];
employees[2].firstName = "Silke";
employees[2].lastName = "Donayre"; // Modifica el valor.
console.log(employees[2]);
