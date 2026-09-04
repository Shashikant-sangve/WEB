//literal way

let obj = {}
console.log(obj);

let obj1 = {
    name: "abc",
    id: 123,
    role: "web"
}
console.log(obj1);

//new keyword

let obj2 = new Object()
console.log(obj2);

//constructor

let obj3 = Object()
console.log(obj3);

//function constructor

function demo(name, id) {
    this.name = name
    this.id = id
}

let x = new demo("abc", 123)
console.log(x);

let obj4 = {
    name: "xyz",
    id: 123,
    role: "frontend"
}
console.log(obj4);

console.log(obj4.id);
console.log(obj4.name);
console.log(obj4.role);

let obj5 = {}
console.log(obj5);

//insertion
obj5.name = "pqr"
console.log(obj5);
obj5.address = "hyd"
console.log(obj5);

//update
obj5.name = "jyothi"
console.log(obj5);

//delete
delete obj5.name
console.log(obj5);