//
function demo(a, b) {
    setTimeout(() => {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }, 5020)
}
demo(10, 15)

function d1() {
    setTimeout(() => {
        console.log("hello d1");
    }, 0)
}
d1()

function d2() {
    console.log("hi");
}
d2()

let h = document.querySelector("#time")
console.log(h);

let stop = document.querySelector("#stop")
console.log(stop);

let start = document.querySelector("#start")

console.log(start);

function time1() {

    let date = new Date()

    console.log(date.toLocaleTimeString());

    h.innerText = date.toLocaleTimeString()
}
let x = setInterval(time1, 1000)

stop.onclick = () => {
    clearInterval(x)
}
start.onclick = () => {
    x = setInterval(time1, 1000)
}

//promices

function demo1(a, b) {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isNaN(a) || isNaN(b)) {
                    reject()
                } else {
                    resolve()
                }
            }, 5000)
        })
        .then(() => {
            for (let i = a; i <= b; i++) {
                console.log(i);
            }
        })
        .then(() => {
            console.log("hi 2nd then");
        })
        .then(() => {
            console.log("hi 3nd then");
        })
        .then(() => {
            console.log("hi 4th then");
        })
        .then(() => {
            console.log("hi 5th then");
        })
        .catch(() => {
            console.log("dabba idiot fellow give correct input");
        })
        .finally(() => {
            console.log("hi finally1");
        })
        .finally(() => {
            console.log("hi finally2");
        })
        .finally(() => {
            console.log("hi finally3");
        })
}
demo1(10, 12)