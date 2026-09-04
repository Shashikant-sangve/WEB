async function demo() {
    let x = await 10
        // console.log(x);
        //console.log("hello");
    return x
}

console.log(demo());
demo().then((data) => {
    console.log(data);
});

function d2() {
    try {
        async() => {
            let x = await "hello"
            console.log(x);
        }
    } catch (e) {
        console.log(e);
    }
}
console.log(d2());