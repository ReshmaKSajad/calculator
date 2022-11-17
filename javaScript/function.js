// function addnum(n1,n2,n3){
//     return n1+n2+n3
// }
// console.log(addnum(10,20,30));

// function subnum(n1,n2){
//     return n1-n2
// }
// console.log(subnum(20,10));

//method overloading is not supporting in Python and javascript ...bcz both are interpreted languages.
//to solve this in python ,we use *args...but it is not in javascript

// function addnum(...nums){
//     console.log(nums);
// }
// addnum(10,20)
// addnum(10,20,30)
// addnum(10,20,30,40)

// function addnum(...args){
//     let res=0;
//     for(let n of args){
//         res+=n
//     }
//     return res
// }
// addnum(10,20)
// addnum(10,20,30)
// addnum(10,20,30,40)

function cube(num){
    return num**3
}
console.log(cube(3));