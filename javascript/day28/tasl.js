//object
let obj = {
    name1: "xyz",
    id: 123,
    role: "dev"
}
console.log(obj);
console.log(obj.id);
let { id, role } = obj
console.log(id);
console.log(role);
let { name1 } = obj
console.log(name1);

//array
let arr = [10, 20, 30, 40]
console.log(arr);
let [a, b] = arr
console.log(a);
console.log(b);
let [c, d, e, f] = arr
console.log(c);
console.log(d, e, f);




//rest parameter and spread operator(...)
//LHS=RHS
//rest the data will be unpacked(n nof spread parameters we can unpack)
//spread

let arr1 = [10, 20, 30]
console.log(...arr1);
let arr2 = [40, 50]
let x = [...arr1, ...arr2]
console.log(x); //[10,20,30,40,50]

//rest parameters
function demo(s, ...t) {
    console.log(s);
    console.log(t);
    //console.lohg(arguments);
}
demo(1, 2, 3, 4, 5)