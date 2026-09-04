let form = document.querySelector("form")
let inp1 = document.querySelector("#inp1")
let inp2 = document.querySelector("#inp2")
let inp3 = document.querySelector("#inp3")
let inp4 = document.querySelector("#inp4")
let table = document.querySelector("#employeeTable")
let editRow = null
form.addEventListener("click", (e) => {
    e.preventDefault()

    if (e.target.innerText == "ADD") {
        if (
            inp1.value != "" &&
            inp2.value != "" &&
            inp3.value != "" &&
            inp4.value != ""
        ) {
            table.innerHTML += `
                <tr>
                    <td>${inp1.value}</td>
                    <td>${inp2.value}</td>
                    <td>${inp3.value}</td>
                    <td>${inp4.value}</td>
                    <td>
                        <button type="button">
                            Edit
                        </button>
                    </td>
                    <td>
                        <button type="button">
                            Delete
                        </button>
                    </td>
                </tr>`
            inp1.value = ""
            inp2.value = ""
            inp3.value = ""
            inp4.value = ""
        } else {
            alert("Please fill all the fields")
        }
    } else if (e.target.innerText == "Edit") {
        editRow = e.target.parentElement.parentElement
        inp1.value = editRow.cells[0].innerText
        inp2.value = editRow.cells[1].innerText
        inp3.value = editRow.cells[2].innerText
        inp4.value = editRow.cells[3].innerText
        e.target.innerText = "Update"
    } else if (e.target.innerText == "Update") {
        editRow.cells[0].innerText = inp1.value
        editRow.cells[1].innerText = inp2.value
        editRow.cells[2].innerText = inp3.value
        editRow.cells[3].innerText = inp4.value
        e.target.innerText = "Edit"
        inp1.value = ""
        inp2.value = ""
        inp3.value = ""
        inp4.value = ""
        editRow = null
    } else if (e.target.innerText == "Delete") {
        e.target.parentElement.parentElement.remove()
    }
})