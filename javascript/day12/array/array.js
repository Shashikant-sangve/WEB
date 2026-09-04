////leteral way
//let arr = []
//console.log(arr);
//let arr1 = [10, 20, "hi", true, null, NaN, 10.5, undefined]
//console.log(arr1);
//console.log(arr1[3]);
//
//
//// new keyword
//
//let arr2 = new Array()
//console.log(arr2);
//
////constructor way
//
//let arr3 = new Array()
//console.log(arr3);
//
////array methods
//
//let arr4 = []
//console.log(arr4);
//
////push() insert the elements from the ending position
//
//arr4.push(70);
//console.log(arr4);
//arr4.push("hi")
//console.log(arr4);
//
////unshift() insert the elements from the ending position
//
//arr4.unshift(70);
//console.log(arr4);
//arr4.unshift("hi")
//console.log(arr4);
//
////pop() remove the elements from the ending
//
//arr4.pop()
//console.log(arr4);
//arr4.pop()
//console.log(arr4);
//
////shift() it will remove the elements from starting
//
//arr4.shift()
//console.log(arr4);
//arr4.shift()
//console.log(arr4);



//filter

let arr10 = [10, 20, 30, 40, 50]

console.log(arr10);
for (let i = 1; i <= arr10.length; i++) {
    if (arr10[i] >= 30) {
        console.log(arr10[i]);
    }
}
let s1 = arr10.filter((e) => {
    returne => 30
})
console.log(s1);

//flat

let arr11 = [
    10, [
        [20],
        [
            [
                [
                    [30, 40]
                ]
            ]
        ]
    ],
    [
        [
            [
                [
                    [
                        [
                            [
                                [50]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ], 60
]
console.log(arr11);
console.log(arr11.flat(2));
console.log(arr11.flat(Infinity));

//includes

let arr12 = [10, 20, 30, 40, 50]
console.log(arr12);
console.log(arr12.includes(35));
console.log(arr12.includes(5));
console.log(arr12.includes(20));
console.log(arr12.includes(30));

//indexof
console.log(arr12.indexOf(30));
console.log(arr12.indexOf(50));

//for of

for (let i of arr12) {
    console.log(i)
}

//for in

for (let i in arr12) {
    console.log(i)
}

//foreach

//arr12.foreach((e, i) => {
//console.log(i)
//})

//entries

let x1 = arr12.entries()
for (let i of x1) {
    console.log(i);
}


let arr13 = [10, 20, 30, 40, 50]
console.log(arr13);

//reverse method will modify
//the original array
//arr13.reverse
//console.log(arr13);
console.log(arr13.toString());

//to reverse method will not
//modify the original array
console.log(arr13.toReversed());
console.log(arr13);


let arr14 = [10, 20]
let arr15 = [30, 40]
let arr16 = [25, 35]
console.log(arr14.concat(arr15, arr16));


let arr18 = [10, 20, 30, 10, 40, 50, 5, 80]
console.log(arr18);
console.log(arr18.indexOf(10));
console.log(arr18.lastIndexOf(10));
console.log(arr18.toSpliced(2, 1, "hi"));
console.log(arr18);

let d1 = arr18.findIndex((e) => {
    return e > 40
})
console.log(d1);
let d2 = arr18.find((e) => {
    return e > 10
})
console.log(d2);
let d3 = arr18.findLast((e) => {
    return e > 10
})
console.log(d3);

let d4 = arr18.findLastIndex((e) => {
    return e > 10
})
console.log(d4);