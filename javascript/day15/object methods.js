let obj = {
    name: "abc",
    id: 123,
    role: "dev"
}
console.log(obj);

console.log(Object.isSealed(obj))
Object.seal(obj)
console.log(Object.isSealed(obj))

//insertion

obj.address = "hyd"
console.log(obj);

//updation is possible
obj.id = 789
console.log(obj);

//delete
delete obj.id
console.log(obj);

console.log(Object.isFrozen(obj));
Object.freeze(obj)
console.log(Object.isFrozen(obj));

//insertion is not possible
obj.address = "hyd"
console.log(obj);

//updation is not possible
obj.id = 365
console.log(obj);

//delete is not possible
delete obj.id
console.log(obj);

let obj1 = {
    name: "xyz",
    id: 123
}
let obj2 = {
    name: "pqr",
    role: "dev",
    address: "hyd"
}
console.log(obj1);
console.log(obj2);

let x = Object.assign(obj1, obj2)
console.log(x);

let k = Object.keys(obj2)
console.log(k);
for (let i of k) {
    console.log(i);
}
let v = Object.values(obj2)
console.log(v);
for (let i of v) {
    console.log(i);
}



let arr = [
    [0, 123],
    ["name",
        "abc"
    ],
    ["role", "dev"]
]
let g = Object.fromEntries(arr)
console.log(g);
console.log(g.role);

//create()
let obj4 = {
    name: "web",
    id: 123,
    role: "js"
}

let f = Object.create(obj4)
console.log(f.name);
console.log(f);

let date = new Date()
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes);
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(Date.now());
let r = date.setFullYear(2025, 5);
console.log(date.toLocaleString(r));

//math
console.log(Math.random() * 100);
console.log(Math.floor(10.53));
console.log(Math.round(10.53));
console.log(Math.trunc(10.53));
console.log(Math.pow(2, 8));
console.log(Math.min(10, 20, 5, 30));
console.log(Math.max(10, 20, 5, 30, 2));
console.log(Math.floor(Math.random() * 100));