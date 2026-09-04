//let a = window.prompt("enter your name")
//console.log(a);
//document.writeln(a)
//let x = Number(prompt("enter your phone number"))
//console.log(x);
//document.writeln(x)

//window.alert("this is your alert msg")
//let s = window.confirm("this is your conformation msg")
//console.log(s);

//console.error("this is your error msg");
//console.warn("this is your warning msg");

let Tn = window.Number(prompt("enter your tn number"))
let Sn = window.Number(prompt("enter your starting number"))
let En = window.Number(prompt("enter your ending number"))

function createTable(Tn, Sn, En) {
    for (let i = Sn; i <= En; i++) {
        console.log(`${Tn} * ${i} = ${Tn * i}`);
        document.writeln(`${Tn} * ${i} = ${Tn * i}<br>`);
    }
}
createTable(Tn, Sn, En);