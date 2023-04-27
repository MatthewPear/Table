const myTable = document.createElement("TABLE");
myTable.setAttribute("id", "myTable");
myTable.classList.add("table");
document.body.appendChild(myTable);

const tblBody = document.createElement("tbody");
myTable.appendChild(tblBody);

for (let i = 1; i < 11; i++) {
    const myRow = document.createElement("TR");
    myRow.setAttribute("id", "row" + i);
    myRow.classList.add("row");
    tblBody.appendChild(myRow);

    for (let j = 1; j < 11; j++) {
        const myData = document.createElement("TD");
        myData.setAttribute("id", "data" + j);
        myData.classList.add("data");
        myRow.appendChild(myData);
    }
}

const inputRow = document.getElementById('rowInput');
const inputData = document.getElementById('dataInput');
const btnFind = document.getElementById('button');
btnFind.addEventListener('click', () => findCell());

function findCell () {
    console.log("row:", inputRow.value);
    console.log("data:", inputData.value);

    // myData.classList.add("data red");

}
