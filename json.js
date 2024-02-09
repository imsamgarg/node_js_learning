const str = "hello world";

const obj = {
  name: "hello world",
};

const array = ["name"];

const product = {
  name: "aa",
  price: "asd",
  color: "red",
};
//* json is just a format to specify any kind of data in string - [standard][rule]

//* JSON.stringify ki he apne kol koi complex data type he like product. hun ohnu apa baki languages ya tools nu share krna chane he ta apa
//* ohnu ik common format ch convert krdange jo ki sare smjh skn. oh format he JSON for us.
const jsonString = JSON.stringify(product);

//* JSON.parse kise vi string nu jehdi ki json de format nu follow krdi ohnu javascript de data type ch convert krdu
//* je apni string format nu follow nhi krugi ta oh error throw ke dega
const product2 = JSON.parse('{"name":"aa" ,"price": "asd","color":"red"}');
console.log(product2);

// <body>
// <name> aa <name>
// <price> 12 <price>
// <body>
