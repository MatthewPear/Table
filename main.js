const myTable = document.createElement("TABLE");
myTable.setAttribute("id", "myTable");
myTable.classList.add("table");
document.body.appendChild(myTable);

const tblBody = document.createElement("tbody");
myTable.appendChild(tblBody);

for (let i = 0; i < 10; i++) {
    const myRow = document.createElement("TR");
    myRow.setAttribute("id", "row" + i);
    myRow.classList.add("row");
    tblBody.appendChild(myRow);

    for (let j = 0; j < 10; j++) {
        const myData = document.createElement("TD");
        myData.setAttribute("id", "data" + j);
        myData.classList.add("data");
        myRow.appendChild(myData);
    }
}


