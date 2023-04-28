const myTable = document.createElement("TABLE");
myTable.setAttribute("id", "myTable");
myTable.classList.add("table");
document.body.appendChild(myTable);

const tblBody = document.createElement("tbody");
tblBody.setAttribute("id", "tblBody")
myTable.appendChild(tblBody);

for (let i = 1; i < 11; i++) {
    const myRow = document.createElement("TR");
    myRow.setAttribute("id", "row" + i);
    myRow.classList.add("row");
    tblBody.appendChild(myRow);

    for (let j = 1; j < 11; j++) {
        const myData = document.createElement("TD");
        let cellID = 'row' + i + 'data' + j;
        myData.setAttribute("id", cellID);
        myData.setAttribute("name", "data");
        myData.classList.add("data");
        myRow.appendChild(myData);
    }
}

const inputRow = document.getElementById('rowInput');
const inputData = document.getElementById('dataInput');
const btnMark = document.getElementById('button');
btnMark.addEventListener('click', () => markCell());

function markCell () {
    console.log("row:", inputRow.value);
    console.log("data:", inputData.value);

    const clearCell = [...document.getElementsByName('data')];
    clearCell.forEach((el) => {
        el.classList.remove("redData");
        el.classList.add("data");
    })
    
    myCell = document.getElementById("row" + inputRow.value + "data" + inputData.value)
    // myCell = document.getElementById("myTable").rows[inputRow.value].cells.namedItem("data" + inputData.value);
    console.log("myCell: ", myCell);
    myCell.classList.add("redData");
    

}