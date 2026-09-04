function demo(e) {
    // console.log("hi");
    e.target.style.backgroundColor = "red";
    console.log(e.target.innerText);
}
let d1 = document.getElementById("d1")

function demo1() {
    d1.style.backgroundColor = "green";
    console.log(d1.innerText);
}

let x = document.body

function color1(e) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    x.style.backgroundColor = `rgb(${r},${g},${b})`;
    // console.log(e);
    // console.log(e.key);
}

function demo2() {
    x.style.backgroundColor = "white"
}
let sec1 = document.getElementById("sec1")
    // dom level
sec1.onclick = () => {
        console.log("good bye");
    }
    // eventlister/handler addEventListener("eventName",cb,boolean)
sec1.addEventListener("mouseover", () => {
    console.log("hello javascript");
})