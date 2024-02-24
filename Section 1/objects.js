const user = { name: 'Raju', email: 'raju@mail.com', password: 'acb123' };

console.log(user);

console.log(user.name);
console.log(user['password']);

user.password = 'abrakadabra';
user.address = 'Lucknow';

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy s21',
    price: '56000',
    color: ['white', 'black', 'red']
};

console.log(smartphone);
// access third color of smartphone

console.log(smartphone.color[2]);

const phoneList = [
    { brand: 'Samsung', model: 'Galaxy s21', price: '56000', color: ['white', 'black', 'red'] },
    { brand: 'Mi', model: '10 Pro', price: '25000', color: ['silver', 'black'] },
    { brand: 'Vivo', model: 'v7', price: '23000', color: ['grey', 'blue', 'black'] },
    { brand: 'Oppo', model: 'neo 11', price: '35900', color: ['black', 'red'] }
];

console.log( phoneList[0] );

console.log( phoneList[0].price );

console.log( phoneList[0].color[0] );

// syntax to access 2nd color of third phone

console.log( phoneList[2].color[1] );
phoneList[3].color.push('silver');
console.log(phoneList);