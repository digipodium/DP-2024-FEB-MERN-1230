const nums = [ 3, 5, 8, 12, 6, 7, 9 ];


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

const oddNums = nums.filter( (n) => { return n%2!==0 } );
console.log(oddNums);

const prices2 = [ 740, 920, 1450, 3500, 6400, 7200, 120 ];
// less than 5000 and greater than 1000

const budgetPrices = prices2.filter( (p) => { return p<5000 && p>1000 } );
console.log(budgetPrices);

const phoneList = [
    { brand: 'Samsung', model: 'Galaxy s21', price: 56000, color: ['white', 'black', 'red'] },
    { brand: 'Mi', model: '10 Pro', price: 25000, color: ['silver', 'black'] },
    { brand: 'Vivo', model: 'v7', price: 23000, color: ['grey', 'blue', 'black'] },
    { brand: 'Oppo', model: 'neo 11', price: 35900, color: ['black', 'red'] },
    { brand: 'Samsung', model: 'J7', price: 17500, color: ['gold', 'blue'] }
];

const nicePhones = phoneList.filter( (phone) => { return phone.price > 30000 } );
console.log(nicePhones);

const samsungPhones = phoneList.filter( (phone) => { return phone.brand === 'Samsung' } );
console.log(samsungPhones);

console.log( ['a', 'b', 'c'].includes('d') );
const redPhones = phoneList.filter( (phone) => { return phone.color.includes('red') } );
console.log(redPhones);