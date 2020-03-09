let arrayDetails = [];
let namel = document.getElementById('name');
let mail = document.getElementById('email');
let id = document.getElementById('id');
let add = document.getElementById('cu-action');
let table = document.getElementById('table-body');
let currIDVal = null;
idVal = 1;

add.addEventListener('click', addToArray);

function addToArray() {
    
    if (currIDVal) {  //update condition
        arrayDetails.map(myObj => {
            if (myObj.myID === currIDVal) {
                myObj.fname = document.getElementById('name').value;
                myObj.mymail = document.getElementById('email').value;
            }
            return myObj;
        })
        updateTableValue(null, 'ADD');
    }
    else {//add condition
        displayObj = {};
        displayObj.myID = idVal++;
        displayObj.fname = namel.value;
        displayObj.mymail = mail.value;
        arrayDetails.push(displayObj);
    }
    buildTable();
}
function resetValue() {
    namel.value = "";
    mail.value = "";
}
function updateTableValue(myID, text) {
    currIDVal = myID;
    add.innerText = text;
}
function buildTable() {
    let rows = '';
    arrayDetails.forEach(displayObj => {
        const tr = `<tr>
   <td>${displayObj.myID}</td>
   <td>${displayObj.fname}</td>
   <td>${displayObj.mymail}</td>
   <td><button type='button' onclick='editEntry(${displayObj.myID})' class='btn btn-default'>Edit</button></td>
   <td><button type='button' onclick='entryDelete(${displayObj.myID})' class='btn btn-default'>Delete</button></td>
   </tr>`;
        rows += tr;
    });
    table.innerHTML = rows;
    resetValue();
}
function editEntry(getID) {
    arrayDetails.forEach(temp => {
        if (temp.myID === getID) {
            document.getElementById('name').value = temp.fname;
            document.getElementById('email').value = temp.mymail;
        }
    });
    updateTableValue(getID, 'UPDATE');
}
function entryDelete(getID) {
    arrayDetails = arrayDetails.filter(arrayDetails => arrayDetails.myID != getID)
    buildTable();
}




