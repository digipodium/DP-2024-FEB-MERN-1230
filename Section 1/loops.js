for(let i=0; i<10; i++){
    console.log(i);
}

let nums = [ 34, 89, 47, 93, 53, 84 ];

for(let i of nums){
    // console.log(i);
    if(i % 2 === 0){
        console.log(i);
    }
}