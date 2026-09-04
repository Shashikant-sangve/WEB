//let h = document.querySelector("h1")
//console.log(h);
//console.log(window);
//console.log(window.navigator);
//console.log(window.navigator.online);
//if (window.navigator.online) {
//    h.innerText = "😁"
//} else {
//    h.innerText = "😔"
//}



let share = document.querySelector("#share")
share.addEventListener("click", () => {
    console.log(window.navigator.mediaDevices.getDisplayMedia());
})

let cam = document.querySelector("#cam")
let v = document.querySelector("video")
cam.addEventListener("click", () => {
    window.navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then((stream) => {
        v.srcObject = stream
    })
})


let btn4 = document.querySelector("#btn4")
let btn3 = document.querySelector("#btn3")
btn3.add