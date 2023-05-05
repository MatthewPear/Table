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
        let cellID = 'row' + i + '-' + 'data' + j;
        myData.setAttribute("id", cellID);
        myData.setAttribute("name", "data");
        myData.classList.add("data");
        myRow.appendChild(myData);
    }
}
//////////////////TASK1
// const inputRow = document.getElementById('rowInput');
// const inputData = document.getElementById('dataInput');
// const btnMark = document.getElementById('button');
// btnMark.addEventListener('click', () => markCell());

// function markCell () {
//     console.log("row:", inputRow.value);
//     console.log("data:", inputData.value);

//     const clearCell = [...document.getElementsByName('data')];
//     clearCell.forEach((el) => {
//         el.classList.remove("redData");
//         el.classList.add("data");
//     })
    
//     myCell = document.getElementById("row" + inputRow.value + "data" + inputData.value)
//     // myCell = document.getElementById("myTable").rows[inputRow.value].cells.namedItem("data" + inputData.value);
//     console.log("myCell: ", myCell);
//     myCell.classList.add("redData");
// }
const primeCell = document.getElementById("row5-data5")
primeCell.classList.add("redData");

const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
btnUp.addEventListener('click', () => moveCell('Up'));
btnDown.addEventListener('click', () => moveCell('Down'));
btnLeft.addEventListener('click', () => moveCell('Left'));
btnRight.addEventListener('click', () => moveCell('Right'));

document.addEventListener('keydown', (event) => {
    console.log('keybord:', event)
    console.log('click on:', event.key)

    if (event.key === 'ArrowUp') {
        moveCell('Up')
    } else if (event.key === 'ArrowDown') {
        moveCell('Down')
    } else if (event.key === 'ArrowLeft') {
        moveCell('Left')
    } else if (event.key === 'ArrowRight') {
        moveCell('Right')
    }
})

let activeCell = [...document.getElementsByClassName("redData")];
console.log('activeCell', activeCell[0].id)

let activeRow = activeCell[0].id.split('-')[0].split('row')[1];
console.log("activeRow", activeRow);

let activeData = activeCell[0].id.split('-')[1].split('data')[1];
console.log("activeData", activeData);


function moveCell (direction) {
    console.log('direction', direction);

    const clearCell = [...document.getElementsByName('data')];
    clearCell.forEach((el) => {
        el.classList.remove("redData");
        el.classList.add("data");
    })

    if (direction === 'Up') {
            let activeCellID = 'row' + (+activeRow - 1) + '-' + 'data' + activeData;
            activeCell[0].setAttribute("id", activeCellID);
            activeCell[0].classList.remove("data");
            activeCell[0].classList.add("redData");
            console.log('activeCellID', activeCellID)
        
    } else if (direction === 'Down') {
            let activeCellID = 'row' + (+activeRow + 1) + '-' + 'data' + activeData;
            activeCell[0].setAttribute("id", activeCellID);
            activeCell[0].classList.remove("data");
            activeCell[0].classList.add("redData");
            console.log('activeCellID', activeCellID)

    } else if (direction === 'Left') {
            let activeCellID = 'row' + activeRow + '-' + 'data' + (+activeData - 1);
            activeCell[0].setAttribute("id", activeCellID);
            activeCell[0].classList.remove("data");
            activeCell[0].classList.add("redData");
            console.log('activeCellID', activeCellID)

    } else if (direction === 'Right') {
            let activeCellID = 'row' + activeRow  + '-' + 'data' + (+activeData + 1);
            activeCell[0].setAttribute("id", activeCellID);
            activeCell[0].classList.remove("data");
            activeCell[0].classList.add("redData");
            console.log('activeCellID', activeCellID)
    }
}