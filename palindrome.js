var num = 121;
var n=num
var res=""
while(num !=0){
    let lastDigit=num%10;
    res+=lastDigit
    num=Math.floor(num/10)
}
console.log(n==res?"palindrome":"not palindrome")

// == in javascript compare the values in 2 variables
// === in javascript compare the type and value in 2 variables
//this property is called coercion