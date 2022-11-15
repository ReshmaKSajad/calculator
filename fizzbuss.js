var num = 15
if(num%15==0){
    console.log("fizzbuss");
}
else if(num%5==0){
    console.log("buzz");
}
else if(num%3==0){
    console.log("fizz");
}
else{
    console.log(num);
}

var str="";
if(num%3==0){
    str+="fizz"
}
if(num%5==0){
    str+="buss"
}
console.log(str);