function demo(a, b, task) {
    console.log(a, b, task);
    task(a, b)
}

let add = demo(10, 20, (x, y) => {
    console.log(x + y)
})

let sub = demo(30, 20, function(e, f) {
    console.log(e - f)
})

let mul = demo(4, 5, function(x, y) {
    console.log(x * y)
})