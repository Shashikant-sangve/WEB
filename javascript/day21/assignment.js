//let btn = document.getElementById("btn");
//
//let buttonName = prompt("Enter button name:");
//let color = prompt("Enter background color:");
//
//btn.innerText = buttonName;
//
//btn.onclick = function() {
//    document.body.style.backgroundColor = color;
//};



let d1 = document.getElementById("d1");
let buttonname = prompt("enter name:");
let color = prompt("enter background color:");

d1.innerText = buttonname;

d1.onclick = function() {
    document.body.style.backgroundColor = color;
}

let d2 = document.getElementById("d2");
let buttonnumber = prompt("number:");

d2.innerText = buttonnumber + "table";
d2.onclick = function() {
    let num = Number(buttonnumber);

    for (let n = 1; n <= 10; n++)
        console.log(`${num}*${n}=${num*n}`);
}