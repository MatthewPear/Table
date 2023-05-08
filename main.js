const myTable = document.createElement("TABLE");
myTable.setAttribute("id", "myTable");
myTable.classList.add("table");
document.body.appendChild(myTable);

const tblBody = document.createElement("tbody");
tblBody.setAttribute("id", "tblBody")
myTable.appendChild(tblBody);

for (let i = 1; i < 11; i++) {
    const myRow = document.createElement("TR");
    myRow.setAttribute("id", i);
    myRow.classList.add("row");
    tblBody.appendChild(myRow);

    for (let j = 1; j < 11; j++) {
        const myData = document.createElement("TD");
        let cellID = i + '-' + j;
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
let x = Math.floor((Math.random() * 10) + 1);
let y = Math.floor((Math.random() * 10) + 1);

const primeCell = document.getElementById(x + '-' + y)
primeCell.classList.add("active-data");

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

let activeCell = primeCell.id.split('-')[0] + '-' + primeCell.id.split('-')[1];
console.log('activeCell', activeCell)

function moveCell (direction) {
    console.log('direction', direction);

    const clearCell = [...document.getElementsByName('data')];
    clearCell.forEach((el) => {
        el.classList.remove("active-data");
        el.classList.add("data");
    })

    if (direction === 'Up') {
            activeCell = (+activeCell.split('-')[0] - 1) + '-' + activeCell.split('-')[1];
            if(+activeCell.split('-')[0] === 0){
                activeCell = (+activeCell.split('-')[0] + 1) + '-' + activeCell.split('-')[1];
            }
            let nextCell = document.getElementById(activeCell);
            nextCell.classList.add("active-data");
            console.log('activeCellID', activeCell)
        
    } else if (direction === 'Down') {
            activeCell = (+activeCell.split('-')[0] + 1) + '-' + activeCell.split('-')[1];
            if(+activeCell.split('-')[0] === 11){
                activeCell = (+activeCell.split('-')[0] - 1) + '-' + activeCell.split('-')[1];
            }
            let nextCell = document.getElementById(activeCell);
            nextCell.classList.add("active-data");
            console.log('activeCellID', activeCell)

    } else if (direction === 'Left') {
            activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] - 1);
            if(+activeCell.split('-')[1] === 0){
                activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] + 1);
            }
            let nextCell = document.getElementById(activeCell);
            nextCell.classList.add("active-data");
            console.log('activeCellID', activeCell)

    } else if (direction === 'Right') {
            activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] + 1);
            if(+activeCell.split('-')[1] === 11){
                activeCell = activeCell.split('-')[0] + '-' + (+activeCell.split('-')[1] - 1);
            }
            let nextCell = document.getElementById(activeCell);
            nextCell.classList.add("active-data");
            console.log('activeCellID', activeCell)
    }
}