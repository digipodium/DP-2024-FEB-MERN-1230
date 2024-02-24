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