//multiple inheritance is not supportive in javascript
//method overloading is not supportive

class Parent{
    m1(){
        console.log("inside m1");
    }
}

class Child extends Parent{

}

var c = new Child()
c.m1()

class Operations{
    add(...args){
        return args.reduce((n1,n2)=>n1+n2)
    }
}
var ad=new Operations()
console.log(ad.add(1,2,3,4,5));