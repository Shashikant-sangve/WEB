let a = 10
    //console.log(a);
    //window.localStorage.clear()

window.localStorage.setItem("x", a)
window.localStorage.setItem("name", "shashi")
let n = window.localStorage.setItem("name", "shashi")
console.log(n)
console.log(window.localStorage.key(0));
console.log(window.localStorage.key(1));
console.log(localStorage.length);
localStorage.removeItem("x")
localStorage.clear()

//session storage
window.sessionStorage.setItem("id", 123)
let y = sessionStorage.getItem("sal", "10lpa")

sessionStorage.removeItem("role")
for (let i = 10; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i));
}
sessionStorage.clear()

//cookies
document.cookie = "name=xyz"
console.log(document.cookie);
console.log(document.cookie.slice(11));
let e = document.cookie.split('=')
console.log(e);

console.log([1]);

window.localStorage.clear()
let obj = {
    name: "shashi",
    id: 123,
    role: "web"
}
console.log(obj);
window.localStorage.setItem("obj", obj)



//json obj
//javascript object notation
let obj1 = {
    name: "xyz",
    id: 123,
    role: "dev"
}
console.log(obj1);
//it will convert normal to json object
let s = JSON.stringify(obj1)
console.log(s);

//it will convert json to normal object
let d = JSON.parse(s)
console.log(d);

window.localStorage.setItem("obj1", s)
console.log(window.localStorage.getItem("obj"));
console.log(window.localStorage.getItem("obj1"));
console.log(JSON.parse(window.localStorage.getItem("obj1")));

//window.localStorage.clear()
let form = document.querySelector("form")
let inp1 = document.querySelector("#inp1")
let c = localStorage.getItem("inp1") || ""
let c1
console.log(c);

form.addEventListener("click", (f) => {
    if (f.target.innerText == "Add") {
        f.preventDefault();
        c = localStorage.setItem("inp1", inp1.value)
        c1 = localStorage.getItem("inp1")
        console.log(c1)
    }
});