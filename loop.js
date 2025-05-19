const numbers = [1,2,3,4,5,6];
// temp = [];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     const sum = element + 1;
//      temp.push(sum);
    
// }
// console.log(temp);

// const newArray = numbers.map(value => value - 1);

// jodi multi dia kori tahola

// const newArray = numbers.map(value =>{
//     return value + 1;
// });
// console.log(newArray);

const newNumbers = numbers.map(element=> element*element);
// console.log(newNumbers);

const persons = ['Rohit','Saimon','Bijoy','Habib'];
const newPerson = persons.map((element,index) => {
    console.log(index);
    console.log(element);
});
// console.log(newPerson);