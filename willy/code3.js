// init
var arrUser = [
    { no: 1, username: 'Alee', email: 'alee@gmail.com', role: 'admin' },
    { no: 2, username: 'Jennie', email: 'jennie@gmail.com', role: 'user' },
    { no: 3, username: 'Elsa', email: 'elsa@disney.com', role: 'user' },

];

indexEdit = -1

function printData(arr) {
    let result = arr.map((val, index) => {
        if (indexEdit == index) {
            return `<tr>
                <td>${val.no}</td>
                <td><input type="text" placeholder="username" value="${val.username}" id="inputEditNama${index}"></td>
                <td><input type="text" placeholder="email" value="${val.email}" id="inputEditEmail${index}"></td>
                <td>
                <select name="" id="inputEditRole${index}">
                <option value="user">User</option>
                 <option value="admin">Admin</option>
                </select>
                </td>
                <td>
                    <input type="button" value="Save" onclick="onSaveClick(${val.no})">
                    <input type="button" value="Cancel" onclick="onCancelClick()">
                 </td>
            </tr>`
        }
        return `<tr>
                <td>${val.no}</td>
                <td>${val.username}</td>
                <td>${val.email}</td>
                <td>${val.role}</td>
                <td>
                    <input type="button" value="Delete" onclick="onDeleteClick()">
                    <input type="button" value="Edit" onclick="onEditClick(${index})">
                 </td>
            </tr>`
    })
    document.getElementById('renderData').innerHTML = result.join('')
}
printData(arrUser)

function submitData() {
    let id = 4
    let inputnama = document.getElementById('inputnama').value
    let inputemail = document.getElementById('inputemail').value
    let inputrole = document.getElementById('inputrole').value

    if (inputnama && inputemail && inputrole) {
        var result = { no: id, username: inputnama, email: inputemail, role: inputrole }
        arrUser.push(result)
        printData(arrUser)
    } else {
        alert('Data yang anda masukan kurang')
    }
}

function onDeleteClick(id) {
    let indexdel = arrUser.findIndex((val) => {
        return val.no == id
    })
    arrUser.splice(indexdel, 1)
    printData(arrUser)
}

function onEditClick(index) {
    indexEdit = index
    printData(arrUser)
}

function onSaveClick(id) {
    var editNama = document.getElementById('inputEditNama' + indexEdit).value
    var editEmail = document.getElementById('inputEditEmail' + indexEdit).value
    var editRole = document.getElementById('inputEditRole' + indexEdit).value
    let indexEd = arrUser.findIndex((val) => {
        return val.no == id
    })
    arrUser[indexEd].username = editNama
    arrUser[indexEd].email = editEmail
    arrUser[indexEd].role = editRole
    indexEdit = -1
    printData(arrUser)
}

function onCancelClick() {
    indexEdit = -1
    printData(arrUser)
}