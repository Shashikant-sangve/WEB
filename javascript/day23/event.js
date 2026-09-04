let gp = document.querySelector("#gp")
let p = document.querySelector("#p")
let ch = document.querySelector("#ch")
gp.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("grand parent clicked");
    e.target.style.backgroundColor = "orange"
}, false)


p.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("parent clicked");
    e.target.style.backgroundColor = "pink"
}, false)


ch.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("child clicked");
    e.target.style.backgroundColor = "green"
}, false)

gp.addEventListener("click", (e) => {
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.innerText);
    //console.log(e.target.tagName);
    //console.log(e.target.id);
    //console.log(e.screenX);
    //console.log(e.screenY);
    if (e.target.tagName == "DIV") {
        console.log("hello gp")
    } else if (e.target.tagName == "SECTION") {
        console.log("hello p")
    } else if (e.target.tagName == "ASIDE") {
        console.log("hello ch")
    }

})