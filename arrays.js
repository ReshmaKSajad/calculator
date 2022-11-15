// // array is an object which can assign different types of values

// // []
// // differnt type
// // length not fixed
// // duplicates allowed
// // index used for picking specific elements

// // var arr=[10,11,12,13,15]
// // for (let n of arr){
// //     if(n%2!=0){
// //         console.log(n);
// //     }
    
// // } 

// //Array -- map,filter,reduce,sort,some,forEach,includes
// //map = apply particular functionality to all objects in an array
// //filter = filter the objects in an array with a condition
// //reduce = will give a single output

var arr=[10,45,23,98,34,78]
// arr.sort((o1,o2)=>o1-o2)
// console.log(arr);

// // function compare(o1,o2){
// //     if(o1<o2){
// //         return o1
// //     }
// //     else{
// //         return o2
// //     }
// // }



// var sq = arr.map(n=>n**2)
// console.log(sq);

// var cube = arr.map(n=>n**3)
// console.log(cube);

// arr.map(n=>n**2).filter(n=>n>500).forEach(n=>console.log(n))

// var evens=arr.filter(n=>n%2==0)
// console.log(evens);

// var odds=arr.filter(n=>n%2!=0)
// console.log(odds);

// var lst = [2,3,4,6,5,7,1,12,13]
// var less = lst.map(n=>n>5?n+1:n<5?n-1:5)
// console.log(less);

var sum = arr.reduce((n1,n2)=>n1+n2)
console.log(sum)

var pro = arr.reduce((n1,n2)=>n1*n2)
console.log(pro);

var max = arr.reduce((n1,n2)=>n1<n2?n2:n1)
console.log(max);

var min = arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);

arr.forEach(n=>console.log(n))

// sort num reduce num 2 arguements venam...for comparing

//list of dictionary = array of objects