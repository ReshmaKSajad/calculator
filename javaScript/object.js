var person = {
    name : "hari",
    age : 25,
    gender : "male",
    getName(){
        return this.name
    },
    getAge(){
        return this.age
    }
}

console.log(person.getName());
console.log(person.getAge());
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person["name"]);
console.log(person.name,person.age,person.gender);

person.salary = 40000
console.log(person);

console.log("isActive" in person);

