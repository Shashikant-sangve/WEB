//(function demo(a, b) {
//    console.log(a + b);
//    console.log("hello");
//})(10, 20);
//
//(() => {
//    console.log("hello arrow with iife function");
//})();
//
//(function() {
//    console.log("hello function exp with iife");
//})()




//                                 //                           recurtion function



//function demo(n) {
//    if (n == 0) {
//        return 0;
//    }
//    console.log(n);
//    return n + demo(n - 1);
//}
//console.log(demo(5));


function demo1(n) {
    console.log(n);
    let x = n - 1
    if (x > 0) {
        demo1(x)
    }

}
demo1(5)



//                        //                                  currying function

function demo2(e) {
    return function d1(f) {
        console.log(e, f);
        console.log(e + f);
    }
}
demo2(5)(6)
    //let s=demo2(5)
    //s(6)

let x = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c

        }
    }
}
console.log(x(10)(5)(6));