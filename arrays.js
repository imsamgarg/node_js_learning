const array = [{ name: "phone" }, { name: "panda" }, { name: "panda" }];

const singleValue = array.find((v) => v.name == "panda");
const multipleValues = array.filter((v) => v.name == "panda");

console.log(singleValue);
console.log(multipleValues);
