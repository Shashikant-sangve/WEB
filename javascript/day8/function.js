 let a = function() {
     console.log("hello function expression");
 }
 a()


 console.log("prototype" in a);
 let x = new a()
 console.log(Object.getPrototypeOf(x) == a.prototype)

 function* demo() {
     yield "hello"
     yield "hi"
     yield "tata"
 }

 //console.log(semo());
 let q = demo()
 console.log(q.next().value);
 console.log(q.next().value);
 console.log(q.next().value);

 let r = function*() {
     console.log("hello gen fun")
     yield "hi"
     console.log("tata");
     yield "hello 1"
 }

 let e = r()
 console.log(q.next().value);
 console.log(q.next().value);

 let f = d2()
 console.log(q.next().value);
 console.log(q.next().value);


 var c1 = 20

 function* d2(t, u) {
     var c1 = 30
     console.log(t, u);
     console.log(t + u);
     console.log(c1);
     yield "hello para and argu"
     yield "tata bye"
 }

 console.log("prototype" in d2);