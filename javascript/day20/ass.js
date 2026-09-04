let b = document.body
console.log(b);


let t = document.createElement("table")

console.log(t)

b.append(t)

console.log(b)

t.setAttribute("border", "1")
t.setAttribute("cellspacing", "0")
t.setAttribute("cellpadding", "0")

t.style.height = "600px"
t.style.width = "600px"
t.style.borderCollapse = "collapse"
t.style.tableLayout = "fixed"
t.style.textAlign = "center"
t.style.fontSize = "40px"

let pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
]
for (let i = 0; i < 8; i++) {
    let tr = document.createElement("tr")
    t.append(tr)

    for (let j = 0; j < 8; j++) {
        let td = document.createElement("td")
        tr.append(td)

        td.style.height = "75px"
        td.style.width = "75px"

        td.style.textAlign = "center"
        td.style.verticalAlign = "middle"

        if ((i + j) % 2 == 0) {
            td.style.backgroundColor = "pink"
        } else {
            td.style.backgroundColor = "white"
        }
        td.textContent = pieces[i][j]
    }
}