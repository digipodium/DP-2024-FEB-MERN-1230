const nums = [ 3, 5, 8, 12, 6, 2 ];


const newArr = [];
for(let n of nums){
    console.log(n ** 2 );
    newArr.push(n**2);
};

console.log(newArr);

const sqrt = nums.map( (n) => { return n**2 } );

console.log(sqrt);

const prices = ['$46.234', '$879.99', '$9274.1', '$999.999'];
// [46, 879, 9274, 999]


console.log( parseInt('$46.234'.slice(1)) );

const numPrices = prices.map( (p) => { return parseInt(p.slice(1)) } );
console.log(numPrices);

// find 10% discount on all prices
const discounted = numPrices.map( (p) => { return p*0.9 }  );

console.log(discounted);

const names = [ 'Raju Rastogi', 'Farhan Akhtar', 'Kaliya Singh' ];

// ['Raju', 'Farhan', 'Kaliya'];

console.log( 'Anand Yadav'.split(' ')[0] );

const nums2 = [4, 87, 26, 284, 270, 963];

const oddNums = nums2.filter( ( n ) => { return n%2!==0 } );
console.log(oddNums);

const prices2 = [12000, 670, 4500, 3500, 4600, 240];

const budgetPrice = prices2.filter( (p) => { return p>500 && p<4000 });

console.log(budgetPrice);

const phoneList = [
    { brand: 'Samsung', model: 'Galaxy s21', price: 56000, color: ['white', 'blue', 'red'] },
    { brand: 'Mi', model: '10 Pro', price: 25000, color: ['silver', 'black'] },
    { brand: 'Vivo', model: 'v7', price: 23000, color: ['grey', 'blue', 'black'] },
    { brand: 'Oppo', model: 'neo 11', price: 35900, color: ['black', 'red'] },
    { brand: 'Samsung', model: 'J7', price: 17500, color: ['gold', 'black'] }
];

const budgetPhones = phoneList.filter( ( phone ) => { return phone.price < 30000 } );
console.log(budgetPhones);

const samsungPhones = phoneList.filter( ( phone ) => { return phone.brand === 'Samsung' });
console.log(samsungPhones);
// filter all phones with blue color

console.log( ['a', 'b', 'c'].includes('b') );

const bluePhones = phoneList.filter( (phone) => { return phone.color.includes('blue') } );

console.log(bluePhones);