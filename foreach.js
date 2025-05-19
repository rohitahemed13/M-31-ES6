const friends = [
    {id : 1, name: 'iphone', color : 'black', brand : 'apple', price : '1200'},
    {id : 2, name: 'xiomi', color : 'gold', brand : 'xiomi', price : '1100'},
    {id : 3, name: 'xiami', color : 'gold', brand : 'xiomi', price : '1000'},
    {id : 4, name: 'iphone', color : 'black', brand : 'apple', price : '1300'},
    {id : 5, name: 'samsung', color : 'gold', brand : 'saM', price : '800'}
];

// friends.forEach(friend =>{
//     if(friend.price>1000){
//          console.log(friend
//    ) ; }

//         }
// );

const newFriends = friends.filter(friend => friend.price >=1000);
// console.log(newFriends);

const products = friends.find(product => product.color ==="gold");
const newArray = friends.filter(product => product.id != 3);
// console.log(products);
// console.log(newArray);

const newNumbers = friends.map(p => {
    if(p.brand === "apple"){
        p.price = p.price - 100;
    }
    return p;
});
console.log(newNumbers);