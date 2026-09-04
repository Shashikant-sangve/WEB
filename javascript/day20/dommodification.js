let b = document.body
console.log(b);

let h = document.getElementById("d1")
console.log(h);
console.log(h.innerText);
console.log(h.textContent);
console.log(h.innerHTML);
h.innerText = "tata"
h.innerText += "bye"
h.innerHTML = "good bye"
b.innerText = "<span>hi span</span>"
b.textContent = "<span>hi span</span>"
b.innerHTML = "<span>hi span</span>"
let y = b.innerHTML += `<ol>
                        <li id=d2>home</li>
                        <li>login</li>
                        <li>contact</li>
                        </ol>`
    // b.innerHTML.ol.li="help";
    // b. firstElementChild.firstElementChild.textContent="help" console.log(y);
    // y.firstElementChild. firstElementChild, textContent="help"
let x = document.getElementById("d2")
console.log(x);
x.innerText = "help"
let t = document.createElement("table")
console.log(t);
b.append(t)
console.log(b);
let tr1 = document.createElement("tr")
t.append(tr1)
let tr2 = document.createElement("tr")
t.append(tr2)
let td1 = document.createElement("td")
let td2 = document.createElement("td")
tr1.append(td1)
tr1.append(td2)
let td3 = document.createElement("td")
let td4 = document.createElement("td")
tr2.append(td3)
tr2.append(td4)
    // t.style.border="2px solid"
t.style.height = "200px"
t.style.width = "200px"
    // setAttribute("k", "v")
t.setAttribute("border", "2")
td1.textContent = "html"
td2.textContent = "css"
td3.textContent = "javascript"
td4.textContent = "React js"
t.setAttribute("cellpadding", "25px")
td1.style.backgroundColor = "red"
td2.style.backgroundColor = "blue"
td3.style.backgroundColor = "green"
td4.style.backgroundColor = "yellow"
td1.setAttribute("colspan", "2")
td2.remove()
    // removeAttribute("k")
t.removeAttribute("cellpadding")
t.setAttribute("cellspacing", "0px")
t.style.textAlign = "center"