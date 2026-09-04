//nested function 
//function demo() {
//    function d1() {
//        console.log("hello d1");
//    }
//
//    function d2() {
//        console.log("hello d2");
//    }
//}
//d1()
//d2()

//demo

function demo1() {
    function d1() {
        console.log("hello d1");
    }

    function d2() {
        console.log("hello d2");
    }
    return d1
}

//demo1()()

function demo2() {
    function d1() {
        console.log("hello d1");
    }

    function d2() {
        console.log("hello d2");
    }
    return [d1, d2]
}

//demo2()[0]()
//demo2()[1]()

var s = 30

function demo3() {
    //var s=35
    function d1() {
        var s = 20
        console.log(s);
        console.log(this.s);
    }

    function d2() {
        console.log(s);
        console.log("hello d2");
    }
    d1()
    d2()
}