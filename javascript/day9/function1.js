let x = () => {
    console.log("hello arrow fun");
}
x()

//implicit arrow function
let q = (a, b) => a + b
console.log(q(10, 20));

let w = a => "hi" + a
console.log(w(5));

let e = a => "hello"
console.log(e());



let r = _ => console.log("tata bye bye");
r()

//explicit arrow
let y = () => {
    console.log("hi");
    return "hello"
}
console.log(y());

let z = () => {
    console.log("hello html");
    console.log("hello css");
    console.log("hello js");
}
z()

//console.log(d());
//let d = () => "hello"

var k = 10

let l = () => {
    var k = 20;
    console.log(k);
    console.log(this.k);
    console.log(window.k);
    console.log(this.k + k);
};
l();