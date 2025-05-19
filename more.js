const persons = {
    name: "Rohit Ahemed",
    age: 25
};
delete persons.name;
const {age , name}= persons;
console.log(age);

const sum =['rohit','saimon','habib','bijoy'];
const[first,second,third,fourth] = sum;
console.log(first,second,third)