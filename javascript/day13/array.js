let arr = [10, 20, 30, 40]
console.log(arr);

let x = []
for (let i = 0; i < arr.length; i++) {
    x.push(arr[i] + 5)
}
console.log(x);

//map
//let x = arr.map((e, i) => {
//console.log(e, i);
//return e + 5
//})
//console.log(x);
console.log(arr)

//reduce
let arr1 = [10, 20, 30, 40, 50]
console.log(arr1)
let y = arr1.reduce((acc, v) => {
    console.log(acc, v);
    return acc + v

})
console.log(y);
console.log(arr1);

//sort
let arr2 = [5, 4, 20, -1, 10, 30, 8]
console.log(arr2)
console.log(arr2.sort());
arr2.sort((a, b) => {
        //return a - b
        return b - a
    })
    //console.log();
    //console.log(w.reverse());
    //console.log(arr2);


//filter
let arr3 = [10, 20, 30, 40, 50]

let x1 = []
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > 20) {
        x1.push(arr3[i])
    }
}
console.log(x1)
let q = arr3.filter((e) => {
    return e > 20
})
console.log(q);

let arr4 = [5, 3, 2, 10, 30, 80]
console.log(arr4)
console.log(arr4[3]);
console.log(arr4[4]);

//slice
console.log(arr4.slice(3, 5));
console.log(arr4);
console.log(arr4.slice(2));

//spilce
let arr5 = [10, 20, 30, 40, 50]
arr5.splice(2, 2, "hello")
console.log(arr5);

arr5.splice(1, 0, "hi")
console.log(arr5)
arr5.splice(2, 1)
console.log(arr5)
arr5.splice(0, arr5.length)
console.log(arr5);