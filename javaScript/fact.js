// var num = 3;
// var fact = 1
// for(let i=1;i<=num;i++){
//     fact*=i;
// }
// console.log(fact);


var num = 6;
var isPrime=true;
for(let i=2;i<=num;i++){
    if(num%i==0){
        isPrime=false;
        break
    }
}
console.log(`is ${num} prime= ${isPrime} `);